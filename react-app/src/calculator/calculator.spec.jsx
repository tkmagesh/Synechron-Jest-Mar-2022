import * as React from 'react';
import Calculator from './calculator'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockFn = jest.fn()
jest.mock("./calculator-result", () => { 
    return {
        __esModule : true,
        default : (props) => {
            mockFn(props)
            mockFn.mockReturnValue((<div data-testid="divResult">{props.data}</div>))
            return mockFn()
        }
    }
});

test('Calculator should add 2 numbers', () => {
    render(<Calculator/>)

    userEvent.type(screen.getByLabelText('Number 1:'), '100')
    userEvent.type(screen.getByLabelText('Number 2:'), '200')
    userEvent.click(screen.getByText('Add'))
    expect(screen.getByTestId('divResult')).toHaveTextContent('300')
    expect(mockFn).toHaveBeenCalledWith({ data : 300 })
})
