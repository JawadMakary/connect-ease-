const Banner = ({ name, imgUrl, isHome }) => {
  const user = JSON.parse(localStorage.getItem("userGoogle"));
  return (
    <>
      {!isHome ? (
        <div
          className={`${
            imgUrl
              ? `bg-cover bg-center mb-5 h-[500px] flex items-center justify-center text-white`
              : "bg-gray-300 bg-cover bg-center mb-5 h-[300px] flex items-center justify-center text-white"
          }`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <h1 className="text-5xl">{name}</h1>
        </div>
      ) : (
        <div
          className={`${
            imgUrl
              ? `bg-cover bg-center mb-5 h-[500px] pl-7 pt-20  text-white`
              : "bg-gray-300 bg-cover bg-center mb-5 h-[300px] flex items-center justify-center text-white"
          }`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="h-52 flex justify-center flex-col items-start">
            <h1 className="text-[4rem] mb-5">{name}</h1>
            <span className="w-96 text-justify mb-7 leading-8">
              Welcome to your ultimate destination for all your technical
              support needs. Experience unparalleled assistance and solutions
              tailored just for you.
            </span>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                if (user) {
                  window.location.href = "/guides";
                } else {
                  window.location.href = "/login";
                }
              }}
            >
              {!user ? "Login" : "Our Guides"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
