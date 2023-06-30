const urlApi = "http://localhost:8080/";
console.log("url",urlApi);

const urlWebServices = {
    login: urlApi +"api/usuarios/login",
    register: urlApi +"api/usuarios/",
    mensajes: urlApi +"api/mensajes/",
}

export default urlWebServices;