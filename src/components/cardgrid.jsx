import { useState } from "react"
import { setTransaction } from "../back-end/databasing"

export function CardGrid({ cards }){
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
            <CardList list={items}/>
        </div>
    )
}

function CardList({list}){
    const updatedItems = list.map((item)=>{
        return (
            <CardItem item={item} />
        )
    })

    return(
        <div class="w3-container">
        <table class="w3-table w3-bordered w3-margin-bottom">
            {updatedItems}
        </table>
        </div>
    )
}

function CardItem({item}){
    return (
        <tr onClick={()=>setTransaction("richard", item, item, "19/12/2001")}>
            <th>{item}</th>
            <th class="fixedWidth">gross</th>
            <th class="fixedWidth">affiliation</th>
        </tr>
            
    )
}