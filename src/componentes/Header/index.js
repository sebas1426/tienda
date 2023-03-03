import React from 'react'
import Nike from "../../images/Nike.png";

 export const Header = () => {
  return (
 
    <header>       
              

          <a href='#'>
             <div className='logo' >
             <img src={Nike} alt=''/>
             
                </div>
            </a> 
           <ul>

           
           <li > <a href='#' >INICIO</a> 
           </li>
           <li> <a href='#' > EQUIPOS </a>      
           </li>
           <li > <a href='#' >ESTADISTICAS</a> 
           </li>

</ul> 
       <div  className='cart'>  <box-icon name='instagram' type='logo' ></box-icon>
       <box-icon type='logo' name='tiktok'></box-icon>
       <box-icon type='logo' name='whatsapp'></box-icon>
       <box-icon type='logo' name='facebook-circle'></box-icon>  </div>
      
       <spa className="item_total">      </spa>
    
    </header>

    
  )
}


