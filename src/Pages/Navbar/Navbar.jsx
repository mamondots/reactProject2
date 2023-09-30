import Headroom from 'react-headroom';
import './Navbar.css'
import { BiSearch, BiMenu } from 'react-icons/bi';
const Navbar = () => {
    return (
        <Headroom>
            <div className='lg:px-28 md:px-16 sm:px-12 px-12 py-6 al-nav border-b border-[#26262619] bg-[#FFFFFF]'>
                <div className='flex justify-between items-center'>

                    <div className='flex items-center justify-center'>
                        <div>
                            <h2 className='text-2xl font-bold'>Mamondots</h2>
                        </div>

                        <div className='ml-36 nav-link hidden lg:block'>
                            <ul className='flex items-center'>
                                <li><a href="">Home</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Lifestyle</a></li>
                                <li><a href="">Technology</a></li>
                                <li><a href="">Sports</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center space-x-6 text-2xl font-semibold cursor-pointer'>
                        <p className='hover:text-[red] duration-300'><BiSearch></BiSearch></p>
                        <p className='text-2xl menubar'><BiMenu></BiMenu></p>
                    </div>

                </div>
            </div>
        </Headroom>
    );
};

export default Navbar;