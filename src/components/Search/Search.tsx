import React, { useState } from 'react'
import { handleFocus } from '../../services/utils.service'
import './Search.scss'

interface ISearchProps {
  searchCb: (data: string) => void
}

const Search: React.FC<ISearchProps> = ({ searchCb }: ISearchProps) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [disableSearch, setDisableSearch] = useState<boolean>(true)
  const [badInput, setBadInput] = useState<string>('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchInput(e.target.value.trim())
    if (e.target.value.length > 1 && e.target.value.length < 13) {
      setDisableSearch(false)
      setBadInput('')
    } else {
      setDisableSearch(true)
      setBadInput(' disabled')
    }
  }

  return (
    <div className="search-wrapper">
      <input
        type="text"
        autoComplete="off"
        name="searchInput"
        onChange={handleSearchChange}
        placeholder="Enter the tester name"
        onClick={handleFocus}
        onFocus={handleFocus}
        value={searchInput}
        className={`input-search${badInput}`}
      />
      <button
        className="search-button"
        disabled={disableSearch}
        onClick={() => searchCb(searchInput)}
      >fetch</button>
    </div>
  )
}

export default Search
