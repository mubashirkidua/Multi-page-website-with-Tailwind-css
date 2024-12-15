
import React from 'react'

const Footballs = () => {

    const productData = [

        { id: 1, name: 'Nike', price: 3000, description: 'Pure shining Leather and colorfull football', image: '/Nike-Style.jpeg'},
        { id: 2, name: 'Alpha', price: 2000, description: 'Pure shining Leather and colorfull football', image: '/Alpha-Style.jpeg'},
        { id: 3, name: 'Asian', price: 2500, description: 'Pure shining Leather and colorfull football', image: '/Asian-Style.jpeg'},
        { id: 4, name: 'Modern', price: 3500, description: 'Pure shining Leather and colorfull football', image: '/Modern-Style.jpeg'},
        { id: 5, name: 'Omega', price: 4000, description: 'Pure shining Leather and colorfull football', image: '/Omega-Style.jpeg'},
        { id: 6, name: 'Standard', price: 5000, description: 'Pure shining Leather and colorfull football', image: '/Standard-Style.jpeg'},
        
          ];
  return (
    
          <div className='footballs grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
            {productData.map((football) => (
              <div key={football.id} className='football-card bg-white p-5 rounded-md shadow-md text-center'>
                <img src={football.image} alt={football.name}  className='w-full rounded-md transition-transform duration-300 transform hover:scale-110' />
                <h3 className='mt-4 text-2xl font-bold'>{football.name}</h3>
                <p className='text-gray-500'>{football.description}</p>
                <div className='price text-blue-500 text-xl font-semibold mt-2'>${football.price}</div>
                <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>Add to Cart</button>
    
              </div>
            ))
    
            }
          </div>
          
        );
    };
    
    export default Footballs;
  
  

    

