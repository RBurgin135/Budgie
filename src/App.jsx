//hooks
import {useState} from 'react';
import {TopBar} from './components/topbar';
import {CardGrid} from './components/cardgrid';
import {Footer} from './components/footer';


export default function Host(){
    const [x, setX] = useState(0)

    return (
        <body class="w3-light-grey">
            <TopBar />
            
            <div class="w3-content ">
    
                <CardGrid />
                
            </div>
            <Footer />
        </body>
    )
}