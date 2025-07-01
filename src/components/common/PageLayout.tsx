"use client";

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      {title && <h1 className="text-4xl font-bold text-sky-500">{title}</h1>}
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
};
