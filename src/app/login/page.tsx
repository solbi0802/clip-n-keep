"use client";
import { FormLayout } from "@/components/common/FormLayout";
import { LabeledInput } from "@/components/common/LabeledInput";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    } else {
      router.push("/shelf");
    }
  };

  return (
    <FormLayout
      title="로그인"
      footerText="아직 계정이 없으신가요?"
      footerLinkText="회원가입"
      footerLinkHref="/signup"
    >
      <form onSubmit={handleLogin} className="space-y-4">
        <LabeledInput
          label={"이메일"}
          id={"email"}
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></LabeledInput>
        <LabeledInput
          label={"비밀번호"}
          id={"password"}
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LabeledInput>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </FormLayout>
  );
};

export default Login;
