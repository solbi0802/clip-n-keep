"use client";

import { FormLayout } from "@/components/common/FormLayout";
import { LabeledInput } from "@/components/common/LabeledInput";
import LinkPreview from "@/components/common/LinkPreview";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MetaData {
  title: string;
  image: string;
  error?: string;
  description?: string;
  url?: string;
}

const Add = () => {
  const [url, setUrl] = useState("");
  const [meta, setMeta] = useState<MetaData | null>(null);

  const fetchMetadata = async () => {
    const res = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    console.log("Fetched metadata:", data); // debugging line
    setMeta({
      title: data.title,
      image: data.image,
      error: data.error,
    });

    return data;
  };

  return (
    <FormLayout
      title="스크랩 등록"
      footerText="스크랩할 컨텐츠를 등록하세요. URL, 메모, 태그를 입력할 수 있습니다."
    >
      <LabeledInput
        type="text"
        label={"URL"}
        id={"url"}
        value={url}
        placeholder="링크를 붙여넣으세요"
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <button
        type="button"
        disabled={!url}
        onClick={fetchMetadata}
        className="bg-black text-white px-4 py-2 rounded"
      >
        미리보기 가져오기
      </button>
      {meta && (
        <LinkPreview
          title={meta?.title}
          image={meta?.image}
          error={meta?.error}
        />
      )}
      <LabeledInput label={"메모"} id={"memo"} type="text"></LabeledInput>
      <LabeledInput label="태그" id="tag" type="tag" />
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => {
          console.log("TODO: 스크랩 추가 API 호출");
        }}
      >
        저장
      </Button>
    </FormLayout>
  );
};

export default Add;
