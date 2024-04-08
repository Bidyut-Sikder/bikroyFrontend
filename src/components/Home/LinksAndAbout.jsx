import React from 'react';

const LinksAndAbout = () => {
    return (

        <div className='max-[600px]:px-3'>
            <div className="quick__link mb-10 mt-6 md:mt-0">
                <div className="container mx-auto">
                    <div className="heading__text mb-3">
                        <h2 className="text-2xl font-bold text-slate-700 mb-4">Quick links</h2>
                    </div>
                    <div className="card__option grid md:grid-cols-4 gap-10"><a href="/all-ads-filter-category/Electronics/1">
                        <div className="card px-4 py-8  bg-[#F3F6F5] rounded-md">
                            <h3 className="text-[14px] text-slate-700 font-bold mb-1">36 Ads in Electronics</h3>
                            <div className="items text-sm"><span> Desktop Computers </span>|<span> Laptops </span>|<span> TVs
                            </span>|<span> Camcorders &amp; Accessories </span>|<span> Audio &amp; Sound Systems </span>
                            </div>
                        </div>
                    </a><a href="/all-ads-filter-category/Home &amp; Living/1">
                            <div className="card px-4 py-8  bg-[#F3F6F5] rounded-md">
                                <h3 className="text-[14px] text-slate-700 font-bold mb-1">16 Ads in Home &amp; Living</h3>
                                <div className="items text-sm"><span> Van </span>|<span> Taxi </span>|<span> Bicycle </span>|<span>
                                    Tractor </span>|<span> Motorcycle </span>|<span> Bus </span>|<span> Scooter
                                    </span>|<span> Fire engine </span>|<span> Recycling truck </span></div>
                            </div>
                        </a><a href="/all-ads-filter-category/Men's Fashion &amp; Grooming/1">
                            <div className="card px-4 py-8  bg-[#F3F6F5] rounded-md">
                                <h3 className="text-[14px] text-slate-700 font-bold mb-1">7 Ads in Men's Fashion</h3>
                                <div className="items text-sm"><span> Soft Flannel Shirts </span>|<span> Styling Community Inspo
                                </span>|<span> TVs </span>|<span> Pants </span>|<span> Clothing </span>|<span> Shoes
                                    </span>|<span> Men's Watches</span></div>
                            </div>
                        </a><a href="/all-ads-filter-category/Women's Fashion &amp; Beauty/1">
                            <div className="card px-4 py-8  bg-[#F3F6F5] rounded-md">
                                <h3 className="text-[14px] text-slate-700 font-bold mb-1">27 Ads in Women's Fashion</h3>
                                <div className="items text-sm"><span> Ladies Western Clothes </span>|<span> Lingerie, Sleep &amp;
                                    Lounge </span>|<span> Shoes </span>|<span> Ladies Watches </span>|<span> Ladies Bag
                                    </span>|<span> Eyewear </span>|</div>
                            </div>
                        </a></div>
                </div>
            </div>
            {/* <!-- about div is here --> */}
            <div className="about mb-10">
                <div className="container mx-auto">
                    <div className="about__section">
                        <div className="header">
                            <h2 className="text-lg text-slate-700 font-bold mb-1">About Buy and Sell Web Application</h2>
                            <p className="text-base text-slate-500 pb-0.5">It is a comprehensive shopping website for all online
                                needs. Where any customer can sell any of his old or new products. On the other hand, any
                                customer has the ability to purchase the product by Money. Here the customer can then post a
                                description and compare the price of the product against the post. On the other hand, if the
                                price of the product seems reasonable, then any customer can come and apply to buy that product.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinksAndAbout;