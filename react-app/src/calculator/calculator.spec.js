import Calculator from './calculator'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Calculator', () => {
    it('Should add 2 number', () => {
        render(<Calculator/>)

        userEvent.type(screen.getByLabelText('Number 1:'), '100')
        userEvent.type(screen.getByLabelText('Number 2:'), '200')
        userEvent.click(screen.getByText('Add'))
        //screen.debug()  
        expect(screen.getByTestId('divResult')).toHaveTextContent('300')
    })
})