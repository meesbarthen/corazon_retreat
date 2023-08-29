export default function PictureHalfScreen() {
  return (
    <div className="h-[50vh] w-full relative">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/background_hero.webp"
        alt=""
      />
    </div>
  );
}
