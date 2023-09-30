import Navbar from "../Navbar/Navbar";
import HeroPage from "../HeroPage/HeroPage";
import TopNews from "../TopNews/TopNews";
import TrendingPage from "../TrendingPage/TrendingPage";
import VideoPage from "../VideoPage/VideoPage";
import AllProducts from "../AllProducts/AllProducts";
import Footer from "../Footer/Footer";
import Food from "../../Food/Food";



const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <HeroPage></HeroPage>
           <TopNews></TopNews>
           <TrendingPage></TrendingPage>
           <VideoPage></VideoPage>
           <AllProducts></AllProducts>
           <Food></Food>
           <Footer></Footer>
        </div>
    );
};

export default Home;