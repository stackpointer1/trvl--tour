import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these Amazing destinations !</h1>
        <div className="card__container">
            <div className="cards__Wrapper">
                <ul className="cards__items">
                  <CardItem 
                      src="images/img-9.jpg"
                      text="Explore the hidden waterfall deep 
                      inside the Amazon jungle"
                      label='Adventure'
                      path='/services'
                  /> 
                    <CardItem 
                      src="images/img-2.jpg"
                      text="Travel through the Island of Bali"
                      label='Luxury'
                      path='/services'
                  />   
                </ul>
                <ul className="cards__items">
                  <CardItem 
                      src="images/img-3.jpg"
                      text="Set sail in the Atlantic Ocean visiting Uncharted Waters"
                      label='Mystery'
                      path='/services'
                  /> 
                    <CardItem 
                      src="images/img-10.jpg"
                      text="Experience Mountain biking on the Himalyas "
                      label='Adventure'
                      path='/services'
                  /> 
                  <CardItem 
                      src="images/img-8.jpg"
                      text="Exploring teh Sahara Desert dunes by camel is a real thrill "
                      label='Adventure'
                      path='/services'
                  /> 

                </ul>
            </div>
        </div>
            
        </div>
    )
}

export default Cards
