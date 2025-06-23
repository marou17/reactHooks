import React from 'react'

 const Filter = ({onTitleChange,onRatingChange}) => {
  return (
    <div className='filter-bar'>
        <input 
        type="text" 
        placeholder='Rechercher par titre '
        onChange={(e) => onTitleChange(e.target.value)}
         />
        <input
         type="number" min="0" max="10"
         placeholder='Entrer une note entre 0 et 10 '
         onChange={(e) => onRatingChange(Number(e.target.value))} 
          />
    </div>
  )
}
export default Filter;