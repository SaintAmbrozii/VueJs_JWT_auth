import api from "./api";
import TokenService from "./TokenService";
class AuthService {
    login({email, password}) {
        return api
            .post("/auth/login", {
                email,
                password
            })
            .then((response) => {
                if (response.data.accessToken) {
                    TokenService.setUser(response.data);
                }

                return response.data;
            });
    }

    logout() {
        TokenService.removeUser();
    }
    register({ name,lastname, email, password }) {
        return api.post("/users", {
            name,
            lastname,
            email,
            password
        });
    }
}

export default new AuthService();