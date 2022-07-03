import { render, waitFor, fireEvent } from '@testing-library/react';
import React from 'react'

import { Filter } from './Filter'

describe('Should render filter button', () => {
  test('Render filtered information from user', async () => {
    const { getByTestId } = render(<Filter title="Status" handleFilter={() => false} />)
    const filterButton = await waitFor(() => getByTestId('filter-button'))
    const listContainer = await waitFor(() => getByTestId('filter-list-container'))
    const listItemActive = await waitFor(() => getByTestId('list-item-active'))
    const listItemPending = await waitFor(() => getByTestId('list-item-pending'))
    const listItemDeclined = await waitFor(() => getByTestId('list-item-declined'))
    const listItemClosed = await waitFor(() => getByTestId('list-item-closed'))
    fireEvent.click(filterButton)

    expect(listContainer).toBeInTheDocument()
    expect(listItemActive).toBeInTheDocument()
    expect(listItemPending).toBeInTheDocument()
    expect(listItemDeclined).toBeInTheDocument()
    expect(listItemClosed).toBeInTheDocument()
  })

  test('Component match snapshot', async () => {
    const { getByTestId } = render(<Filter title="Status" handleFilter={() => false} />)
    const button = await waitFor(() => getByTestId('filter-button'))

    expect(button).toMatchSnapshot()
  })

})