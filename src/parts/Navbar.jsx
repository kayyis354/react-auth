import { Link } from "react-router-dom"
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
    const userLogin = localStorage.getItem('userLogin');
    const renderAuthButton = () => {
        if(userLogin){
            return <Link onClick={authLogout} className="nav-link btn btn-outline-info px-4 me-3" to="/Login">logout</Link>
        }else{
            return(
                <>
                 <Link className="nav-link btn btn-outline-info px-4 me-3" to="/login">Login</Link>
                 <Link className="nav-link btn btn-info px-4 text-white" to="/register">Register</Link>
                 </>
            )  
        }
    }
    const authLogout = () => {
        localStorage.removeItem('userLogin');
        this.props.navigate('/')
        swal('huh', 'Berhasil Logout', 'error')
    }
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div class="container">
                <Link class="navbar-brand fw-bold" to="/">Starter React Bootstrap</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <Link className="nav-link" to="/product">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <span style={{
                            padding: '6px 10px',
                            background: 'red',
                            color: 'white',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            borderRadius: '50%'
                        }}>2</span>
                    </Link>

                    <Link class="nav-link" to="/product">Product</Link>
                    {
                        renderAuthButton()
                    }
                </div>
                </div>
            </div>
        </nav>
    )
}

function LogoutNavigate(){
    let navigate = useNavigate();
    return <Navbar navigate={navigate} />
}

export default LogoutNavigate