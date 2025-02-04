import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const session = await getServerSession()
  
  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401 }
    )
  }

  try {
    const progress = await prisma.progress.findMany({
      where: {
        userId: session.user.id
      }
    })

    return NextResponse.json(progress)
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch progress' }),
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  const session = await getServerSession()
  
  if (!session) {
    return new NextResponse(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401 }
    )
  }

  try {
    const body = await req.json()
    const { moduleId, progress } = body

    const updatedProgress = await prisma.progress.upsert({
      where: {
        userId_moduleId: {
          userId: session.user.id,
          moduleId
        }
      },
      update: {
        progress
      },
      create: {
        userId: session.user.id,
        moduleId,
        progress
      }
    })

    return NextResponse.json(updatedProgress)
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to update progress' }),
      { status: 500 }
    )
  }
} 