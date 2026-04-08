import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../services/user"
import { toast } from "react-toastify"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSigninClick = async () => {
        try {
            const { data } = await loginUser(email, password)
            if (data.status == 'success') {
                toast.success('login successful')
                navigate('/Home')
            } else
                toast.error(response.error)
        } catch (error) {
            window.alert(error)
        }
    }

    return (
        <div className="container w-50">
            <h2 className="mb-3">Login</h2>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
                <label>Don't have an account yet ?</label>
                <Link to='/register'>Click Here To Register</Link>
            </div>
            <div className="mb-3">
                <button className="btn btn-success" onClick={handleSigninClick}>Signin</button>
            </div>
        </div>
    )
}

export default Login
