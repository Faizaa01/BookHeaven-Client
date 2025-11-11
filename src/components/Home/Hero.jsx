import { Link } from "react-router";
import bg from "../../assets/images/0.jpg";
import bk from "../../assets/images/b1.png";

const Hero = () => {
    return (
        <section
      className="w-full h-[550px] mx-auto bg-cover bg-center flex justify-center items-center px-4 md:px-8 relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="container w-full flex flex-col md:flex-row items-center justify-around px-4 md:px-8 relative z-10">
        {/* Left Content  */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lime-800 text-2xl font-medium font-serif py-4 mt-4 animate-fade-in-down opacity-0" 
             style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            BEST COLLECTION FOR YOU
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 animate-fade-in-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Book That Inspire, Stories That Stay
          </h1>
          <Link to="shop">
          <button className="bg-lime-900/60 hover:bg-red-300 text-white px-6 py-3 mt-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up opacity-0"
                  style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Shop Now
          </button>
          </Link>
        </div>

        {/* Right Image  */}
        <div className="max-w-md md:w-1/2 flex justify-center animate-slide-in-right opacity-0"
             style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <img className="w-2/3 md:w-full drop-shadow-2xl hover:scale-105 transition-transform duration-500" src={bk} alt="Books" />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }
      `}</style>
    </section>
    );
};

export default Hero;