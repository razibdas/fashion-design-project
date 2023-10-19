import Navbar from "../Navbar/Navbar";




const Banner = () => {

  return (
    <div className="relative h-full w-full bg-[#EEDDCC] ">
      <img
        src="https://i.ibb.co/VN1y0Yn/stylish-happy-girl-shopping-portrait-modern-woman-with-shop-bag-laughing-smiling-satisfied.jpg"
        alt="image 1"
        style={{ height: '80vh' }}
        className="  w-full object-cover"
      />
      <div className="absolute inset-0  h-full w-full place-items-center bg-black/75 ">
        <Navbar></Navbar>
        <div className="flex  items-center justify-center lg:mt-36 ">
          <div className="w-[50%]">
            <h2 className="text-white text-4xl font-bold">Find the Best<br></br> Fashion Style for You</h2>
            <p className="text-white mt-4">
              Haute Couture Unleashed: Embracing Elegance and Innovation<br></br> in 21st Century Fashion Design Trends and Creations.</p>
            <button className="btn btn-secondary text-white mt-4">Shop Now</button>
          </div>
          <div className="w-[50%]">
            <img className="md:w-[400px]  md:h-[450px] rounded-lg" src="https://i.ibb.co/Dgfk6gm/2871859-7083.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>

  );
};

export default Banner;




