import urlWebServices from '../api/webServices.js';

export const login = async function(login)
{
    //url webservices
    let url = urlWebServices.login;
    console.log("url",url);
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": login.email,
            "password": login.password
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        let response = await fetch(url, requestOptions);

        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        //console.log("jsonresponse",data);
            switch(rdo)
            {
                case 200:
                {
                    //guardo token
                    localStorage.setItem("token",data.token);
                    //guardo usuario logueado
                    localStorage.setItem("email",login.email);
                    
                    return ({rdo:0,mensaje:data.message});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
    };
}

export const register = async function(register) {
    //url webservices
    let url = urlWebServices.register;
    console.log("url",url);
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": register.name,
            "lastname": register.lastname,
            "email": register.email,
            "password": register.password
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        let response = await fetch(url, requestOptions);

        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        //console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    //guardo usuario logueado
                    return ({rdo:0,mensaje:data.message});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
    };
}

export const getUsersApi = async function()
{
    //url webservices
    let url = urlWebServices.register;
    console.log("url",url);
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        let response = await fetch(url, requestOptions);

        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        //console.log("jsonresponse",data);
            switch(rdo)
            {
                case 200:
                {
                    //console.log(data);
                    //console.log(data.length);
                    if(data.length > 0) {
                        return ({rdo:1,mensaje:data.message});//Hay usuarios
                    }
                    else{
                        return ({rdo:0,mensaje:data.message});//No hay usuarios
                    }
                }
                default:
                {
                    //otro error
                    return ({rdo:2,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
    };
}