import { NextRequest, NextResponse } from "next/server";
import { store, getNextId, incrementId } from "../../../lib/store";
import { MenuItem } from "../../../data/menu";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "seafood123";

function checkAuth(req: NextRequest): boolean {
  return req.headers.get("x-admin-password") === ADMIN_PASSWORD;
}

export async function GET() {
  return NextResponse.json({ items: store });
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const id = getNextId();
  incrementId();
  const newItem: MenuItem = {
    id,
    name: body.name ?? "",
    description: body.description ?? "",
    price: Number(body.price) || 0,
    category: body.category ?? "Lainnya",
    image: body.image ?? "",
    badge: body.badge || undefined,
  };
  store.push(newItem);
  return NextResponse.json({ item: newItem }, { status: 201 });
}
