import Navbar from "../shared/Navbar/Navbar";
import Footer from "./Footer";


const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const PhotoUrl = form.photo.value;
        const description = form.description.value;

        const newProduct = {name, brand, category, price, PhotoUrl, description};
        console.log(newProduct);

    }
    return (
        <div >
            <Navbar></Navbar>
            <div className="bg-[#F4F3F0] p-24 lg:mx-96 mt-6">
                <h2 className="text-3xl font-bold text-center">Add New Product</h2>
                <p className="text-center mt-4">
                    Discover an exceptional new product, a testament to cutting-edge design and user experience. Elevate your lifestyle with this remarkable addition!</p>
                <form onSubmit={handleAddProduct} className="mt-6">
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="cloth" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <div className="py-4">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text ">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full py-12" />
                            </label>
                        </div>

                    </div>
                    <div className="py-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-secondary w-full mt-6 text-white" />
                </form>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default AddProduct;