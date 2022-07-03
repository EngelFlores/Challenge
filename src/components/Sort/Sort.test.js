import { render, waitFor } from '@testing-library/react';
import React from 'react'

import { Sort } from './Sort'

describe('Should render search bar', () => {
  test('Render filtered information from user', async () => {
    const { getByTestId } = render(<Sort handleSort={() => false} />)
    const sort = await waitFor(() => getByTestId('sort-list-item'))

    expect(sort).toBeInTheDocument()
  })

})