import { useState } from "react"

const SearchForm = () => {
  const [title, setTitle] = useState('');

  function handleTitleChange(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }

  return (
    <form className="w-1/3 mx-auto my-10 border text-center shadow-md py-5">
      <input 
        type="text" 
        className="w-3/4 focus:outline-0  border-b-2 border-blue-500 px-2 py-1"
        placeholder="Enter a movie title e.g The Avengers"
        onChange={handleTitleChange}
        value={title}
      />
      <button
					className="text-center block w-3/4 mx-auto my-3 py-1 bg-blue-500 text-white hover:text-blue-500 transition-all hover:bg-white hover:border-2 border-2 hover:border-blue-500"
			>Search</button>
    </form>
  )
}

export default SearchForm