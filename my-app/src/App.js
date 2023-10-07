import React, {useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css"

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'description'},
    {id: 2, title: 'Javascript', body: 'description'}
  ])
const createPost = (newPost) => {
setPosts([...posts, newPost])
}

/**получаем пост из дочернего компонента */
const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

 

 
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
        defaultValue="сортировка" 
        options={[
          {value: 'title', name: "по заголовку"},
          {value: 'body', name: "по описанию"}
        ]}
        />
        
      </div>
      {posts.length !== 0 
      ? <PostList remove={removePost} posts={posts} title="other spisok"/>
      : <h1 style={{textAlign: 'center'}}>посты не найдены</h1>
      }
      
  
    
   </div>
     
     
  );
}

export default App;
