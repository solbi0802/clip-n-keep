"use client";

import { DebouncedButton } from "@/components/common/DebouncedButton";
import { FormLayout } from "@/components/common/FormLayout";
import { LabeledInput } from "@/components/common/LabeledInput";
import LinkPreview from "@/components/common/LinkPreview";
import { urlRegex } from "@/utils/const";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ShelfDetail = () => {
  const router = useRouter();

  const [url, setUrl] = useState("https://example.com"); // 초기 URL 값 임의 설정(추후 API로 가져올 예정)
  const [urlError, setUrlError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
    if (!value) {
      setUrlError(null);
    } else if (!urlRegex.test(value)) {
      setUrlError(
        "유효한 URL 형식이 아닙니다. (http://, https:// 또는 www. 포함)"
      );
    } else {
      setUrlError(null);
    }
  };

  return (
    <FormLayout title="스크랩 자세히 보기">
      <LabeledInput
        id={"url"}
        type="text"
        label={"URL"}
        value={url}
        placeholder="https://example.com 또는 www.example.com"
        onChange={handleChange}
        className="border p-2 w-full rounded"
        aria-label="스크랩한 URL 입력"
        error={urlError}
        required
      />
      <LinkPreview
        title={""}
        image={
          "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?fm=jpg&q=60&w=500"
        }
      />
      <LabeledInput label={"메모"} id={"memo"} type="text"></LabeledInput>
      <LabeledInput label="태그" id="tag" type="tag" />
      <DebouncedButton
        type="submit"
        className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        disabled={!url || !!urlError || isLoading}
        aria-label="스크랩 수정"
        onClick={() => {
          setIsLoading(true);
          console.log("TODO: 스크랩 수정 API 호출");
          setIsLoading(false);
          router.push("/shelf");
        }}
        loading={isLoading}
      >
        수정
      </DebouncedButton>
    </FormLayout>
  );
};

export default ShelfDetail;
