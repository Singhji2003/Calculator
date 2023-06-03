import Calculator from './component/Calculator'
import CalculationState from './context/CalculationState';
const App = ()=>{
    return( 
        <>
        <CalculationState>
        <Calculator/>
        </CalculationState>
        </>
    )
}
export default App;