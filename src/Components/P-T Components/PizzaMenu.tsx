import React, { useState } from 'react'
import  data from "../../assets/pizza.json"
import { PizzaProps } from '../K-O Components/Types k-o/pizza'
import List from '../K-O Components/List'
import PizzaDetails from './PizzaDetails'

const PizzaMenu = () => {
    const [pizza, setPizza] = useState<PizzaProps[]>(data.pizza)
    const [selectPizza, setSelectPizza] = useState<PizzaProps | null>(null)

    const handleselectedPizza = (selected: PizzaProps) => {
        setSelectPizza(selected)
    }
  
    return (
    <div>
    <List data={pizza} onclick={(selected) => handleselectedPizza(selected)}/>
    {selectPizza && <PizzaDetails/>}
    </div>
  )
}

export default PizzaMenu
