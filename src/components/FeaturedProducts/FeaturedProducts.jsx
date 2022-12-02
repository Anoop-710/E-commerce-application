import React from 'react';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
const FeaturedProducts = ({type}) => {

    const data = [
        {
             id: 1,
            title: 'Product 1',
            image: 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
            price: 'Free shipping',
            priceCurrency: 'USD',
        },
        {
             id: 1,
            title: 'Product 1',
            image: 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
            price: 'Free shipping',
            priceCurrency: 'USD',
        }
    ]
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>


      {/* For each data present , call the card component */}
      <div className="bottom">
        {data.map(item => 
            <Card item={item} key={item.id}/>
            
            ) }
      </div>
    </div>
  )
}

export default FeaturedProducts