import Img from "../../assets/images/i.png";

const Newsletter = () => {
    return (
        <section className="py-12 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-emerald-700/40 rounded-3xl overflow-hidden relative min-h-[360px] flex items-center">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 px-8 md:px-16 py-12 z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Join the community
                        </h2>
                        <p className="text-white text-lg mb-8 max-w-lg">
                            Enter your email address to receive regular updates, as well as news on 
                            upcoming events and specific offers.
                        </p>
                        
                        {/* Email Form */}
                        <div className="flex flex-col sm:flex-row">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-6 py-4 rounded-l-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="bg-red-300 hover:bg-red-800 text-white px-8 py-4 rounded-r-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                                Subscribe
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-full">
                        <img 
                            src={Img} 
                            alt="Reading illustration" 
                            className="absolute bottom-0 right-0 h-full w-full object-contain object-bottom-right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;