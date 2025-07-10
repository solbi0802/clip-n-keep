"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export const withAuth = (WrappedComponent: React.ComponentType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ComponentWithAuth = (props: any) => {
    const router = useRouter();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
      if (!user) {
        router.replace("/login");
      }
    }, [user, router]);

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
  return ComponentWithAuth;
};
