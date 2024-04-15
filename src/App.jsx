import {useState} from 'react';
import {TopBar} from './components/topbar';
import { CardGrid } from './components/cardgrid';
import { Footer } from './components/footer';

export default function Host(){
    const [x, setX] = useState(0)

    return (
        <body class="w3-light-grey">
            <div class="w3-content">
                <TopBar />
                <CardGrid />
                
                <Footer />
            </div>
        </body>
    )
}