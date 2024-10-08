import React from 'react'
import './Campous.css'
function Campous() {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src='https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=400' alt=''/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEqOx8LC0JrvHSkIKj8wxnmC6I7o4uSygHQ&usqp=CAU' alt=''/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbhA7G3WxWnCI9mXWEh187YrNh4mm_qDZQQ&usqp=CAU' alt=''/>
            <img src='data:image/jpeg;base64,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' alt=''/>

        </div>
        <button className='btn dark-btn'>See more here<i class="fa-solid fa-arrow-right"></i></button>

    </div>
  )
}

export default Campous