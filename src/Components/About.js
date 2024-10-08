import React from 'react'
import './About.css'
function About({setplaystate}) {
  
  return (
    <div className='about'>
        <div className='about-left'>
        <img className='about-img'  src='https://www.ivywise.com/cdn-cgi/image/fit=scale-down,sharpen=1,quality=60,format=jpeg,width=800/core/wp-content/uploads/2016/02/adobestock_491463943-1024x682.jpeg?x79363' alt=''/>
        <img className='play-icon' onClick={()=>{setplaystate(true)}}  src='https://cdn-icons-png.flaticon.com/128/5690/5690573.png' alt=''/>
        </div>
        <div className='about-right'>
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow's Leaders Today</h2>
       <p>The National University of Ireland and Queen's University Belfast were based on thsit
       </p>
       <p>Ireland and Queen's University Belfast were based on the UK university college system. They were both set up in 1908, before the establishment of the Republic of Ireland and have roots in the earlier Queen's University of Ireland which was also a university college system.in the case of the British and Irish universit
       </p>
       </div>
    </div>
  )
}

export default About