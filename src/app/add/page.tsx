"use client";

import { AuthFormLayout } from "@/components/auth/AuthFormLayout";
import { LabeledInput } from "@/components/common/LabeledInput";
import { Button } from "@/components/ui/button";

const Add = () => {
  return (
    <AuthFormLayout
      title="스크랩 등록"
      footerText="스크랩할 컨텐츠를 등록하세요. URL, 메모, 태그를 입력할 수 있습니다."
    >
      <LabeledInput
        label={"URL"}
        id={"url"}
        type="text"
        placeholder="URL을 입력하세요"
        required
      ></LabeledInput>
      <LabeledInput label={"메모"} id={"memo"} type="memo"></LabeledInput>
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
    </AuthFormLayout>
  );
};

export default Add;
