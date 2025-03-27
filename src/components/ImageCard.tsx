import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImageCard;
