import im1 from "../../assets/images/im1.jpg";
import im2 from "../../assets/images/im2.jpg";
import im3 from "../../assets/images/im3.jpg";
import im4 from "../../assets/images/im4.jpg";

const Badges = () => {
    const features = [
        {
            image: im1,
            title: "Selection",
            description: "We have more than 13 hundreds titles to choose from, from the earliest board books to the all-time classics."
        },
        {
            image: im2,
            title: "Purchasing Power",
            description: "With Wish Lists you can choose to be notified the instant we find a copy, see how often we find rare titles."
        },
        {
            image: im3,
            title: "Used & New books",
            description: "If there is no demand for a book, we will donate it to charity, or we'll recycle it"
        },
        {
            image: im4,
            title: "Shipping & More",
            description: "When you've found the books you want we'll ship qualifying orders to your door for FREE."
        }
    ];

    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-around items-start gap-8">
                    {features.map((feature, index) => (
                        <div key={index} 
                            className="flex flex-col items-center text-center flex-1 hover:scale-105 transition-transform duration-300">
                            {/* Image */}
                            <div className="w-32 h-32 mb-4 flex items-center justify-center">
                                <img 
                                    src={feature.image} 
                                    alt={feature.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Badges;