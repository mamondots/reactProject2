import heroImg from '../../assets/img/post_1.jpg'
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import { CiWavePulse1 } from 'react-icons/ci';
import { BiShareAlt } from 'react-icons/bi';
import './HeroPage.css'
import { useEffect, useState } from 'react';
const HeroPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='lg:px-28 md:px-16 sm:px-12 px-12  py-12 al-hero'>
            <div className="grid lg:grid-cols-2 gap-6">

                <div data-aos="fade-right"
                    data-aos-duration="1500"
                    className='group'>
                    <div className='overflow-hidden box-img'>
                        <div className='overflow-hidden'>
                            <img className='overflow-hidden group-hover:scale-105 duration-500' src={heroImg} alt="" />
                        </div>
                        <div className='py-4 cursor-pointer'>
                            <h2 className='lg:text-2xl md:text-2xl text-xl font-semibold text-[#121213] title-text leading-tight'>VR Is the Use of Computer Technology to Create a Simulated Environment.</h2>
                            <div className='lg:flex md:flex flex-wrap lg:gap-0 gap-6 items-center text-[#26262687] py-1 space-x-2'>
                                <p className='flex items-center'><AiOutlineUserSwitch></AiOutlineUserSwitch><span className='px-2 hover:text-[red] duration-300 cursor-pointer'>Ashley Graham</span></p>
                                <p className='flex items-center'><MdOutlineDateRange></MdOutlineDateRange><span className='px-2'>Sept 28 2023</span></p>
                                <p className='flex items-center'><CiWavePulse1></CiWavePulse1><span className='px-2'>1000</span></p>
                                <p className='flex items-center'><BiShareAlt></BiShareAlt><span className='px-2'>42</span></p>
                            </div>
                        </div>
                        <p className='text-[#26262687] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure fuga qui harum! Eveniet doloribus similique officiis repellendus ea quasi commodi libero perspiciatis sint aperiam.</p>
                    </div>

                </div>

                <div>
                <div className="flex items-center justify-between text-[#2f2f2f]">
               <h2 className="text-2xl font-semibold">Recent News</h2>
               <p className="text-base font-medium more-btn">ALL RECENT NEWS
               </p>
           </div>
                    <div data-aos="fade-up"
                        data-aos-duration="1500"
                        className='space-y-4 py-3'>
                        {
                            products.slice(2, 6).map(product => <div key={product.id}>

                                <div className='flex space-x-4 cursor-pointer group'>
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

            </div>
        </div>
    );
};

export default HeroPage;