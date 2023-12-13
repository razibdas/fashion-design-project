import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Fashions from "./Fashions";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "./Footer";

const AllFashionCards = () => {
    const [allFashions, setAllFashions] = useState([]);

    const allFashionBrands = useLoaderData();
    console.log(allFashionBrands);
    const { brandName } = useParams();


    useEffect(() => {
        const fashionsData = allFashionBrands.filter(allFashion => allFashion.brandName === brandName)
        setAllFashions(fashionsData)
    }, [brandName, allFashionBrands])

    return (
        <div className="mt-8">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-56 gap-6 mt-8">
                {
                    allFashions.map(fashion => <Fashions key={fashion._id} fashion={fashion}></Fashions>)
                }
            </div>
            <div className="mt-36">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default AllFashionCards;