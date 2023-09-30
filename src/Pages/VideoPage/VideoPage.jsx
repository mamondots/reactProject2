import videoImg from '../../assets/img/video.jpg'
import { BsFillPlayFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
const VideoPage = () => { 
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])

    const videoProducts = products.filter((product) =>product.category === 'video')
    return (
        <div className='lg:px-28 md:px-16 sm:px-12 px-12 py-12 al-nav bg-[#000]'>
             <div className="flex items-center justify-between text-[#fff]">
               <h2 className="text-4xl font-semibold">Videos</h2>
               <p className="text-base font-medium more-btn">ALL VIDEOS</p>
           </div>

            <div
            data-aos="fade-up-right"
            data-aos-duration="3000"
            
            className='flex flex-wrap lg:flex-nowrap py-12 gap-8'>

                <div className='lg:w-2/3 relative group cursor-pointer'>
                    <div className='top-img'>
                        <img src={videoImg} alt="" />
                        <div className='z-10 relative'>
                             <p className='px-10 py-10 rounded-full bg-white text-[#262626] text-4xl inline-block absolute top-[-55vh] left-[40%] group-hover:bg-[#FF2C54] group-hover:text-white duration-300 cursor-pointer'><BsFillPlayFill></BsFillPlayFill></p>
                        </div>
                    </div>
                    <div className='video-content hidden lg:block absolute bottom-[-4vh] px-4'>
                         <h2 className='text-white text-2xl font-semibold py-2 group-hover:text-[#FF2C54] duration-300'>These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</h2>
                         <div className='flex items-center space-x-4 text-[#ffffff87]'>
                            <p>By <span className='hover:text-[red] cursor-pointer duration-300 '>axilthemes</span></p>
                            <p>Sept 28,2023</p>
                            <p>1025 views</p>
                            <p>75 Shares</p>
                         </div>
                    </div>
                </div>

                <div className='lg:w-1/3'>
                    <div className='space-y-6'>
                        {
                            videoProducts.map(video =><div key={video.id}>

                                <div className='flex space-x-4 group'>
                                    <div className='w-1/3 relative overflow-hidden cursor-pointer'>
                                        <img className='group-hover:scale-110 duration-300' src={video.image} alt="" />
                                        <p className='px-2 py-2 rounded-full bg-white text-[#262626] text-xl inline-block absolute top-[40px] left-[38px] cursor-pointer group-hover:bg-[#FF2C54] group-hover:text-white duration-300'><BsFillPlayFill></BsFillPlayFill></p>
                                    </div>

                                    <div className='w-2/3 text-white relative'>
                                        <div >
                                        <h2 className='group-hover:text-[#FF2C54] duration-300'>{video.title}</h2>
                                        </div>
                                        <p className='text-[#ffffff87] absolute bottom-[12px]'>{video.user}</p>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default VideoPage;