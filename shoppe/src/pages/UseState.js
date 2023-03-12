import React , { useState } from 'react'
import '../styles/UseState.css'

function UseState() {
    //counter
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    //input field
    const [input, setInput] = useState("Pinepplu")
    let inputChange = (event) => {
        const newVal = event.target.value;
        setInput(newVal);
    }
  return (
    <div className='useState-container'> 
        <div className='use-title'><h3>This is an example using useState</h3></div>
        <p>useState sets the initial state of a variable. there must be a fucntion 
            that uses the useState value to make changes to components in the UI.
        </p>
        <div className='counter'>
            <h5>this is an example of using useState to increment count. clicking
                the button increases the count (it calls the function increment where
                the count is increased by setting the count to +1)
            </h5>
            {count} <button onClick={increment}>Increment</button>
        </div>
        <div className='inputstate'>
            <h5>this is an example with an input field. the text changes depending
                on the keyboard input. It will display the same text in the input box 
                everytime there is a new target value with the onChange function.
            </h5>
            <input placeholder='enter some text...' onChange={inputChange}/>
            {input}
        </div>
    </div>
  )
}

export default UseState