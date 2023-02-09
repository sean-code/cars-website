import './Error.css';
import { Link, useNavigate } from 'react-router-dom';

function Error(){
    const navigate = useNavigate();
    return(
        <>
            <div className='error-container'>
                <div className="message-box">
                    <h1>..404</h1>
                        <p>Oops! Page Not Found</p>
                    <div className="buttons-con">
                        <div className="action-link-wrap">
                            <a>
                                <button onClick={() => navigate(-1)} className="link-button">Go Back</button>
                            </a>
                            <Link to ="/home" className="link-button">
                                <button>
                                    Go HomePage
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Error;