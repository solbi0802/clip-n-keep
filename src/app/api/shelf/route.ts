import { supabase } from "@/lib/supabase/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// 📌 GET: 전체 스크랩 조회
export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("shelf")
    .select("*")
    .eq("owner_id", session.user.id); // 현재 로그인한 유저 기준 필터

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
// 📌 POST: 스크랩 추가
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { url, memo, tag, owner_id } = body;

  const { data, error } = await supabase
    .from("shelf")
    .insert([{ url, memo, tag, owner_id }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

// 📌 PATCH: 특정 스크랩 수정
export async function PATCH(req: NextRequest) {
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
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const { error } = await supabase.from("shelf").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Deleted successfully" });
}
