import ImageSwiper from "@/components/ImageSwiper";

const images = [
  {
    title: "Accommodation 1",
    src: "/accom_1.jpg",
  },
  {
    title: "Accommodation 2",
    src: "/accom_2.jpg",
  },
  {
    title: "Accommodation 2",
    src: "/homepage-slider6.jpeg",
  },
  {
    title: "Accommodation 3",
    src: "/accom_3.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_11.jpeg",
  },
  {
    title: "Accommodation 4",
    src: "/accom_4.jpg",
  },
  {
    title: "Accommodation 5",
    src: "/accom_5.jpg",
  },
  {
    title: "Accommodation",
    src: "/about_picture.jpeg",
  },
  {
    title: "Accommodation 6",
    src: "/accom_6.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_12.jpeg",
  },
  {
    title: "Accommodation 7",
    src: "/accom_7.jpg",
  },
  {
    title: "Accommodation 8",
    src: "/accom_8.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_13.jpeg",
  },
  {
    title: "Accommodation 9",
    src: "/accom_9.jpg",
  },
  {
    title: "Accommodation 10",
    src: "/accom_10.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_14.jpeg",
  },
  {
    title: "Accommodation",
    src: "/background_hero.webp",
  },
];

export default function index() {
  return (
    <div className="w-screen">
      <ImageSwiper images={images} title="Our amazing accomodation" />
      {/* <AccommodationGallery /> */}
    </div>
  );
}
