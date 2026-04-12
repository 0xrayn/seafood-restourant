import { NextRequest, NextResponse } from "next/server";
import { store } from "../../../../lib/store";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "seafood123";

function checkAuth(req: NextRequest): boolean {
  return req.headers.get("x-admin-password") === ADMIN_PASSWORD;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const idx = store.findIndex(m => m.id === Number(id));
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const body = await req.json();
  store[idx] = { ...store[idx], ...body, id: store[idx].id };
  return NextResponse.json({ item: store[idx] });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const idx = store.findIndex(m => m.id === Number(id));
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
  store.splice(idx, 1);
  return NextResponse.json({ success: true });
}
