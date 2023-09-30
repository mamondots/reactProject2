import './TopNews.css'
import topImg from '../../assets/img/post_10.jpg'
import topImg2 from '../../assets/img/post_12.jpg'
import topImg3 from '../../assets/img/post_13.jpg'
const TopNews = () => {
    return (
        <div className='lg:px-28 md:px-16 sm:px-12 px-12 py-12 al-nav bg-[#F9F9F9] relative'>
           <div className="flex items-center justify-between">
               <h2 className="text-4xl font-semibold">Top Stories</h2>
               <p className="text-base font-medium more-btn">ALL TOP STORIES</p>
           </div>

           <div className='flex flex-wrap lg:flex-nowrap gap-4 py-8'>

             <div
             data-aos="fade-right"
             data-aos-duration="1500"
              className='lg:w-2/3 w-full group'>
                <div className='top-img overflow-hidden'>
                    <img className='' src={topImg} alt="" />
                </div>
                <div className='top-content hidden lg:block absolute bottom-[25vh] px-20'>
                     <p className='px-4 py-1 text-white text-sm bg-[#5856D5] inline-block'>TRAVEL</p>
                     <p className='text-2xl font-semibold py-2 text-white'>50 Years After The Moon Landing: <br></br>How Close Is Space</p>
                     <div className='flex items-center space-x-3 text-[#ffffff87]'>
                        <p>By axilthemes</p>
                        <p>Sept 28,2023</p>
                        <p><span>4043 views</span></p>
                        <p><span>203 Shares</span></p>
                     </div>
                </div>
             </div>

             <div className='lg:w-1/3 w-full lg:space-y-2 gap-4 relative'>

                    <div
                    data-aos="fade-down"
                    data-aos-duration="1500"
                     className='relative'>
                       <div className='top-img overflow-hidden'>
                       <img className='w-full' src={topImg2} alt="" />
                       </div>

                        <div className='top-content absolute bottom-8 px-8'>
                     <p className='px-4 py-1 text-white text-sm bg-[#C0CB63] inline-block'>TRAVEL</p>
                     <p className='text-base font-semibold py-2 text-white'>These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</p>
                     <div className='flex items-center space-x-3 text-[#ffffff87]'>
                        <p>By axilthemes</p>
                        <p><span>4043 views</span></p>
                     </div>
                        </div>
                    </div>
                    
                    <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    
                    className='relative'>
                       <div className='top-img overflow-hidden'>
                       <img className='w-full' src={topImg3} alt="" />
                       </div>

                       <div className='top-content absolute bottom-8 px-8'>
                     <p className='px-4 py-1 text-white text-sm bg-[#27C6D9] inline-block'>TRAVEL</p>
                     <p className='text-base font-semibold py-2 text-white'>These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales</p>
                     <div className='flex items-center space-x-3 text-[#ffffff87]'>
                        <p>By axilthemes</p>
                        <p><span>4043 views</span></p>
                     </div>
                        </div>
                    </div>

             </div>

           </div>
        </div>
    );
};

export default TopNews;