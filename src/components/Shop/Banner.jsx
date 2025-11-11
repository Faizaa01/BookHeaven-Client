import bg from "../../assets/images/4.jpg";
import Img from "../../assets/images/i3.jpg";

const Banner = () => {
    return (
    <section className="relative w-full h-[300px] mx-auto flex">
      <div 
        className="relative w-3/4 h-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${bg})`}}
      >
        <div className="absolute inset-0"></div>
        
        <div className="relative text-left px-24 z-10 text-stone-600">
          <p className="text-3xl mb-6 font-serif">
            Explore Our
          </p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Library
          </h1>
        </div>
      </div>

      <div className="w-1/4 h-full flex items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src={Img}
          alt="Shop product"
        />
      </div>
    </section>
  );
};

export default Banner;