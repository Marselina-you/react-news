import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css"
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'description'},
    {id: 2, title: 'Javascript', body: 'description'}
  ])
const [title, setTitle ]= useState('');

const bodyInputRef = useRef();

  const addNewPost = (e) => {
e.preventDefault()
console.log(title)
console.log(bodyInputRef.current.value)
  }
  

 
  return (
    <div className="App">
      <form>
      <MyInput 
      value={title}
      onChange={e => setTitle(e.target.value)}
       type="text" 
       placeholder="Название поста"/>
     <input ref={bodyInputRef} type="text"/>
      </form>
     
      <MyButton onClick={addNewPost}>создать пост</MyButton>
     <PostList posts={posts} title="other spisok"/>
     
  
    
   </div>
     
     
  );
}

export default App;
