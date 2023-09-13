type FastBannerProps = {
  children?: React.ReactNode;
};

export default function FastBanner({ children }: FastBannerProps) {
  return (
    <div className="bg-[#A8C0BF]">
      <div className="flex items-center justify-center  px-6 py-1.5 sm:px-3.5 min-h-[60px] max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
