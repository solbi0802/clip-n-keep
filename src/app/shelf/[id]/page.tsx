"use client";
import { ScrapForm } from "@/components/scrap/ScrapForm";
import { useState } from "react";

const ShelfDetail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 더미 데이터
  const existing = {
    url: "https://example.com",
    memo: "기존 메모",
    tag: "기존태그",
  };

  const handleUpdate = async ({
    url,
    memo,
    tag,
    meta,
  }: {
    url: string;
    memo: string;
    tag: string;
    meta: unknown;
  }) => {
    setIsSubmitting(true);
    // ✅ TODO: update API 호출
    console.log("🛠️ Update Data:", { url, memo, tag, meta });
    setTimeout(() => setIsSubmitting(false), 1000);
  };
  return (
    <ScrapForm
      mode="edit"
      initialUrl={existing.url}
      initialMemo={existing.memo}
      initialTag={existing.tag}
      onSubmit={handleUpdate}
      isSubmitting={isSubmitting}
    />
  );
};

export default ShelfDetail;
