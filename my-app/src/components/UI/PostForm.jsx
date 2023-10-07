import React, {useState} from "react";

import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";


export function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
       const newPost = {
        ...post, id: Date.now()
       }
       create(newPost)
        setPost({title: '', body: ''})
          }
          

    return (
     
 <form>
        {/** Управляемый компонент */}
      <MyInput 
      value={post.title}
      onChange={e => setPost({...post, title: e.target.value})}
       type="text" 
       placeholder="Название поста"/>

        {/** Неуправляемый компонент */}
     <MyInput value={post.body} 
     type="text"
     onChange={e => setPost({...post, body: e.target.value})}
     placeholder="Описание поста"/>
     
     
      <MyButton onClick={addNewPost}>создать пост</MyButton>
    
     </form>
      
    )
}
export default PostForm;
