import { render, waitFor, fireEvent } from '@testing-library/react';
import React from 'react'

import { Reset } from './Reset'

describe('Should render reset button', () => {
  test('Render filtered information from user', async () => {
    const { getByTestId } = render(<Reset handleResetFilters={() => false} />)
    const resetButton = await waitFor(() => getByTestId('reset-button'))
    fireEvent.click(resetButton)

    expect(resetButton).toBeInTheDocument()
  })

  test('Component match snapshot', async () => {
    const { getByTestId } = render(<Reset handleFilter={() => false} />)
    const button = await waitFor(() => getByTestId('reset-button'))

    expect(button).toMatchSnapshot()
  })

})