import React from 'react';
import { Book, Newspaper, Package, Ghost, Heart, Sparkles, Zap, Star, HeartHandshake, Search } from 'lucide-react';

const Categories = () => {
    const categories = [
    { id: 1, name: 'Science', icon: Book },
    { id: 2, name: 'Drama', icon: Newspaper },
    { id: 3, name: 'Self-Help', icon: Package },
    { id: 4, name: 'Horror', icon: Ghost },
    { id: 5, name: 'Romance', icon: Heart },
    { id: 6, name: 'Fantasy', icon: Sparkles },
    { id: 7, name: 'History', icon: Zap },
    { id: 8, name: 'Biography', icon: Star },
    { id: 9, name: 'Mystery', icon: Search },
    { id: 10, name: 'Philosophy', icon: HeartHandshake },
    ];

    return (
        <section className="py-12 px-4 bg-stone-100">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl text-center text-rose-900/60 mb-8">
                    Genre Collection
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={category.id}
                                className="bg-white rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                    <IconComponent className="w-8 h-8 text-gray-700" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {category.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;