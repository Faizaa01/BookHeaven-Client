import { Link } from "react-router";
import img from "../../assets/images/i1.png";
import img1 from "../../assets/images/i2.png";

const OfferSection = () => {
    return (
        <section className="py-12 px-4">
            <div className="container mx-auto max-w-11/12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* left */}
                    <div className='bg-blue-900/30 h-80 flex flex-row items-stretch overflow-hidden relative'>
                        <div className="w-1/2 flex flex-col justify-center px-8 py-6">
                            <p className="text-xl md:text-2xl font-mono mb-2 animate-fade-in-down opacity-0" 
                                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                                New Collection
                            </p>
                            <h1 className="font-serif text-3xl md:text-4xl text-white mb-6 animate-fade-in-up opacity-0"
                                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                                Up to 30% off
                            </h1>
                            <Link to="/shop">
                            <button className="bg-gray-900/60 hover:bg-white hover:text-black text-white border rounded-full px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up opacity-0 w-fit"
                                    style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                                Shop Now 
                            </button>
                            </Link>
                        </div>
                        <div className="w-1/2 relative animate-slide-in-right opacity-0"
                            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            <img className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-500" src={img} alt="Books" />
                        </div>
                    </div>

                    {/* right */}
                    <div className='bg-rose-200 h-80 flex flex-row items-stretch overflow-hidden relative'>
                        <div className="w-1/2 flex flex-col justify-center px-8 py-6">
                            <p className="text-xl md:text-2xl font-mono mb-2 animate-fade-in-down opacity-0" 
                                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                                Best Collection
                            </p>
                            <h1 className="font-serif text-3xl md:text-4xl text-white mb-6 animate-fade-in-up opacity-0"
                                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                                Buy 1 and get a free book
                            </h1>
                            <Link to="/shop">
                            <button className="bg-gray-900/60 hover:bg-white hover:text-black text-white border rounded-full px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up opacity-0 w-fit"
                                    style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                                Buy Books 
                            </button>
                            </Link>
                        </div>
                        <div className="w-1/2 relative animate-slide-in-right opacity-0"
                            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            <img className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-500" src={img1} alt="Books" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;