import { useEffect } from 'react';
import Image from 'next/image';

// Import Swiper
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
Swiper.use([Navigation]);

export default function ImageSwiper({
  images,
  title,
}: {
  images: { src: string; title: string }[];
  title: string;
}) {
  useEffect(() => {
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-[#F4F3ED] -z-10" aria-hidden="true" />

      {/* Illustration */}
      {/* <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image className="max-w-none" src={Illustration} alt="Illsutration" />
      </div> */}

      <div className="max-w-7xl mx-auto px-8 sm:px-4">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          </div>

          {/* Carousel */}
          <div className="pb-6 md:pb-8" data-aos="fade-up">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none">
              <div className="swiper-wrapper">
                {images.map((image, i) => (
                  <div key={i} className="swiper-slide max-w-[446px] h-auto">
                    {/* Image */}
                    <Image
                      className="w-full aspect-[4/3] object-cover h-full rounded-lg"
                      src={image.src}
                      width="446"
                      height="335"
                      alt="Carousel 01"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex mt-12 space-x-3 justify-end">
              <button className="carousel-prev relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-[#A8C0BF]">
                <span className="sr-only">Previous</span>
                <svg
                  className="fill-white group-hover:fill-white transition duration-150 ease-in-out"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m3.914 5 3.5-3.5L6 .086 1.086 5H1v.086L.086 6 1 6.914V7h.086L6 11.914 7.414 10.5 3.914 7H13V5z" />
                </svg>
              </button>
              <button className="carousel-next relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-[#A8C0BF]">
                <span className="sr-only">Next</span>
                <svg
                  className="fill-white group-hover:fill-white transition duration-150 ease-in-out"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m9.086 5-3.5-3.5L7 .086 11.914 5H12v.086l.914.914-.914.914V7h-.086L7 11.914 5.586 10.5l3.5-3.5H0V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
