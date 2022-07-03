import React, { useState } from 'react';
import { Row } from '../Row/Row'
import { SearchBar } from '../SearchBar/SearchBar'
import { Filter } from '../Filter/Filter'
import { Sort } from '../Sort/Sort'
import { Reset } from '../Reset/Reset'
import "./List.css"

import { getAllUsers, getByStatus, sortBy } from "../../api/usersApi"

const List = ({ data }) => {
  const [filteredList, setFilteredList] = useState(data);

  const filterList = (event) => {
    const search = event.target.value
    const filtered = data.filter(element => {
      return element.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 || element.primaryGroup.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    return setFilteredList(filtered)
  }

  const handleFilter = async (status) => {
    try {
      const { data } = (await getByStatus(status));
      setFilteredList(data)
    } catch (error) {
      throw error
    }
  }

  const handleSort = async (filter) => {
    try {
      const { data } = await sortBy(filter);
      setFilteredList(data)
    } catch (error) {
      throw error
    }
  }

  const handleResetFilters = async () => {
    const { data } = await getAllUsers();
    setFilteredList(data)
  }

  return (
    <>
      <h1 className="title">List of Users</h1>
      <div className="filters">
        <SearchBar placeholder="Email or Group" onChange={filterList}></SearchBar>
        <Filter title="Status" handleFilter={handleFilter}></Filter>
        <Sort title="Sort" handleSort={handleSort}></Sort>
        <Reset handleResetFilters={handleResetFilters}></Reset>
      </div>
      <div>
        <table className="list">
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Primary Group</th>
              <th>Phone Number</th>
              <th>Hours Studied</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="row">
            {filteredList.map(information => {
              return <Row key={information.id} information={information}></Row>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export { List }
