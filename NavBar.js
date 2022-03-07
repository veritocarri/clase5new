import Widget from "./CartWidget"

function NavBar (){

return (
<header id="conten-header">
    <h1>VC Peluquerias</h1>

    <nav>
        <a href="#">HOME</a>
        <a href="#">SERVICIOS</a>
        <a href="#">TURNOS</a>
        
        <Widget/>

        
    </nav>
    
</header>
    )
}
export default NavBar
