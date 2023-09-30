import banner from '../../assets/img/clientbanner.jpg'
import banner2 from '../../assets/img/clientbanner2.jpg'
import categoryImg from '../../assets/img/car.jpg'
import categoryImg2 from '../../assets/img/man.jpg'
import categoryImg3 from '../../assets/img/golf.jpg'
import categoryImg4 from '../../assets/img/Technology.jpg'

import insta1 from '../../assets/img/insta01.jpg'
import insta2 from '../../assets/img/insta02.jpg'
import insta3 from '../../assets/img/insta03.jpg'
import insta4 from '../../assets/img/insta04.jpg'
import insta5 from '../../assets/img/insta05.jpg'
import insta6 from '../../assets/img/insta06.jpg'


import './AllProducts.css'

import { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='lg:px-28 md:px-16 sm:px-12 px-12 py-12 al-nav'>
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
            
            className="flex flex-wrap lg:flex-nowrap gap-8">

                <div className="lg:w-2/3">
                    <div>
                        <img src={banner} alt="" />
                    </div>

                    <div className='py-12 space-y-4'>
                        {
                            products.slice(0, 9).map(product => <div key={product.id}>
                                <div className='flex space-x-4 group cursor-pointer'>
                                    <div className='w-1/3 overflow-hidden'>
                                        <img className='group-hover:scale-110 duration-300' src={product.image} alt="" />
                                    </div>
                                    <div className='w-2/3'>
                                        <p className='px-3 py-1 text-white text-sm bg-[#5856D5] inline-block group-hover:text-white group-hover:bg-[#262626] duration-300'>{product.name}</p>
                                        <h2 className='py-4 text-xl font-medium group-hover:text-[#FF2D54] duration-300'>{product.title}</h2>
                                        <div className='flex items-center space-x-4 text-[#03030396]'>
                                            <p>{product.user}</p>
                                            <p>{product.views} views</p>
                                        </div>
                                        <p className='py-4 text-[#03030396]'>{product.description}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                <div className="lg:w-1/3">
                        <div>
                            <img src={banner2} alt="" />
                        </div>

                        <div>
                            <h2 className='text-xl font-bold py-2 mt-6 border-b text-[#262626]'>Categories</h2>

                            <div className='grid grid-cols-2 gap-4 py-8 relative cursor-pointer'>

                                <div className='catImg overflow-hidden hover:scale-110 duration-300'>
                                    <img className='' src={categoryImg} alt="" />
                                    <div className='absolute top-[35%] left-[18%] text-center'>
                                        <p className='text-2xl font-bold text-white'>01</p>
                                        <p className='text-[#ffffffa1] font-medium'>Accessories</p>
                                    </div>
                                </div>

                                <div className='catImg overflow-hidden hover:scale-110 duration-300'>
                                <img src={categoryImg2} alt="" />
                                <div className='absolute top-[35%] left-[18%] text-center'>
                                        <p className='text-2xl font-bold text-white'>01</p>
                                        <p className='text-[#ffffffa1] font-medium'>Adventure</p>
                                    </div>
                                </div>

                                <div className='catImg overflow-hidden hover:scale-110 duration-300'>
                                <img src={categoryImg3} alt="" />
                                <div className='absolute top-[35%] left-[18%] text-center'>
                                        <p className='text-2xl font-bold text-white'>01</p>
                                        <p className='text-[#ffffffa1] font-medium'>Advertishing</p>
                                    </div>
                                </div>

                                <div className='catImg overflow-hidden hover:scale-110 duration-300'>
                                <img src={categoryImg4} alt="" />
                                <div className='absolute top-[35%] left-[18%] text-center'>
                                        <p className='text-2xl font-bold text-white'>01</p>
                                        <p className='text-[#ffffffa1] font-medium'>Alpineringer</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                        <h2 className='text-xl font-bold py-2 mt-6 border-b text-[#262626]'>Tags
                        </h2>

                        <div className='flex gap-2 flex-wrap py-6 cursor-pointer'>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>accessories</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>advertising</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>beauty</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>beauty business</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>business</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>canada</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>chemical</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>food</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>google VR</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>makeup</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>painting</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>personality</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>sensitive</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>simulator</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>skincare</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>social</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>technology</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>travel</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>trip</p>
                             <p className='py-1 px-2 border-2 text-[#26262690] hover:bg-[#FF2C54] hover:text-white font-medium duration-300'>vegetables</p>
                        </div>

                        </div>

                        <div>
                        <h2 className='text-xl font-bold py-2 mt-6 border-b text-[#262626]'>Instagram</h2>

                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 py-6 cursor-pointer over'>
                            
                            <div className='overflow-hidden'>
                            <img className='hover:scale-110 duration-300 w-full' src={insta1} alt="" />
                            </div>

                            <div className='overflow-hidden'>
                            <img className='hover:scale-110 duration-300 w-full' src={insta2} alt="" />
                            </div>

                            <div className='overflow-hidden'>
                            <img className='hover:scale-110 duration-300 w-full' src={insta3} alt="" />
                            </div>

                            <div className='overflow-hidden'>
                            <img className='hover:scale-110 duration-300 w-full' src={insta4} alt="" />
                            </div>

                            <div className='overflow-hidden'>
                            <img className='hover:scale-110 duration-300 w-full' src={insta5} alt="" />
                            </div>

                            <div className='overflow-hidden'>
                            <img className='hover:scale-110 duration-300 w-full' src={insta6} alt="" />
                            </div>
                            
                        </div>

                        </div>
                </div>

            </div>
        </div>
    );
};

export default AllProducts;