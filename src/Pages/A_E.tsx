import React from 'react'
import Header from '../Components/F-J Components/Header'
import Sidebar from '../Components/P-T Components/Sidebar'
import Card from '../Components/A-E Components/Card'
import CountReducer from '../Components/A-E Components/CountReducer'
import Count from '../Components/A-E Components/Count'

const A_E = () => {
  return (
    <div>
      <Header text='A - E Components'/>
      <Sidebar/>
      <div className='main'>
      <Card title="Counter">
        <Count/>
      </Card>
      <Card title="Counter med useReducer" >
        <CountReducer/>
      </Card>
      </div>
    </div>
  )
}

export default A_E
