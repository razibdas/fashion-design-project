import { Link } from "react-router-dom";

const FashionCard = ({ fashion }) => {
    console.log(fashion);
    const { id, brandName, image } = fashion;
    return (
        <>
            <Link to={`/allFashionBrands/${brandName}`}>
                <div className="card w-full card-compact  bg-base-100 shadow-xl">
                    <figure><img className="w-[200px] h-[200px] " src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl justify-center">{brandName}</h2>

                    </div>
                </div>
            </Link>
        </>
    );
};

export default FashionCard;