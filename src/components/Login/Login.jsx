import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../home/Home';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);
    const [Registration, setRegistration] = useState(true);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('vishalSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('vishalSubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    function handleClick() {
        setRegistration(!Registration)
    }


    return (
        <div>
            {home ? <form className='container' onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/" onClick={handleClick} >Register?</a>
                </p>

                {flag &&  
                    alert(" Fill correct Info else keep trying.") 
                         }
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login
