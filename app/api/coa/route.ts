import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/db'
import { z } from 'zod'

const accountSchema = z.object({
  code: z.string().min(1, 'Account code is required'),
  name: z.string().min(1, 'Account name is required'),
  type: z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE']),
  parentId: z.string().optional(),
})

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.orgId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const parentId = searchParams.get('parentId')

    const where: any = {
      orgId: session.user.orgId,
      isActive: true,
    }

    if (type) {
      where.type = type
    }

    if (parentId) {
      where.parentId = parentId
    }

    const accounts = await prisma.account.findMany({
      where,
      include: {
        parent: true,
        children: {
          where: { isActive: true },
          orderBy: { code: 'asc' }
        }
      },
      orderBy: { code: 'asc' }
    })

    return NextResponse.json(accounts)
  } catch (error) {
    console.error('Error fetching accounts:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.orgId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = accountSchema.parse(body)

    // Check if account code already exists
    const existingAccount = await prisma.account.findFirst({
      where: {
        orgId: session.user.orgId,
        code: validatedData.code,
        isActive: true
      }
    })

    if (existingAccount) {
      return NextResponse.json(
        { error: 'Account code already exists' },
        { status: 400 }
      )
    }

    const account = await prisma.account.create({
      data: {
        ...validatedData,
        orgId: session.user.orgId,
      },
      include: {
        parent: true,
        children: true
      }
    })

    return NextResponse.json(account, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating account:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
