import { Link } from 'react-router-dom';

const Navigation = ({ children }) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavAltMarkup"
                        >
                            <div className="navbar-nav">
                                <Link to="/" className="nav-link">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo-Xonly.svg"></img>
                                </Link>
                                <Link to="/" className="nav-link">
                                    Accueil
                                </Link>
                                <Link to="/history" className="nav-link">
                                    Histoire
                                </Link>
                                <Link to="/company" className="nav-link">
                                    Entreprise
                                </Link>
                                <Link to="/rockets" className="nav-link">
                                    Fusées
                                </Link>
                                <Link to="/latest_launch" className="nav-link">
                                    Last launch
                                </Link>
                                <Link to="/roadster" className="nav-link">
                                    Roadster
                                </Link>
                                <Link to="/quiz" className="nav-link">
                                    Quiz
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {children}
        </>
    );
};

export default Navigation;
