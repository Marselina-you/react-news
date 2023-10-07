import React from 'react'

export function MySelect({options, defaultValue}) {
    

    return (
       <select>
        <option disabled value=''>{defaultValue}</option>
        {options.map(option => 
        <option key={option.value} value={option.value}>
        {option.name}
    </option>
    )}
       </select>
    )
}
export default MySelect;
