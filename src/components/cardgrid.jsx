
export function CardGrid(){
    return (
        <div class="w3-row">
            <div class="w3-col l8 s12">
                <Card title="Accounts" />
                <Card title="Jars" />
            </div>
        </div>
    )
}

function Card({title}){
    return (
        <div class="w3-card-2 w3-margin w3-white w3-container">
            <h3><b>{title}</b></h3>
            
        </div>
    )
}