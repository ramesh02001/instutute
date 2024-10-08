import React from 'react'
import './Program.css'
function Program() {
  return (
    <div className='programs'>
      <div className='program'>
        <img src='https://images.pexels.com/photos/8199599/pexels-photo-8199599.jpeg?auto=compress&cs=tinysrgb&w=400'/>
        <div className='caption'>
         <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2iFjZr9ixBa9RSxcvqSoD8bW3iWx0XOpmQ&usqp=CAU' alt=''/>
         <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img  src='https://images.pexels.com/photos/8199707/pexels-photo-8199707.jpeg?auto=compress&cs=tinysrgb&w=400'/>
            <div className='caption'>
               <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyB-LxEDrRrNg5N2GliSQ1dwvbzhdCRHFN5Q&usqp=CAU' alt=''/>
                <p>Master Degree</p>
             </div>
      </div>
      <div className='program'>
        <img  src='https://images.pexels.com/photos/8457439/pexels-photo-8457439.jpeg?auto=compress&cs=tinysrgb&w=400'/>
           <div className='caption'>
             <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9uv7f-kX4nhJ1d5N3KRobtUjNAJeN8qWsQ&usqp=CAU' alt=''/>
             <p>Post Graduation</p>
             </div>
      </div>

    </div>
  )
}

export default Program