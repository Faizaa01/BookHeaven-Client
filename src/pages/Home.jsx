import Hero from '../components/Home/Hero';
import Badges from '../components/Home/Badges';
import OfferSection from '../components/Home/OfferSection';
import Newsletter from '../components/Home/NewsLetter';
import Book from '../components/Books/Book';
import Category from '../components/Home/Category';
import Author from '../components/Home/author';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Badges/>
            <Book/>
            <OfferSection/>
            <Author/>
            <Category/>
            <Newsletter/>
        </div>
    );
};

export default Home;