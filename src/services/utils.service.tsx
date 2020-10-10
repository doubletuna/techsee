import { FocusEvent } from 'react'
import { IBug, ITester, TOrder, TSortBy } from '../interfaces/Interfaces'
import * as _ from 'lodash'

export const handleFocus = (event: FocusEvent<any>) => event.target.select()

export const generateBugList = (bugs: IBug[]) => {
  return bugs.map(bug => bug.title).toString().split(',').join(', ')
}

export const sortSearchResults = (searchResults: ITester[], sortBy: TSortBy, order: TOrder) => {
  return _.orderBy(searchResults, [sortBy], [order])
}