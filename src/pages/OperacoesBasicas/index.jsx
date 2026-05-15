import { useState } from 'react'
import './style.css'

function OperacoesBasicas() {
   const [num1, setNum1] = useState()
   const [num2, setNum2] = useState()
   const [resultado, setResultado] = useState()

function soma (e){
e.preventDefault()
console.log()
setResultado(Number(num1) + Number(num2) ) 
}


function subtracao (e){
e.preventDefault()
console.log()
setResultado(Number(num1) - Number(num2) ) 
}


function multiplicaçao (e){
e.preventDefault()
console.log()
setResultado(Number(num1) * Number(num2) )  
}


function divisao (e){
e.preventDefault()
console.log()
setResultado(Number(num1) / Number(num2) ) 
}

<h2>OperacoesBasicas</h2>
   return(
   <>

   <label>Digite um numero</label>
   <input
      type="number"
      value={num1}
      onChange={(e) => setNum1(e.target.value) }  
/>
<label>Digite outro numero</label>
<input
   type="number" 
   value={num2}
onChange={(e) => setNum2(e.target.value) }
/>

<button onClick={soma} >Soma</button>
<button onClick={subtracao} >Subtração</button>
<button onClick={multiplicaçao} >Multiplicação</button>
<button onClick={divisao} >Divisão</button>

  <p>{resultado}</p>
   </> 
   
)
}
export default OperacoesBasicas 