import React, { useEffect, useState } from 'react'
import { ITester, TOrder, TSortBy } from '../../interfaces/Interfaces'
import SearchResultRow from './SearchResultRow/SearchResultRow';
import './SearchResultsTable.scss'
interface ISearchResultsTable {
  searchResults: ITester[]
  sort: (sortBy: TSortBy, order: TOrder) => void
}

const SearchResultsTable: React.FC<ISearchResultsTable> = ({ searchResults, sort }: ISearchResultsTable) => {
  const [clickable, setClickable] = useState<string>('')
  const [order, setOrder] = useState<TOrder>('asc')
  const [sortByState, setSortByState] = useState<string>('firstName')

  useEffect(() => {
    searchResults.length > 1 ? setClickable(' clickable') : setClickable('')
  }, [searchResults.length])

  const sortClicked = (sortBy: TSortBy) => {
    if (sortBy === sortByState) {
      const orderBy = order === 'asc' ? 'desc' : 'asc'
      sort(sortBy, orderBy)
      setOrder(orderBy)
    } else {
      setSortByState(sortBy)
      setOrder('asc')
      sort(sortBy, 'asc')
    }
  }

  return (
    <div className="search-results-table-wrapper">
      {
        <>
          <div className={`grid-cell${clickable}`} onClick={() => sortClicked('firstName')}>First Name</div>
          <div className={`grid-cell${clickable}`} onClick={() => sortClicked('lastName')}>Last Name</div>
          <div className={`grid-cell${clickable}`} onClick={() => sortClicked('country')}>Country</div>
          <div className="grid-cell">Device</div>
          <div className="grid-cell justify-left">Bugs</div>
        </>
      }
      {
        searchResults.map(result => <SearchResultRow result={result} key={`${result.firstName}_${result.lastName}`} />)
      }
    </div>
  )
}

export default SearchResultsTable
