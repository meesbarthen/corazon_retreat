type BannerWithQuoteProps = {
  imagePosition?: "left" | "right";
  imageSrc: string;
  quote: string;
  quoteAuthor: string;
  title: string;
  paragraphs: string[];
  actionLink?: string; // made this optional
  actionLabel?: string; // made this optional
  showButton?: boolean;
};

export default function BannerWithQuote({
  imageSrc,
  quote,
  quoteAuthor,
  title,
  paragraphs,
  actionLink,
  actionLabel,
  imagePosition = "left",
  showButton = true,
}: BannerWithQuoteProps) {
  return (
    <div className="bg-[#F4F3ED] py-4 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-24 lg:grid-cols-2 lg:mx-0 lg:max-w-none ${
            imagePosition === "right" ? "lg:grid-flow-col-dense" : ""
          }`}>
          <div
            className={
              imagePosition === "left"
                ? "lg:pr-4 order-2 lg:order-1"
                : "lg:pl-4 order-2 lg:order-2"
            }>
            <div className="sticky top-0 overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 lg:top-4">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={imageSrc}
                alt=""
              />
              <figure className="relative isolate mt-40">
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>&quot;{quote}&quot;</p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">
                    {quoteAuthor}
                  </strong>
                </figcaption>
              </figure>
            </div>
          </div>

          <div
            className={imagePosition === "left" ? "lg:order-2" : "lg:order-1"}>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>
              <div className="max-w-xl">
                {paragraphs.map((para, index) => (
                  <p className="mt-6" key={index}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
            {showButton && actionLink && actionLabel ? (
              <div className="mt-10 flex">
                <a
                  href={actionLink}
                  className="rounded-md bg-[#AE8466] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  {actionLabel}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
