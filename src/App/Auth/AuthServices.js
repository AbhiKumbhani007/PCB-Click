import api from "./Interceptor";
import serviceConfig from "./ServiceConfig";

class AuthServices {
  signInWithEmailAndPassword = async (email, password) => {
    await api
      .post(serviceConfig.signIn, {
        email_address: email,
        password: password,
      })
      .then((response) => {
        const data = response.data;
        return data;
      })
      .then((data) => {
        localStorage.setItem("token", data["data"].token);
      });
  };
}
const authServices = new AuthServices();
export default authServices;
