"use client";

import { useState } from "react";
import { DebouncedButton } from "@/components/common/DebouncedButton";
import { FormLayout } from "@/components/common/FormLayout";
import { LabeledInput } from "@/components/common/LabeledInput";
import LinkPreview from "@/components/common/LinkPreview";
import { urlRegex } from "@/utils/const";

interface MetaData {
  title: string;
  image: string;
  error?: string;
}

interface ScrapFormProps {
  mode: "create" | "edit";
  initialUrl?: string;
  initialMemo?: string;
  initialTag?: string;
  onSubmit: (data: {
    url: string;
    memo: string;
    tag: string;
    meta: MetaData | null;
  }) => void;
  isSubmitting: boolean;
}

export const ScrapForm = ({
  mode,
  initialUrl = "",
  initialMemo = "",
  initialTag = "",
  onSubmit,
  isSubmitting,
}: ScrapFormProps) => {
  const [url, setUrl] = useState(initialUrl);
  const [memo, setMemo] = useState(initialMemo);
  const [tag, setTag] = useState(initialTag);
  const [meta, setMeta] = useState<MetaData | null>(null);
  const [urlError, setUrlError] = useState<string | null>(null);

  const fetchMetadata = async () => {
    const res = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    setMeta({
      title: data.title,
      image: data.image,
      error: data.error,
    });
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
    if (!value) {
      setMeta(null);
      setUrlError(null);
    } else if (!urlRegex.test(value)) {
      setUrlError("유효한 URL 형식이 아닙니다.");
    } else {
      setUrlError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ url, memo, tag, meta });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout
        title={mode === "create" ? "스크랩 등록" : "스크랩 자세히 보기"}
        footerText={
          mode === "create"
            ? "스크랩할 컨텐츠를 등록하세요."
            : "스크랩 정보를 수정할 수 있습니다."
        }
      >
        <LabeledInput
          className="border p-2 w-full rounded"
          id="url"
          type="text"
          label="URL"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://example.com 또는 www.example.com"
          error={urlError}
          required
        />
        <DebouncedButton
          className="bg-black text-white px-4 py-2 rounded mt-10"
          type="button"
          aria-label="미리보기 가져오기"
          onClick={fetchMetadata}
          disabled={!!urlError}
        >
          미리보기 가져오기
        </DebouncedButton>

        {meta && (
          <LinkPreview
            title={meta.title}
            image={meta.image}
            error={meta.error}
          />
        )}

        <LabeledInput
          id="memo"
          type="text"
          label="메모"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
        <LabeledInput
          id="tag"
          type="text"
          label="태그"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />

        <DebouncedButton
          type="submit"
          className="w-full bg-blue-500 text-white hover:bg-blue-600 mt-4"
          disabled={!url || !!urlError || isSubmitting}
          loading={isSubmitting}
          onClick={function (): void {
            console.log("TODO: 스크랩 등록/수정 API 호출");
            throw new Error("Function not implemented.");
          }}
        >
          {mode === "create" ? "저장" : "수정"}
        </DebouncedButton>
      </FormLayout>
    </form>
  );
};
