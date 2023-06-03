import  { useState } from 'react'
import CalculationContext from './calculationContext'
const CalculationState = (props)=>{
    const URL = 'https://calculator-yszy.onrender.com/calculation'
    const calc = []
    const [calculation, setCalculation] = useState(calc);
    // FOR Adding the calculation
    const AddCalculation =async(name, Calculation, Result)=>{
        const newcalc = {
            name:name,
            Calculation: Calculation,
            Result:  Result
        }
        setCalculation(calculation.concat(newcalc))
        const response = await fetch(`${URL}/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({name, Calculation, Result})
          });
          let json = await response.json(); 
    }

    // For fetching the calculation
    const FetchCalculation = async()=>{
        const response = await fetch(`${URL}/fetch`, {
            method: "GET",
            headers:{
            "Content-Types": "application/json",
            },
        })
        let json = await response.json();
        setCalculation(json)
    }

    // For delting the calculation
    const dltClicker = async(id)=>{
        const  newCalc = calculation.filter((e)=>{return e._id!==id})
        setCalculation(newCalc);
        const response = await fetch(`${URL}/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        console.log(json)
      }
      
    return(
        <>
        <CalculationContext.Provider value = {{calculation, AddCalculation, FetchCalculation, dltClicker}}>
        {props.children}
        </CalculationContext.Provider>
        </>
    )
}
export default CalculationState;