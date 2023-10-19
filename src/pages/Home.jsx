import Banner from "../shared/Banner/Banner";
import BestFashion from "./BestFashion";
import Footer from "./Footer";
import NewCollection from "./NewCollection";
import OurProduct from "./OurProduct";



const Home = () => {
    return (
        <div className="text-center">
            <Banner></Banner>
            <NewCollection></NewCollection>
            <BestFashion></BestFashion>
            <OurProduct></OurProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;