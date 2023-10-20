function Search({ searchValue, setSearchValue }) {
  return (
    <article className="w-full" >
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className='p-4 max-w-4/6 w-80 rounded-md border-2   border-none outline-none focus:outline-violet-700 focus:border-violet-700 ' type="search" placeholder='search' />
    </article>
  )
}

export { Search }
