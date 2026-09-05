function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mi-navbar-personalizado" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🍕 Pizzeria Il Tomaco
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#perfil">
                Perfil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#registrarse">
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar