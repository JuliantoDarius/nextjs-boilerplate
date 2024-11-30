import Image from "next/image";

export const imgPreview = (imgFile: File | undefined) => {
  if (imgFile == null) return undefined;
  const imageUrl = URL.createObjectURL(imgFile);
  return (
    <Image
      alt=""
      src={imageUrl}
      onLoad={() => URL.revokeObjectURL(imageUrl)}
      width={50}
      height={50}
      className="object-contain w-60 h-auto"
    />
  );
};
