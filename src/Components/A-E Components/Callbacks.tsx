import React from 'react'

const Callbacks = () => {

    const calculate = (numett:number, numtvå: number, sum: (result: number) => void) => {
      const result = numett + numtvå

      sum(result)
    }

    const Result = (result:number) => {
        alert(`callbacken tar ett num + ett num sen callback som visar resultatet ${result}`)
    }


  return (
    <div>
        <button onClick={() => calculate(5, 6, Result)}>Callback button</button>
      
    </div>
  )
}

export default Callbacks
