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
            미리보기 정보 불러오기에 실패했습니다.
            <br />
            올바른 URL을 입력해주세요.
          </p>
        </div>
      )}
    </>
  );
}
