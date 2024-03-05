"use client";

import ImageGallery from "react-image-gallery";

export const images = [
  {
    original: "/1.jpg",
    thumbnail: "/1.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/2.jpg",
    thumbnail: "/2.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/3.jpg",
    thumbnail: "/3.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/4.jpg",
    thumbnail: "/4.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/5.jpg",
    thumbnail: "/5.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/6.jpg",
    thumbnail: "/6.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/7.jpg",
    thumbnail: "/7.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/8.jpg",
    thumbnail: "/8.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/9.jpg",
    thumbnail: "/9.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/10.jpg",
    thumbnail: "/10.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/11.jpg",
    thumbnail: "/11.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
];
export function Gallery() {
  return (
    <div style={{ height: 20 }}>
      <ImageGallery items={images} />
    </div>
  );
}
