export default function PictureHalfScreen() {
  return (
    <div className="h-[40vh] w-full relative">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center]"
        src="/merel-with-heart.jpeg"
        alt=""
      />
    </div>
  );
}
