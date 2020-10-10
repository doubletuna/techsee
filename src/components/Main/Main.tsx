import React, { useState } from 'react'
import Search from '../Search/Search'
import HttpService from '../../services/http.service'
import SearchResultsTable from '../SearchResultsTable/SearchResultsTable'
import Loader from '../Spinner/Loader'
import { ITester, TOrder, TSortBy } from '../../interfaces/Interfaces'
import { sortSearchResults } from '../../services/utils.service'
import './Main.scss'

const Main: React.FC = () => {
  const [resultsData, setResultsData] = useState<ITester[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showLoader, setShowLoader] = useState<boolean>(false)

  const handleSearchButtonClicked = async (input: string) => {
    setResultsData([])
    setErrorMessage('')
    const httpService = new HttpService()
    setShowLoader(true)
    const data = await httpService.corsAnywhere(input)
    setShowLoader(false)
    switch (data) {
      case 'no results':
        setErrorMessage('No results found...')
        break;
      case 'service down':
        setErrorMessage('Temporary error occurred, please try again later')
        break;
      default:
        data.length ? setResultsData(sortSearchResults(data, 'firstName', 'asc')) : setResultsData([data])
    }
  }

  const sortData = (sortBy: TSortBy, order: TOrder) => {
    if (resultsData.length > 1) {
      setResultsData(sortSearchResults(resultsData, sortBy, order))
    }
  }

  return (
    <div className="main-wrapper">
      <div className="header-title">search bugs</div>
      <Search searchCb={handleSearchButtonClicked} />
      {
        errorMessage && <div className="error-messge">{errorMessage}</div>
      }
      {
        (!errorMessage && !!resultsData.length) && <SearchResultsTable sort={sortData} searchResults={resultsData} />
      }
      {
        showLoader && <Loader />
      }
      <button
        className="mocky-search-button"
        onClick={() => handleSearchButtonClicked('mocky')}
      >fetch</button>
    </div>
  )
}

export default Main
