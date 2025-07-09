"use client";
import { ScrapForm } from "@/components/scrap/ScrapForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    meta: unknown;
  }) => {
    try {
      setIsSubmitting(true);
      console.log("🪄 Create Data:", { url, memo, tag, meta });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // mock delay
      router.push("/shelf");
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

export default Add;
