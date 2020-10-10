import React from 'react'
import { ITester } from '../../../interfaces/Interfaces'
import { generateBugList } from '../../../services/utils.service'
import './SearchResultRow.scss'
interface ISearchResultRow {
  result: ITester
}
const SearchResultRow: React.FC<ISearchResultRow> = ({ result }: ISearchResultRow) => {
  return (
    <>
      <div className="grid-cell">{result.firstName}</div>
      <div className="grid-cell">{result.lastName}</div>
      <div className="grid-cell">{result.country}</div>
      <div className="grid-cell justify-left">{generateBugList(result.bugs)}</div>
    </>
  )
}

export default SearchResultRow
