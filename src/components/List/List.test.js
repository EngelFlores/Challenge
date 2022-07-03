import { render, waitFor, fireEvent } from '@testing-library/react';
import React from 'react'

import { List } from './List'

describe('Should render right information in the list', () => {
  const mock = [{
    "id": 53,
    "firstName": "Susanna",
    "lastName": "Legion",
    "email": "slegiona@prlog.org",
    "primaryGroup": "pretium",
    "hoursStudied": 2857,
    "phoneNumber": "152-210-9118",
    "status": "active"
  }, {
    "id": 352,
    "firstName": "Letta",
    "lastName": "Fryatt",
    "email": "lfryattb@furl.net",
    "primaryGroup": "imperdiet sapien",
    "hoursStudied": 1795,
    "phoneNumber": "543-217-4959",
    "status": "active"
  }]

  test('Render filtered information from user', async () => {
    const { getByTestId } = render(<List data={mock} />)
    const searchInput = await waitFor(() => getByTestId('search-input'))
    const list = await waitFor(() => getByTestId('row'))
    const value = "lfryattb@furl.net"
    fireEvent.change(searchInput, { target: { value } })

    expect(list).toHaveTextContent('Letta')
  })

  test('Component match snapshot', async () => {
    const { getByTestId } = render(<List data={mock} />)
    const list = await waitFor(() => getByTestId('row'))

    expect(list).toMatchSnapshot()
  })

})