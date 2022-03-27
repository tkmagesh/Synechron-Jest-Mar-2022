import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import Products from './products'
import userEvent from '@testing-library/user-event'

//for intercepting the server call
import {rest} from 'msw'
import {setupServer} from 'msw/node'

const server = setupServer(
    rest.get('http://localhost:3030/products', (req, res, ctx) => {
        return res(ctx.json([
            { id : 1, name : 'Product - 1'},
            { id : 2, name : 'Product - 2'},
            { id : 3, name : 'Product - 3'}
        ]))
    })
)

beforeAll(() => {
    server.listen()
});

afterAll(() => {
    server.close()
});

beforeEach(() => {
    server.resetHandlers()
});


test('should display the products from the server', async () => {
    render(<Products/>)
    const btnGetProducts = screen.getByText('Get Products')
    userEvent.click(btnGetProducts)
    await screen.findByText('Product - 1')
    const productsList = await screen.findByTestId('productsList');
    expect(productsList.children.length).toBe(3)
    expect(screen.getByText('Product - 1')).toBeDefined()
    expect(screen.getByText('Product - 2')).toBeDefined()
    expect(screen.getByText('Product - 3')).toBeDefined()
})
