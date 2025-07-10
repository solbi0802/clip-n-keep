"use client";
import { useAuthStore } from "@/store/authStore";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const supabase = createClientComponentClient();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user?.email) {
        setUser({
          ...data.session.user,
          email: data.session.user.email,
        });
      }
    };
    getSession();
  }, [setUser]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout(); // Zustand 상태 초기화
    router.push("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm">
      <Link href="/" className="text-2xl font-bold text-sky-600">
        Clip & Keep
      </Link>
      <nav>
        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm text-gray-600 hover:text-black transition hover:cursor-pointer"
          >
            로그아웃
          </button>
        ) : (
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
