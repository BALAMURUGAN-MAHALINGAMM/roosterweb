import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"

import img1 from "./assests/images/Eggs.jpg"
import img2 from "./assests/images/Kunafa.jpg"
import img3 from "./assests/images/Noodles.jpg"
import img4 from "./assests/images/Prawn.jpg"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='nav'>
  <h1>REESTAR</h1>
  <div className='nav1'>
  <a>Home</a>
  <a style={{paddingLeft:7}}>Receipe</a>
  <a style={{paddingLeft:7}}>Contact</a>
  <a style={{paddingLeft:7}}>Service</a>

  </div>
</div>
);


const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <div className='nav2'>
    <div className='food1' style={{height:350}}>
      <img src={img1} style={{height:240, width:230, paddingLeft:15}} ></img>
      <h3 style={{paddingTop:10,paddingLeft:10}}>EGG RICE</h3>
      <h5 style={{paddingLeft:10,paddingTop:10}}>something which is very delicious</h5>
      <button style={{backgroundColor:'red', color:'white', paddingTop:7,width:70, marginLeft:10, marginTop:10}}>Ordernow</button>
    </div>
    <div className='food2' style={{height:350}}> 
      <img src={img2} style={{height:240, width:230, paddingLeft:15}} ></img>
      <h3 style={{paddingTop:10, paddingLeft:10}}>KUNAFA</h3>
      <h5 style={{paddingLeft:10,paddingTop:10}}>sweetest dessert around the world</h5>
      <button style={{backgroundColor:'red', color:'white', paddingTop:7,width:70, marginLeft:10, marginTop:10}}>Ordernow</button>
    </div>
    <div className='food3' style={{height:350}}>
    <img src={img3} style={{height:240, width:230, paddingLeft:15}} ></img>
      <h3 style={{paddingTop:10,paddingLeft:10}}>THAI NOODLES</h3>
      <h5 style={{paddingLeft:10,paddingTop:10}}>Something sticky in my teeth</h5>
      <button style={{backgroundColor:'red', color:'white', paddingTop:7,width:70, marginLeft:10, marginTop:10}}>Ordernow</button>
    </div>
    <div className='food4' style={{height:350}}>
    <img src={img4} style={{height:240, width:230, paddingLeft:15}} ></img>
      <h3 style={{paddingTop:10,paddingLeft:10}}>PRAWN CURRY</h3>
      <h5 style={{paddingLeft:10,paddingTop:10}}>Something tremendous in my mouth</h5>
      <button style={{backgroundColor:'red', color:'white',paddingTop:7, width:70,marginLeft:10 ,marginTop:10 }}>Ordernow</button>
    </div>
  </div>
)

const root3 = ReactDOM.createRoot(document.getElementById('root3'))
root3.render(
  <div className='footer'>
    <h1>CONTACT US</h1>
    <table>
<tr style={{marginTop:10}}>
    <td> <label for="name" >NAME:</label></td>
    <td>  <input type='text' id='name' placeholder='enter your name' style={{paddingTop:5}}></input></td>
    </tr>
   <tr style={{marginTop:10}}>
   <td> <label for="age" >AGE:</label></td>
  <td>  <input type='number' id='age' placeholder='enter your age' style={{paddingTop:5}}></input></td>
    </tr>
<tr style={{marginTop:10}}>
   <td> <label for="email" >E-MAIL:</label></td>
   <td><input type='email' id='email' placeholder='enter your email' style={{paddingTop:5}}></input></td> 
    </tr>
    </table>

<button style={{backgroundColor:'yellow',width:240,marginTop:10}}>SEND</button>
  
  </div>
)

