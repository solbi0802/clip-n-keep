"use client";
import { PageLayout } from "@/components/common/PageLayout";
import { withAuth } from "@/components/hoc/withAuth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const imageList = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  url: "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?fm=jpg&q=60&w=500",
}));

const Shelf = () => {
  const router = useRouter();

  const handleItemClick = (id: number) => {
    router.push(`/shelf/${id}`);
  };
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
            src={image.url}
            width={200}
            height={200}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            alt={`스크랩 이미지 ${index + 1}`}
            loading="lazy"
            quality={60}
            onClick={() => handleItemClick(image.id)}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default withAuth(Shelf);
