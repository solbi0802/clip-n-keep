"use client";
import { LabeledInput } from "@/components/common/LabeledInput";
import { Button } from "@/components/ui/button";

const Signup = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <section
        className="w-full max-w-sm space-y-6"
        aria-labelledby="login-heading"
      >
        <header>
          <h2 id="login-heading" className="text-2xl font-semibold text-center">
            회원가입
          </h2>
        </header>
        <form className="space-y-4">
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
              console.log("TODO: 회원가입 API 호출");
            }}
          >
            등록
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Signup;
