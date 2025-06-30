"use client";
import { FormLayout } from "@/components/common/FormLayout";
import { LabeledInput } from "@/components/common/LabeledInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "sonner";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (confirmPassword !== password) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      toast("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      setTimeout(() => {
        router.push("/login");
      }, 1500); // 1.5초 후에 로그인 페이지로 리다이렉션
    }
  };
  return (
    <FormLayout
      title="회원가입"
      footerText="이미 계정이 있으신가요?"
      footerLinkText="로그인"
      footerLinkHref="/login"
    >
      <form onSubmit={handleSignup} className="space-y-4">
        <LabeledInput
          label={"이메일"}
          id={"email"}
          type="email"
          placeholder="이메일을 입력하세요"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LabeledInput
          label={"비밀번호"}
          id={"password"}
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LabeledInput
          label="비밀번호 확인"
          id="confirm-password"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <Button type="submit" className="w-full">
          회원가입
        </Button>
      </form>
    </FormLayout>
  );
};

export default Signup;
