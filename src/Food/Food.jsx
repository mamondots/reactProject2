import { useEffect, useState } from 'react';

const Food = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])

    const foodProducts = products.filter((product) =>product.category === 'food')
    return (
        <div className='lg:px-28 md:px-16 sm:px-12 px-12 py-6 al-nav'>
            <div className="flex items-center justify-between text-[#2f2f2f]">
               <h2 className="text-4xl font-semibold">Food & Drink</h2>
               <p className="text-base font-medium more-btn">ALL FOOD & DRINKS</p>
           </div>

           <div
           data-aos="zoom-in-up"
           data-aos-duration="1500"
           className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 py-6 relative cursor-pointer'>
              {
                foodProducts.map(food =><div key={food.id}>
                        <div className='top-img group'>
                            <img src={food.image} alt="" />
                            <div className='bottom-[2vh] px-4 left-0 absolute'>
                                <h2 className='text-base font-medium text-white py-2 group-hover:text-[#FF2C54] duration-300'>{food.title}</h2>
                                <p className='text-[#f9f9f984]'>{food.user}</p>
                            </div>
                        </div>
                </div>)
              }
           </div>
        </div>
    );
};

export default Food;