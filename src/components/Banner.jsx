import banner_img from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="mb-64 relative">
      <div className="bg-[#9538E2] text-white text-center pt-5 space-y-6 ">
        <h1 className="text-5xl font-bold w-10/12 mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-7/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-full">Shop Now</button>

        <div className="h-44"></div>
      </div>

      <div className="mx-auto h-[400px] absolute top-64 right-56">
        <img className="h-full" src={banner_img} width={700} alt="" />
      </div>
    </div>
  );
};

export { Banner };
