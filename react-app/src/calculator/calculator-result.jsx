
import './calculator-result.css'

const CalculatorResult = ({data}) => {
    return (
        <div 
            data-testid="divResult"
            className={'result ' + (data > 0 ? 'positive' : 'negative')}
        >
            {data}
        </div>
    );
}

export default CalculatorResult;