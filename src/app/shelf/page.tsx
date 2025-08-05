"use client";
import { PageLayout } from "@/components/common/PageLayout";
import { withAuth } from "@/components/hoc/withAuth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface ScrapItem {
  id: number;
  url: string;
  memo?: string;
  tag?: string;
  imageUrl?: string;
}

const Shelf = () => {
  const router = useRouter();
  const [scraps, setScraps] = useState<ScrapItem[]>([]);
  const [error, setError] = useState("");

  const handleItemClick = (id: number) => {
    router.push(`/shelf/${id}`);
  };

  useEffect(() => {
    const fetchScraps = async () => {
      try {
        const res = await fetch("/api/shelf", {
          method: "GET",
          credentials: "include", // 세션 쿠키 포함해서 보냄
        });

        if (!res.ok) {
          const { error } = await res.json();
          throw new Error(error || "서버 오류");
        }

        const data: ScrapItem[] = await res.json();
        setScraps(data);
      } catch (err: unknown) {
        console.error(err);
        setError("스크랩 불러오기 실패");
      }
    };
    fetchScraps();
  }, []);

  return (
    <PageLayout title="내 서랍 보기">
      <div className="flex flex-row items-center justify-center gap-4">
        <Button variant="default" className="max-w-xs">
          +
        </Button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center mt-12">
        {scraps.map((item) => (
          <div
            key={item.id}
            className="w-48 h-48 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex items-center justify-center"
            onClick={() => handleItemClick(item.id)}
          >
            {item?.imageUrl && (
              <Image
                key={item.id}
                src={item.url}
                width={200}
                height={200}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                alt={`스크랩 이미지 ${item.id}`}
                loading="lazy"
                quality={60}
              />
            )}
            <p>{item.memo}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default withAuth(Shelf);
