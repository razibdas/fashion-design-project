import { useLoaderData } from "react-router-dom";
import Banner from "../shared/Banner/Banner";
import BestFashion from "./BestFashion";
import Footer from "./Footer";
import NewCollection from "./NewCollection";
import OurProduct from "./OurProduct";
import FashionCard from "./FashionCard";



const Home = () => {

    const fashions = useLoaderData();
  
    return (
        <div className="text-center">
            <Banner></Banner>
            <NewCollection></NewCollection>
            <h2>Fashion Brands: {fashions.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-56 justify-center gap-6">
                {
                    fashions.map(fashion => <FashionCard key={fashion._id} fashion={fashion}></FashionCard>)
                }
            </div>
            <BestFashion></BestFashion>
            <OurProduct></OurProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;