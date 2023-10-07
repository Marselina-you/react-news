import React, {useMemo, useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
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
    {id: 2, title: 'Javascript', body: 'description'},
    {id: 3, title: 'Java', body: 'desc'},
    {id: 4, title: 'Js', body: 'adesc'}
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

  

 

  const sortedPosts = useMemo(() => {
    console.log("running")
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))

  }, [filter.query, sortedPosts]);
  
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
      <PostFilter
      filter={filter}
      setFilter={setFilter}
      />
      {sortedAndSearchedPosts.length !== 0 
      ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="other spisok"/>
      : <h1 style={{textAlign: 'center'}}>посты не найдены</h1>
      }
      
  
    
   </div>
     
     
  );
}

export default App;
