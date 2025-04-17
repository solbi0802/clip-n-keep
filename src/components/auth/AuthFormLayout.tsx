import Link from "next/link";

interface AuthFormLayoutProps {
  title: string;
  children: React.ReactNode;
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

export const AuthFormLayout = ({
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthFormLayoutProps) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <section
        className="w-full max-w-sm space-y-6"
        aria-labelledby="auth-title"
      >
        <header>
          <h2 id="auth-title" className="text-2xl font-semibold text-center">
            {title}
          </h2>
        </header>

        <form className="space-y-4">{children}</form>
        {footerText && footerLinkText && footerLinkHref && (
          <footer>
            <p className="text-sm text-center text-gray-500">
              {footerText}{" "}
              <Link href={footerLinkHref} className="text-blue-500 underline">
                {footerLinkText}
              </Link>
            </p>
          </footer>
        )}
      </section>
    </main>
  );
};
