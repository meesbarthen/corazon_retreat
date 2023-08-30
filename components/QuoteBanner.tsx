type FastBannerProps = {
  children: React.ReactNode;
};

export default function FastBanner({ children }: FastBannerProps) {
  return (
    <div className="flex items-center justify-center bg-[#A8C0BF] px-6 py-2.5 sm:px-3.5 min-h-32">
      {children}
    </div>
  );
}
