import { render, waitFor } from '@testing-library/react';
import React from 'react'

import { Row } from './Row'

describe('Row should render the information', () => {
    const mock = {
        "id": 118,
        "firstName": "Karoline",
        "lastName": "Beverstock",
        "email": "kbeverstockd@soup.io",
        "primaryGroup": "tortor",
        "hoursStudied": 3251,
        "phoneNumber": "432-731-5161",
        "status": "active"
    }

    test('Render information from user', async () => {
        const { getByTestId } = render(<Row information={mock} />)
        const email = await waitFor(() => getByTestId('email'))
        const firstName = await waitFor(() => getByTestId('first-name'))
        const lastName = await waitFor(() => getByTestId('last-name'))
        const primaryGroup = await waitFor(() => getByTestId('primary-group'))
        const phoneNumber = await waitFor(() => getByTestId('phone-number'))
        const hoursStudied = await waitFor(() => getByTestId('hours-studied'))
        const status = await waitFor(() => getByTestId('status'))

        expect(email).toHaveTextContent('kbeverstockd@soup.io')
        expect(firstName).toHaveTextContent('Karoline')
        expect(lastName).toHaveTextContent('Beverstock')
        expect(primaryGroup).toHaveTextContent('tortor')
        expect(hoursStudied).toHaveTextContent('3251')
        expect(phoneNumber).toHaveTextContent('432-731-5161')
        expect(status).toHaveTextContent('active')

    })
})