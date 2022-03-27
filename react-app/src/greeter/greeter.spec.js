import React from 'react'
import {render, screen} from '@testing-library/react'
import Greeter from './greeter'
import userEvent from '@testing-library/user-event'

describe('Greeter', () => {
    it('Should display the greet message', () => {
        //Arrange
        const userName = 'Magesh',
            expectedResult = 'Hi Magesh!'

        //Act
        render(<Greeter/>)
        const txtUserName = screen.getByLabelText('User Name :')
        userEvent.type(txtUserName, userName)
        const btnGreeter = screen.getByText('Greet')
        userEvent.click(btnGreeter)
        //screen.debug()
        //Assert
            
        expect(txtUserName).toBeDefined()
        expect(btnGreeter).toBeDefined()
        const divResult = screen.getByTestId('divGreetMessage')
        expect(divResult).toHaveTextContent(expectedResult)
        //const divResult = screen.getByText(expectedResult)
        //expect(divResult).toBeDefined()
        //userEvent.type()
    })
})