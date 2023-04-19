// Code Keypad Component Here
import React from "react";


//this is a class based compenet that defines a handle function onchange
class Keypad extends React.Component{


    handlechange = (event) =>{

    console.log("Entering password...");


    }

   render(){
    return (
        <div>

           <label >Enter Password</label>
           <input type="password" id= "password" onChange={this.handlechange}/>

        </div>
    );
}
}

export default Keypad;