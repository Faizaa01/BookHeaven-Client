import bg from "../assets/images/1.jpg";
import bg1 from "../assets/images/3.jpg";
import { BookOpen, Laptop, Users, GraduationCap, Handshake, Accessibility } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="py-32 px-4" style={{backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">About Our Library</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Empowering minds through knowledge and fostering a community of lifelong learners
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4 bg-lime-800/40">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-3xl font-bold text-stone-500 mb-4">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To provide accessible, comprehensive library services that support education, 
                                research, and personal growth. We strive to create an inclusive environment 
                                where every member of our community can explore, learn, and discover the joy 
                                of reading.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-3xl font-bold text-stone-500 mb-4">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To be a leading hub of knowledge and innovation, inspiring curiosity and 
                                excellence in our community. We envision a future where our library serves 
                                as a cornerstone for intellectual development and cultural enrichment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Features */}
            <section className="py-12 px-4" style={{backgroundImage: `url(${bg})`}}>
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                                    <BookOpen className="w-8 h-8 text-sky-300" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Extensive Collection</h3>
                            <p className="text-gray-600">
                                Over 100,000 books, journals, and digital resources across all genres
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                                    <Laptop className="w-8 h-8 text-purple-300" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Digital Access</h3>
                            <p className="text-gray-600">
                                24/7 online catalog, e-books, and remote access to databases
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <Users className="w-8 h-8 text-yellow-300" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Community Programs</h3>
                            <p className="text-gray-600">
                                Regular workshops, reading clubs, and educational events for all ages
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center">
                                    <GraduationCap className="w-8 h-8 text-lime-300" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Study Spaces</h3>
                            <p className="text-gray-600">
                                Quiet reading rooms, group study areas, and private research facilities
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                                    <Handshake className="w-8 h-8 text-pink-300" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Expert Staff</h3>
                            <p className="text-gray-600">
                                Knowledgeable librarians ready to assist with research and recommendations
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <Accessibility className="w-8 h-8 text-indigo-300" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                            <p className="text-gray-600">
                                Fully accessible facilities and resources for all community members
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 px-4 bg-amber-900/20" >
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Story</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            Founded in 1985, our library has been serving the community for over three decades. 
                            What started as a small collection of 5,000 books has grown into a comprehensive 
                            resource center with over 100,000 titles spanning various genres, subjects, and formats.
                        </p>
                        <p>
                            Throughout the years, we've evolved with technology while maintaining our commitment 
                            to traditional library values. Today, we offer not just physical books, but also 
                            digital resources, e-books, audiobooks, and online databases to meet the diverse 
                            needs of our modern community.
                        </p>
                        <p>
                            Our library has become more than just a place to borrow books – it's a community 
                            center where people gather for events, workshops, study groups, and cultural programs. 
                            We take pride in being a safe, welcoming space for learners of all ages.
                        </p>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-12 px-4 bg-red-200 text-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-10">By The Numbers</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">100K+</div>
                            <div className="text-lg">Books & Resources</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">15K+</div>
                            <div className="text-lg">Active Members</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50K+</div>
                            <div className="text-lg">Annual Visitors</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">200+</div>
                            <div className="text-lg">Events Per Year</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-12 px-4" style={{backgroundImage: `url(${bg})`}}>
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">✓</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Accessibility for All</h3>
                                <p className="text-gray-700">
                                    We believe knowledge should be accessible to everyone, regardless of 
                                    background, age, or ability.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">✓</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Intellectual Freedom</h3>
                                <p className="text-gray-700">
                                    We champion the freedom to read, learn, and explore diverse perspectives 
                                    and ideas.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">✓</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Community Connection</h3>
                                <p className="text-gray-700">
                                    We foster a sense of belonging and create spaces where our community 
                                    can connect and grow together.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">✓</div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                                <p className="text-gray-700">
                                    We embrace change and continually adapt our services to meet the 
                                    evolving needs of our users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Community</h2>
                    <p className="text-xl text-gray-700 mb-8">
                        Become a member today and unlock access to our extensive collection and programs
                    </p>
                    <button className="bg-lime-700/40 hover:bg-lime-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
                        Get Your Library Card
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;