import React from "react";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import productStore from "../../store/productStore";

const ImageGallary = () => {
  const { ProductDetails } = productStore();

  const images = [
    {
      original: ProductDetails.details.img1
        ? ProductDetails.details.img1
        : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      original: ProductDetails.details.img2 ? ProductDetails.details.img2 : "",
    },
    {
      original: ProductDetails.details.img3 ? ProductDetails.details.img3 : "",
    },
    {
      original: ProductDetails.details.img4 ? ProductDetails.details.img4 : "",
    },
    {
      original: ProductDetails.details.img5 ? ProductDetails.details.img5 : "",
    },
  ].filter((img) => img.original !== "undefined");

  return (
    <div className="max-w-[500px] mx-auto">
    <ImageGallery
      autoPlay={false}
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={true}
      renderItem={(item) => (
        <div className="h-[300px] md:h-[400px] flex justify-center items-center overflow-hidden bg-gray-100 rounded-lg">
          <img src={item.original} alt="Product" />
        </div>
      )}
      additionalClass="custom-gallery"
    />
  </div>
  );
};

export default ImageGallary;










