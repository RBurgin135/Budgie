import logo from "../assets/budgie.png";

export function TopBar(){
    const imageHeight = 110
    const imageWidth = 66

    return (
        <div class="w3-container w3-center w3-padding-16 w3-dark-grey w3-animate-opacity">
            <h2 class="w3-tag w3-margin"><b>Budgie_</b></h2>
            <img src={logo} alt="Budgie Logo" height={imageHeight} width={imageWidth} />
        </div>
    )
}