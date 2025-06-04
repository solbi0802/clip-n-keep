"use client";
import { LabeledInput } from "@/components/common/LabeledInput";
import { Button } from "@/components/ui/button";
import { FormLayout } from "@/components/common/FormLayout";

const Signup = () => {
  return (
    <FormLayout
      title="회원가입"
      footerText="이미 계정이 있으신가요?"
      footerLinkText="로그인"
      footerLinkHref="/login"
    >
      <LabeledInput
        label={"아이디"}
        id={"id"}
        type="text"
        placeholder="아이디를 입력하세요"
        required
      ></LabeledInput>
      <LabeledInput
        label={"비밀번호"}
        id={"password"}
        type="password"
        placeholder="비밀번호를 입력하세요"
        required
      ></LabeledInput>
      <LabeledInput
        label="비밀번호 확인"
        id="confirm-password"
        type="password"
        placeholder="비밀번호를 다시 입력하세요"
        required
      />
      <Button
        type="submit"
        className="w-full"
        onClick={() => {
          console.log("TODO: 회원가입 API 호출");
        }}
      >
        등록
      </Button>
    </FormLayout>
  );
};

export default Signup;
