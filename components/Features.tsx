export default function Features({
  features,
  title,
  subtitle,
  colorWay = 'light',
}: {
  title?: string;
  subtitle?: string;
  colorWay?: 'light' | 'dark';
  features: {
    title: string;
    text: string;
  }[];
}) {
  return (
    <div className={colorWay === 'light' ? 'bg-[#F4F3ED]' : 'bg-[#F2E7D4]'}>
      <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
        <div className="max-w-screen-xl mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight text-gray-900 font-serif max-w-4xl mx-auto text-center">
            {title}
          </h2>
          <p className="text-gray-500 sm:text-xl font-sans text-center">
            {subtitle}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((item) => (
            <div className="flex flex-col gap-4" key={item.title}>
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-8 w-8 self-center"
              />
              <div className="">
                <h3 className="mb-2 text-xl font-bold text-center ">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-sans text-center px-8">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
