import { useEffect, useState } from 'react';
import { CiWavePulse1 } from 'react-icons/ci';

const TrendingPage = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    return (
        <div className='lg:px-28 md:px-16 sm:px-12 px-12 py-12 al-nav'>
           <div className="flex items-center justify-between">
               <h2 className="text-4xl font-semibold">Trending Stories</h2>
               <p className="text-base font-medium more-btn">ALL TRENDING STORIES</p>
           </div>

            <div
            data-aos="fade-up-left"
            data-aos-duration="1500"
             className='grid lg:grid-cols-2 space-y-4 py-8 mt-4'>
            {
                        products.slice(2,10).map(product => <div key={product.id}>

                        <div className='cursor-pointer group flex items-center space-x-4'>
                            <div className='w-1/3 overflow-hidden'>
                                <img className='group-hover:scale-110 duration-300' src={product.image} alt="" />
                                </div>
                            <div className='w-2/3'>
                                 <p className='text-white bg-[#FF4F00] px-2 text-sm inline-block group-hover:bg-[#262626] group-hover:text-white duration-300'>{product.name}</p>
                                 <h2 className='lg:text-xl md:text-xl text-base font-medium text-[#262626] py-2 group-hover:text-[#FF4F00] duration-300'>{product.title}</h2>
                                 <div className='flex items-center space-x-4 text-[#26262690]'>
                                    <p>{product.user}</p>
                                    <p className='flex items-center'><CiWavePulse1></CiWavePulse1><span className='px-2'>{product.views}</span> views</p>
                                 </div>
                            </div>
                        </div>

                        </div>)
                      }
            </div>

        </div>
    );
};

export default TrendingPage;