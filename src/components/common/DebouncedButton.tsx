"use client";

import { Button } from "@/components/ui/button";
import debounce from "lodash.debounce";
import { useCallback, useMemo } from "react";

interface DebouncedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  debounceDelay?: number;
  loading?: boolean;
}

export function DebouncedButton({
  onClick,
  debounceDelay = 300,
  loading = false,
  children,
  ...rest
}: DebouncedButtonProps) {
  const debouncedClick = useMemo(
    () => debounce(onClick, debounceDelay),
    [onClick, debounceDelay]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      debouncedClick();
    },
    [debouncedClick]
  );

  return (
    <Button onClick={handleClick} disabled={loading || rest.disabled} {...rest}>
      {loading ? "로딩 중..." : children}
    </Button>
  );
}
