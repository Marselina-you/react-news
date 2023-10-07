import React from 'react'
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    

    return (
        <div>

<div>
  
        <MyInput 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="поиск"
        />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="сортировка" 
        options={[
          {value: 'title', name: "по заголовку"},
          {value: 'body', name: "по описанию"}
        ]}
        />
        
      </div>
        </div>
    )
}
export default PostFilter;