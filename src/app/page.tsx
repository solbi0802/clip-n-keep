import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-sky-500">Clip & Keep</h1>
      <main className="row-start-2 flex flex-col items-center sm:items-start gap-8">
        <section className="flex gap-4 items-center text-center flex-col sm:flex-col">
          <p className="text-xl font-semibold">
            나만의 콘텐츠, 깔끔하게 정리하세요
          </p>
          <p className="text-base text-gray-500">
            링크, 이미지, 텍스트 등 흩어진 콘텐츠를
            <br />
            나만의 서랍에 저장하고 쉽게 찾아보세요.
          </p>
          <Link href="/login">
            <Button className="mx-auto sm:mx-0 cursor-pointer">
              지금 정리해보기
            </Button>
          </Link>
        </section>
      </main>

      {/* 추후 footer 구성 예정 */}
      <footer className="row-start-3 flex gap-6 items-center justify-center" />
    </div>
  );
}
