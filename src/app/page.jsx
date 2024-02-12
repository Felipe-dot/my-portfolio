import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 mid:px-12 lg:px-20 xl:48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src="/hero.png"
          alt="hero image"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col  lg:h-full lg:w-1/2 gap-8 items-center justify-center">
        {/* title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Dital Experiences, Designing Tomorrow
        </h1>
        <p className="md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eaque
          tenetur ullam ex architecto, ipsam autem, doloremque officia odio
          neque earum. Eaque expedita blanditiis animi voluptatibus iure
          perferendis quam nobis!
        </p>
        {/* buttons */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
