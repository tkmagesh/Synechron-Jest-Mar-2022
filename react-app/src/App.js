
import './App.css';
import Calculator from './calculator/calculator';
import Greeter from './greeter/greeter'
import Products from './products/products';

function App() {
  return (
    <div className="App">
      <Greeter/>
      <Calculator/>
      <Products/>
    </div>
  );
}

export default App;
