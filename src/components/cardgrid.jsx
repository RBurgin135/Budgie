import { useState } from "react"

export function CardGrid(){
    const [transactions, setTransactions] = useState([1,4,3])
    const [jars, setJars] = useState([0,2,1])

    return (
        <div class="w3-row">
                <Card title="Accounts" items={transactions} />
                <Card title="Jars" items={jars}/>
        </div>
    )
}

function Card({title, items}){
    return (
        <div class="w3-card-2 w3-margin w3-white w3-container w3-animate-left">
            <h3><b>{title}</b></h3>
            <CardItems list={items}/>
        </div>
    )
}

function CardItems({list}){
    const updatedNums = list.map((number)=>{
        return (
            <div class="w3-margin w3-white w3-container">
                {number} testing the animateion
            </div>
        )
    });

    return(
        <div>{updatedNums}</div>
    )
}