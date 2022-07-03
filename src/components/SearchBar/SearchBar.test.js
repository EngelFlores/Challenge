import { render, waitFor } from '@testing-library/react';
import React from 'react'

import { SearchBar } from './SearchBar'

describe('Should render search bar', () => {
  test('Render filtered information from user', async () => {
    const { getByTestId } = render(<SearchBar placeholder="Test" onChange={() => false} />)
    const search = await waitFor(() => getByTestId('search-input'))

    expect(search).toBeInTheDocument()
  })

})