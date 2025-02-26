import React from 'react';
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a wide selection of our best dishes, including a variety of vegetarian, non-vegetarian, and Chinese cuisines. Whether you're in the mood for something spicy, savory, or sweet, we have something to satisfy every craving. Browse through our menu and discover your next favorite meal!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index}  className='explore-menu-list-item'>
                        <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  );
}

export default ExploreMenu;