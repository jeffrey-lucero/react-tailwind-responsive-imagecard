import React from "react";
import ImageCard from "./components/ImageCard";

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8 p-4">
      {/* Stretching the First Image */}
      <ImageCard
        src="assets/images/exam/colors.png"
        alt="Sesimi Colors"
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
      />

      {/* Responsive Grid for Two Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <ImageCard
          src="assets/images/exam/1080x1080.png"
          alt="Social Post"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
        <ImageCard
          src="assets/images/exam/1080x1920.png"
          alt="Social Story"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
};

export default App;
