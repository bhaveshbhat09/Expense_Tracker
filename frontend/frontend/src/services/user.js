import axios from 'axios'

export async function loginUser(email, password) {
    const url = 'http://localhost:4000/user/signin'
    const body = { email, password }
    try {
        const response = await axios.post(url, body)
        return response
    } catch (error) {
        window.alert(error)
    }
}

export async function registerUser(name, email, password) {
    const url = 'http://localhost:4000/user/signup'
    const body = { name, email, password }
    try {
        const response = await axios.post(url, body)
        return response
    } catch (error) {
        console.log(error)
    }
}