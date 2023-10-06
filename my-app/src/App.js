import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
function App() {

  
  const [value, setValue] = useState('text');

 
  return (
    <div className="App">
   <div className="post">
    <div className="post__content">
      <strong>1. Javascript</strong>
      <div>
        Javascript - language 
      </div>
    </div>
    <div>
      <div className="post__btns">
        <button>delete</button>
      </div>

    </div>
   </div>
      </div>
     
  );
}

export default App;
