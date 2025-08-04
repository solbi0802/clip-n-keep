import { supabase } from "@/lib/supabase/supabase";
import { NextRequest, NextResponse } from "next/server";

// 📌 GET: 전체 스크랩 조회
export async function getShelves() {
  const { data, error } = await supabase.from("shelf").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// 📌 POST: 새 스크랩 생성
export async function createShelf(req: NextRequest) {
  const body = await req.json();
  const { url, memo, tag, user_id } = body;

  const { data, error } = await supabase
    .from("shelf")
    .insert([{ url, memo, tag, user_id }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

// 📌 PATCH: 특정 스크랩 수정
export async function updateShelf(req: NextRequest) {
  const body = await req.json();
  const { id, memo, tag } = body;

  const { error } = await supabase
    .from("shelf")
    .update({ memo, tag })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Updated successfully" });
}

// 📌 DELETE: 특정 스크랩 삭제
export async function deleteShelf(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const { error } = await supabase.from("shelf").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Deleted successfully" });
}
