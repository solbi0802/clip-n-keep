"use client";
import { AuthFormLayout } from "@/components/auth/AuthFormLayout";
import { LabeledInput } from "@/components/common/LabeledInput";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <AuthFormLayout
      title="로그인"
      footerText="아직 계정이 없으신가요?"
      footerLinkText="회원가입"
      footerLinkHref="/signup"
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
      <Button
        type="submit"
        className="w-full"
        onClick={() => {
          console.log("TODO: 로그인 API 호출");
        }}
      >
        로그인
      </Button>
    </AuthFormLayout>
  );
};

export default Login;
