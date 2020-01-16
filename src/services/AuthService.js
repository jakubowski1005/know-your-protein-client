import axios from 'axios'

class AuthService {

    loginUser(usernameOrEmail, password) {
        console.log(`User {username: ${usernameOrEmail} ,password: ${password} has been logged.}`)
        // return axios.post(`${AUTH_URL}/signin`, {
        //     usernameOrEmail,
        //     password
        // })
    }

    registerUser(username, email, password) {
        console.log(`Register user: {${username}, ${email}, ${password}}`)
        // return axios.post(`${AUTH_URL}/signup`, {
        //     username,
        //     email,
        //     password
        // })
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem('autheticatedUser', username);
        sessionStorage.setItem('token', token);
        //this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem('autheticatedUser');
        if (user === null) return '';
        return user;
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        console.log("User logged out")
        // sessionStorage.removeItem('autheticatedUser');
        // sessionStorage.removeItem('id')
        // sessionStorage.removeItem('token')
    }

    isUserLoggedIn() {
        // let user = sessionStorage.getItem('autheticatedUser')
        // if (user === null) return false;
        return true
    }

    setupAxiosInterceptors(authHeader) {
        axios.interceptors.request.use(
            function (config) {
                console.log(config)
                //if (this.isUserLoggedIn()) {
                const jwt = 'Bearer ' + sessionStorage.getItem('token')
                config.headers.Authorization = jwt
                //config.headers.accept = "application/json"
                //}
                return config
            }
        )
    }
}

export default new AuthService()