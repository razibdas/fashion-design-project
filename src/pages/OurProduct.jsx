
import { motion } from 'framer-motion'

const OurProduct = () => {
 
    
    return (
       
        <div className="mt-12 text-center">
        <h2 className="text-6xl font-bold">Our Product</h2>
        <h2 className="text-2xl font-bold mt-4">New Arrival!</h2>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-56 gap-6">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className="w-[200px] h-[200px]" src="https://i.ibb.co/NmyZnh7/sajjad-tameh-L5-PLPVPs6x-U-unsplash.jpg" alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <div className="text-center">
                        <h2 className="card-title text-center">Shirt</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img className="w-[200px] h-[200px]" src="https://i.ibb.co/q18CYXh/nima-mot-FS8-UJxxv6r8-unsplash.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shirt</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img className="w-[200px] h-[200px]" src="https://i.ibb.co/C1t5Dyj/mediamodifier-ogmenj2-NGho-unsplash.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">TShirt</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img className="w-[200px] h-[200px]" src="https://i.ibb.co/pR9Q6kW/wengang-zhai-f-OL6ebf-ECQ-unsplash.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img className="w-[200px] h-[200px]" src="https://i.ibb.co/XVNYYp5/alireza-esmaeeli-68-QYgn-Kuum-Q-unsplash.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">jacket</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full  bg-base-100 shadow-xl">
                <figure><img className="w-[200px] h-[200px]" src="https://i.ibb.co/BTGnnjN/clarisse-meyer-rx47-C9f-Bccg-unsplash.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Pant</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default OurProduct;