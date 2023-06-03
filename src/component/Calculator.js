import { useContext, useEffect } from 'react';
import './calculator.css';
import calculationContext from '../context/calculationContext'
const Calculator = ()=>{
    const {calculation, AddCalculation,FetchCalculation, dltClicker}  = useContext(calculationContext)
    useEffect(()=>{
    let string = '';
    let value = 0;
    let btns = document .querySelectorAll('.btn')
    Array.from(btns).forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            if(btn.innerHTML =='='){
               value = (eval(string))
            document.querySelector('input').value = value;
          let name =   document.querySelector('#name').value
            AddCalculation(name, string, value);
            }
        else if(btn.innerHTML == 'AC'){
        string = ''
        document.querySelector('input').value = string
        }
            else{
            string =  string + btn.innerHTML
            document.querySelector('input').value = string
            }
        })
        
    })
    FetchCalculation()
    console.log(calculation) 
    },[])
    return(
        <>
      <div className="container">
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="calculatorItems">
                <input type="text" name="calc" id="calc" placeholder='0' />
                <div className="row">
                <button className="btn grey">AC</button>
                <button className="btn grey">+/-</button>
                <button className="btn grey">%</button>
                <button className="btn orange" >/</button>
                </div>
                <div className="row">
                <button className="btn lightGrey">7</button>
                <button className="btn lightGrey">8</button>
                <button className="btn lightGrey">9</button>
                <button className="btn orange">*</button>
                </div>
                <div className="row">
                <button className="btn lightGrey">4</button>
                <button className="btn lightGrey">5</button>
                <button className="btn lightGrey">6</button>
                <button className="btn orange">-</button>
                </div>
                <div className="row">
                <button className="btn lightGrey">1</button>
                <button className="btn lightGrey">2</button>
                <button className="btn lightGrey">3</button>
                <button className="btn orange">+</button>
                </div>
                <div className="row">
                <button className="btn twocol lightGrey">0</button>
                <button className="btn lightGrey">.</button>
                <button className="btn orange">=</button>
                </div>
            </div>
            <div className="input">
            <h2>Calculation Name</h2>
            <div className="inputBox">
                <input type="text" name="name" id="name" placeholder="Enter Name"/>
                <button>Save</button>
            </div>
        </div>
        </div>
        <div className="history">
            <h1>Your Calculation</h1>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Calculation</th>
                    <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        calculation.map((e)=>{
                       return( <tr>
                        <td>{e.name}</td>
                        <td>{e.Calculation}</td>
                        <td>{e.Result}</td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" onClick={()=>{dltClicker(e._id)}}>
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></td>
                        </tr>
                            )}) 
                       }
                </tbody>
            </table>
        </div>
    </div>
        </>
    )
}
export default Calculator;