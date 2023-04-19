// Code EyesOnMe Component Here
import React from 'react'

handleFocus = () => {

    console.log('Good!');



},

handleBlur = () =>{

console.log('Hey! Eyes on me!');

}

function EyesOnMe() {
  return (
    <div>
  <label>All eyes on me</label>
  <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes on Me</button>
    </div>
  )
}

export default EyesOnMe;


///In this implementation, the EyesOnMe component is a
// class-based component that defines two methods: handleFocus and handleBlur. These methods are called when the button element rendered by the component receives or loses focus, respectively. The onFocus and onBlur events are used to listen for these events and call the appropriate method. When the button is focused, handleFocus logs "Good!" to the console, and when it loses focus, handleBlur logs
// "Hey! Eyes on me!" to the console.