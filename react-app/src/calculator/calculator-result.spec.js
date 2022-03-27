/* Write the test to ensure that the CalculatorResult components displays whatever is given to it */

import React from 'react';
import CalculatorResult from './calculator-result'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('Calculator Result', () => {
    it('Should display the given data', () => {
        render(<CalculatorResult data={100}/>)

        const divResult = screen.getByTestId('divResult')
        expect(divResult).toHaveTextContent(100)
        expect(divResult).toHaveClass('result')
    })

    it('Should display the given positive data in green color', () => {
        render(<CalculatorResult data={100}/>)

        //const divResult = screen.getByTestId('divResult')
        expect(screen.getByTestId('divResult')).toHaveClass('positive')
        
    })

    it('Should display the given negative data in red color', () => {
        render(<CalculatorResult data={-100}/>)

        const divResult = screen.getByTestId('divResult')
        expect(divResult).toHaveClass('negative')
        
        
    })
})

