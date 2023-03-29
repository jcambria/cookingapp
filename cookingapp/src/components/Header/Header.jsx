import React from 'react'
import { GiSpoon } from 'react-icons/gi';
import './header.css'




const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <img src="" alt="" />
          <GiSpoon className='spoon' /> 
         <h1 className='app__header-h1' >To Help Dads Everywhere</h1>

         <p id='slogon'>Meals created by dads for dads</p>
         <p>n fdkjandfjkdnfjkndkjasfnjkdsanfkjanfkjnajsfnjsan</p>
         <button id='explorebutton'>Explore More</button>
         <div className='steak'>
         <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/42a33494-9333-4b6c-aeb6-1687e5a63506-resting-steak.jpg" alt="" />


         </div>
        
        </div>

        <div className='app__wrapper_img'>

        </div>
      
    </div>
  )
}

export default Header;
