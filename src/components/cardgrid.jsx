import { useState } from "react"
import { setTransaction, addItem } from "../back-end/databasing"

export function CardGrid({ data }){
    console.log("cardgrid:"+data)
    return (
        <div class="w3-row">
                <Card 
                    title="Accounts" 
                    items={(data) ? data.accounts : []} 
                    button={
                        <button class="w3-button" onClick={()=>addItem('richard', '/accounts/', 'test')}>
                            Add Account
                        </button>
                    }
                />
                <Card 
                    title="Jars" 
                    items={(data) ? data.jars : []}
                    button={
                        <button class="w3-button" onClick={()=>addItem('richard', '/jars/', 'test')}>
                            Add Jar
                        </button>
                    }
                />
        </div>
    )
}

function Card({title, items, button=null}){
    return (
        <div class="w3-card-2 w3-margin w3-white w3-container w3-animate-left">
            <h3><b>{title}</b></h3>
            <CardList list={items} button={button}/>
        </div>
    )
}

function CardList({list, button=null}){
    const updatedItems = list.map((item)=>{
        return (
            <CardItem item={item}/>
        )
    })

    return(
        <div class="w3-container">
        <table class="w3-table w3-bordered w3-margin-bottom">
            {updatedItems}
            {button}
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