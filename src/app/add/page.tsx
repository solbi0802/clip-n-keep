"use client";
import { withAuth } from "@/components/hoc/withAuth";
import { ScrapForm } from "@/components/scrap/ScrapForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MetaData } from "../types";

const Add = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async ({
    url,
    memo,
    tag,
    meta,
  }: {
    url: string;
    memo: string;
    tag: string;
    meta: MetaData | null;
  }) => {
    try {
      setIsSubmitting(true);
      console.log("🪄 Create Data:", { url, memo, tag, meta });
      const res = await fetch("/api/shelf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          memo,
          imageUrl: meta?.image || null, // 메타데이터에서 이미지 URL 추출
        }),
      });
      if (res.ok) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // mock delay
        router.push("/shelf");
      } else {
        const { error } = await res.json();
        throw new Error(error || "서버 오류");
      }
    } catch (error) {
      console.error("스크랩 생성 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <ScrapForm
      mode="create"
      onSubmit={handleCreate}
      isSubmitting={isSubmitting}
    />
  );
};

export default withAuth(Add);
