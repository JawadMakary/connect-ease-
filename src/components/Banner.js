const Banner = ({ name, imgUrl }) => {
  return (
    <div
      className={`${
        imgUrl ? "bg-[url(" + imgUrl + ")]" : "bg-gray-300"
      } bg-cover bg-center mb-5 h-[300px] flex items-center justify-center text-white`}
    >
      <h1 className="text-5xl">{name}</h1>
    </div>
  );
};
export default Banner;
