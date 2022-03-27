import React from 'react';
import CalculatorResult from './calculator-result'


const Calculator = () => {
    const [n1, setN1] = React.useState(0)
    const [n2, setN2] = React.useState(0)
    const [result, setResult] = React.useState(0);

    const onAddClick = () => {
        setResult(n1 + n2)
    }

    const onSubtractClick = () => {
        setResult(n1 - n2)
    }

    const onMultiplyClick = () => {
        setResult(n1 * n2)
    }

    const onDivideClick = () => {
        setResult(n1 / n2)
    }
    return(
        <>
            <h3>Calculator</h3>
            <label htmlFor="txtNo1">Number 1:</label>
            <input type="number" name="" id="txtNo1" onChange={ evt => setN1(parseInt(evt.target.value))} />
            <br />
            <label htmlFor="txtNo2">Number 2:</label>
            <input type="number" name="" id="txtNo2" onChange={ evt => setN2(parseInt(evt.target.value))}/><br />
            <button onClick={onAddClick}>Add</button>
            <button onClick={onSubtractClick}>Subtract</button>
            <button onClick={onMultiplyClick}>Multiply</button>
            <button onClick={onDivideClick}>Divide</button>
            <CalculatorResult data={result}></CalculatorResult>
        </>
    )
}

export default Calculator;