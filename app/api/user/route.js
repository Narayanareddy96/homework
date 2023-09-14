// import axios from '@/util/axios';
import prisma from '../../../util/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const data = await prisma.user.findMany();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(request) {
  try {
    const redata = await request.json();
    // console.log(redata);
    const newUser = await prisma.user.create({
      data: redata,
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
export async function PUT(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    const redata = await request.json();
    delete redata.id;
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: redata,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    console.log(id);
    const deleteUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json(deleteUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
