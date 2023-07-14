import api from "./api";
class UserService{
   getAll() {
      return api.get("/users")
   }
   getById(id) {
      return api.get("/users/${id}")
   }
}
export default new UserService();