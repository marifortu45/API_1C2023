import urlWebServices from '../api/webServices.js';

export const contact = async function(contact) {
    //url webservices
    let url = urlWebServices.mensajes;
    console.log("url",url);
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name_lastname": contact.name_lastname,
            "email": contact.email,
            "phone": contact.phone,
            "comment": contact.comment
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
        console.log("jsonresponse",data);
            switch(rdo) {
                case 201: {
                    return ({rdo:0,mensaje:data.message});
                }
                default: {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        alert("Error al conectar con la base de datos")
        console.log("error",error);
    };
}

export const getMessagesApi = async function(token) {
    //url webservices
    let url = urlWebServices.mensajes;
    console.log("url",url);
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("jwt", token);

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
            switch(rdo) {
                case 200: {
                    return ({rdo:0,message:data});
                }
                case 401: {
                    return ({rdo:1,message:'Sin autorizacion'});
                }
                default: {
                    //otro error
                    return ({rdo:1,messages:'Error inesperado'});                
                }
            }
    }
    catch(error) {
        //alert("Error al conectar con la base de datos")
        console.log("error",error);
    };
}