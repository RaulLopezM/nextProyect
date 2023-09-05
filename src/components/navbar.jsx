import Link from 'next/link'
import '../app/navbas.css'

export default function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<a className="navbar-brand" href="#">DigitalRam</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" href="/" replace>Inicio</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/about">Contactos</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" href="/servicios">Servicios</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}