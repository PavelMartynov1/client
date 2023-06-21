import './css/MainContent.css'
import {useNavigate } from 'react-router-dom' 

function MainContent(){
    
let history = useNavigate ();

    return(
        <body>
            <div class='flex0-container' >
                <div class='description' >
                <p>LOW PRICING</p>
                <p style={{ fontSize: 20 }} >We believe in bringing custom gaming computers to the masses, that's why we only charge a small build fee and don't cut corners on quality.</p>
                </div>
                <div class='description' >
                <p>Max Frame Rates</p>
                <p style={{ fontSize: 20 }} >Select your top games and see how they perform using our online PC builder. Our team will build and optimize your gaming PC to deliver the highest frame rates.</p>
                </div>
                <div class='description' >
                <p>2 Year Warranty</p>
                <p style={{ fontSize: 20 }} >You're protected with us. Our team of in-house gamers will get you back up and running if you run into any issues. All gaming desktops include parts and labor coverage.</p>
                </div>
            </div>
            <button class='startBuild' onClick={()=>(history('/build'))}>START BUILD</button>
            <div class='flex-container'>
                <div class='buildDescription'>
                    <p style={{ fontSize: 35 }}>Build ONe</p>
                    <p>RTX 3060</p>
                    <p style={{ fontSize: 20 }}>Level up your gaming experience without breaking the bank!</p>
                    <p style={{ fontSize: 20 }}>Processor: i5 12400f</p>
                    <p style={{ fontSize: 20 }}>Memmory: 16Gb 2x8</p>
                    <p style={{ fontSize: 20 }}>Storage: 500Gb Ssd</p>
                    <p style={{ fontSize: 25 }}>Starting at </p>
                    <p style={{ fontSize: 25 }}>$1,696 </p>
                    
                    <button style={{ fontSize: 25 }}>Order Build</button>
                    </div>
                <div class='buildDescription'><p style={{ fontSize: 35 }}>Build ONe</p>
                    <p>RTX 3060</p>
                    <p style={{ fontSize: 20 }}>Level up your gaming experience without breaking the bank!</p>
                    <p style={{ fontSize: 20 }}>Processor: i5 12400f</p>
                    <p style={{ fontSize: 20 }}>Memmory: 16Gb 2x8</p>
                    <p style={{ fontSize: 20 }}>Storage: 500Gb Ssd</p>
                    <p style={{ fontSize: 25 }}>Starting at </p>
                    <p style={{ fontSize: 25 }}>$1,696 </p>
                    
                    <button style={{ fontSize: 25 }}>Order Build</button></div>
                <div class='buildDescription'><p style={{ fontSize: 35 }}>Build ONe</p>
                    <p>RTX 3060</p>
                    <p style={{ fontSize: 20 }}>Level up your gaming experience without breaking the bank!</p>
                    <p style={{ fontSize: 20 }}>Processor: i5 12400f</p>
                    <p style={{ fontSize: 20 }}>Memmory: 16Gb 2x8</p>
                    <p style={{ fontSize: 20 }}>Storage: 500Gb Ssd</p>
                    <p style={{ fontSize: 25 }}>Starting at </p>
                    <p style={{ fontSize: 25 }}>$1,696 </p>
                    
                    <button style={{ fontSize: 25 }}>Order Build</button></div>
                <div class='buildDescription'><p style={{ fontSize: 35 }}>Build ONe</p>
                    <p>RTX 3060</p>
                    <p style={{ fontSize: 20 }}>Level up your gaming experience without breaking the bank!</p>
                    <p style={{ fontSize: 20 }}>Processor: i5 12400f</p>
                    <p style={{ fontSize: 20 }}>Memmory: 16Gb 2x8</p>
                    <p style={{ fontSize: 20 }}>Storage: 500Gb Ssd</p>
                    <p style={{ fontSize: 25 }}>Starting at </p>
                    <p style={{ fontSize: 25 }}>$1,696 </p>
                    
                    <button style={{ fontSize: 25 }}>Order Build</button></div>
            </div>
        </body>
    );
}
export default MainContent;