import { BoxIconElement } from "boxicons"
<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>

BoxIconElement
const Header =()=>{
    return(
        <header>
		<h1>Tareas por hacer</h1>
		<h3>Redes Sociales</h3>

		<div className="Redes">  
			<a className="face" href="https://www.facebook.com/?locale=es_LA" target="_blank">
            <box-icon  type='logo' name='facebook-circle' color="rgb(55, 55, 203)" animation="burst"></box-icon>
			</a>
			<a className="insta" href="https://www.instagram.com/" target="_blank">
            <box-icon type='logo' name='instagram-alt' color="#fff" animation="burst"></box-icon>
			</a>
			<a className="what"  href="https://web.whatsapp.com/" target="_blank">
            <box-icon type='logo' name='whatsapp' color="#00ff00" animation="burst"></box-icon>
			</a>
		</div>
	</header>
    )
}
export default Header