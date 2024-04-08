import React from 'react';
import productStore from '../../store/productStore';
import { Link } from 'react-router-dom';
let img = 'https://w0.peakpx.com/wallpaper/587/312/HD-wallpaper-indian-girl-beautiful-eyes-hair-insta-lips-model-smile.jpg'

const Products = () => {

    const {  ProductList } = productStore()








    return (
        <div className="MainAdsData md:w-3/4">
            <div>
                <p className="text-slate-600 font-semibold text-sm mb-5">Total Result Showing: {ProductList.length}</p>
            </div>


            {


                ProductList.map((product, index) => {
                    return (

                        <div key={index}>
                            <div className="item border rounded-md py-2 px-2 mb-4">
                                <Link className="flex gap-5" to={`/details/${product._id}`} >
                                    <div className="img_file md:h-[140px] w-[150px] truncate">
                                        <img style={{height:'80px'}} className="w-100 " src={product.image} alt="" />
                                        {/* <img style={{widths:'100px'}} className="w-[100%] h-auto" src={product.image} alt="" /> */}
                                    </div>
                                    <div className="text__file ml-2 md:ml-0 w-[calc(100%_-_150px)]">
                                        <div className="header__text">
                                            <h2 className="text-slate-700 font-semibold text-lg">{product.title} <span className="text-xs"> {product.condition==='new'?<p>(New)</p>:<></>} </span></h2>
                                        </div><div className="category"><p className="text-slate-500 text-sm">{product.brand}</p>
                                        <p className="text-slate-500 text-sm">{product.district}</p>
                                        </div>
                                        <div className="price  text-base font-semibold text-[#6366F1]">Tk {product.price}</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })

            }






        </div>
    );
};

export default Products;