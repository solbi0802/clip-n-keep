"use client";

interface MetaData {
  title: string;
  image: string;
  error?: string;
  description?: string;
  url?: string;
}

export default function LinkPreview(metaData: MetaData) {
  const { title, image, error } = metaData;
  return (
    <>
      {!error && metaData ? (
        <div className="border rounded p-4 mt-2">
          <p className="font-bold">{title}</p>
          {image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="썸네일" className="mt-2 w-60" />
          )}
        </div>
      ) : (
        <div className="border rounded p-4 mt-2 text-gray-500">
          <p>
            썸네일 없음
            <br />
            해당 URL은 미리보기 정보없이 저장됩니다.
          </p>
        </div>
      )}
    </>
  );
}
