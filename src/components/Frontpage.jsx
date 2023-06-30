import React from 'react'
import  "./css/front.css"
const Frontpage = () => {
  return (
    <div className='front'>
        <div className='frontLogo'>
        <img  src="https://www.ethiosss.org/wp-content/uploads/2022/09/photo_2022-09-11_16-29-03-1.jpg" alt="SSGI-logo" />
        </div>
        <div className='frontMenu'>
<h1 classname="menuOne">Menu1</h1>
<h1 classname="menuTwo">Menu2</h1>
<h1 className="menuThree">Menu3</h1>
<h1 className="menuFour">Menu4</h1>


        </div>
        <button className='FrontButton'>Login</button>
        <div className='frontImage'>
            <img src="" alt="" />
        </div>

      
    </div>
  )
}

export default Frontpage
