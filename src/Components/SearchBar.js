import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"  id='search'/>
      <button type="submit" id='searchbtn' className='btn'>Search</button>
    </form>
    </div>
  )
}

export default SearchBar
