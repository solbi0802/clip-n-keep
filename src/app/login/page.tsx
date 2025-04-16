import { LabeledInput } from "@/components/common/LabeledInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <section
        className="w-full max-w-sm space-y-6"
        aria-labelledby="login-heading"
      >
        <header>
          <h2 id="login-heading" className="text-2xl font-semibold text-center">
            로그인
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
          <Button type="submit" className="w-full">
            로그인
          </Button>
        </form>
        <footer>
          <p className="text-sm text-center text-gray-500">
            아직 계정이 없으신가요?{" "}
            <Link href="/signup" className="text-blue-500 underline">
              회원가입
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Login;
