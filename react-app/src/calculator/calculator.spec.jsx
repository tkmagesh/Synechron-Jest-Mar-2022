import * as React from 'react';
import Calculator from './calculator'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { textSpanContainsPosition } from 'typescript';

//jest.mock('./calculator-result', () => () => (<div>Result</div>))

//jest.mock('./calculator-result', () => )



/* 
jest.mock('./calculator-result', (props) => {
    const mockChildComponent = jest.fn()
    mockChildComponent(props)
    return <mock-childComponent></mock-childComponent>
}) 
*/


test('Calculator should add 2 numbers', () => {
    render(<Calculator/>)

    userEvent.type(screen.getByLabelText('Number 1:'), '100')
    userEvent.type(screen.getByLabelText('Number 2:'), '200')
    userEvent.click(screen.getByText('Add'))
    expect(screen.getByTestId('divResult')).toHaveTextContent('300')
    screen.debug()
})
