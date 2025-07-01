"use client";
import { PageLayout } from "@/components/common/PageLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const imageList = Array(32).fill(
  "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?fm=jpg&q=60&w=500"
);

const Shelf = () => {
  return (
    <PageLayout title="내 서랍 보기">
      <div className="flex flex-row items-center justify-center gap-4">
        <Button variant="default" className="max-w-xs">
          +
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center mt-12">
        {imageList.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={200}
            height={200}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            alt={`스크랩 이미지 ${index + 1}`}
            loading="lazy"
            quality={60}
            onClick={() => alert(`TODO:이미지 ${index + 1} 상세보기로 이동`)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default Shelf;
