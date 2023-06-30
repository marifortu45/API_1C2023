import React, { useState, useEffect } from 'react';
import { Navigate} from "react-router-dom";
import {
  MDBContainer,
  MDBBadge,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import {login} from "../src/api/usuarios.api";
import {register} from "../src/api/usuarios.api";
import {getUsersApi} from "../src/api/usuarios.api";

function Login() {
  useEffect(() => {
    document.title = 'Login TPO API';
  }, []);

  const [justifyActive, setJustifyActive] = useState('tab1');;
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [usuarioValido,setUsuarioValido] = React.useState(false);
  const [registarValido,setRegistrarValido] = React.useState(true);
  const [name,setName] = React.useState('');
  const [lastname,setLastname] = React.useState('');
  const [email_reg,setEmailReg] = React.useState('');
  const [password_reg,setPasswordReg] = React.useState('');
  const navigate = useNavigate();

  const handleEmail = (event)=> {
    setEmail(event.target.value);
  }
  const handlePassword = (event)=> {    
    setPassword(event.target.value);
  }
  const handleName = (event)=> {
    setName(event.target.value);
  }
  const handleLastname = (event)=> {
    setLastname(event.target.value);
  }
  const handleEmailReg = (event)=> {
    setEmailReg(event.target.value);
  }
  const handlePasswordReg = (event)=> {
    setPasswordReg(event.target.value);
  }

  //Ejecuto el endopoint para validar login
  const validarLogin = async function() {
    try {
      let datos = {
        email: email,
        password: password
      }
      let getLogin = await login(datos);
      if (getLogin.rdo === 0) {
        setUsuarioValido(true);
      }
      else if (getLogin.rdo === 1) {
        alert("Usuario y/o contraseña incorrectos");
      }
      else {
        console.log("Sesion invalida")
        navigate('/Home', { replace: true })
      }
    } catch(error) {
        console.log("Error al conectar con la base de datos", error);
        alert("Error al conectar con el servidor");
        navigate('/Home', { replace: true })
      }
  }

  const loginUser=()=> {
    if (email!=="" && password!=="") {
      validarLogin();
    }
    else {
      alert("Debe completar usuario y contraseña");
    }
  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const redirect= ()=>{
    if (usuarioValido) {
      return <Navigate to='/Notifications' />
    }
  } 

  const registrarUsuario = async function() {
    let datos = {
      name: name,
      lastname: lastname,
      email: email_reg,
      password: password_reg
    }
    try {
      let getRegister = await register(datos); 
      if (getRegister.rdo === 0) {
        alert("Usuario registrado con exito");
      }
      else if (getRegister.rdo === 1) {
        alert("Error al crear usuario");
        return <Navigate to='/' />
      }
    }
    catch(error) {
      console.log("Error al conectar con la base de datos ", error);
      alert("Error al conectar con el servidor");
      navigate('/Home', { replace: true })
    }
  }

  const registerUser=()=> {
    if (name!=="" && lastname!=="" && email_reg!=="" && password_reg!=="") {
      registrarUsuario();
      handleJustifyClick('tab1')
    }
    else {
      alert("Debe completar todos los campos");
    }
  }

  const validarRegistro= async function() {
    let getUsers = await getUsersApi();
      if (getUsers.rdo === 0) {
        setRegistrarValido(true); //No hay usuarios, puedo registar uno nuevo
      }
      else if (getUsers.rdo === 1) {
        setRegistrarValido(false); //Hay usuarios, no debo registrar mas
      }
      else if (getUsers.rdo === 2) {
        setRegistrarValido(false); //Error inesperado
      }
  } 

  const checkRegisterIsValid= ()=>{
    validarRegistro();
  } 

  return (
    <div>
      {redirect()}
      {checkRegisterIsValid()}
      <div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <div className="text-center">
            <h1> <MDBBadge pill color='info' light>¡Bienvenido!</MDBBadge> </h1>
          </div>
          <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                <h5>Ingreso</h5>
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem hidden={!registarValido}>
              <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
              <h5>Registro</h5>
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>

            <MDBTabsPane show={justifyActive === 'tab1'}>
              <MDBInput wrapperClass='mb-4' label='Correo electronico' id='form5' type='email' onChange={Event => handleEmail(Event)}/>
              <MDBInput wrapperClass='mb-4' label='Contraseña' id='form6' type='password' onChange={Event => handlePassword(Event)}/>              
              {/* <div className="d-flex justify-content-between mx-4 mb-4"> <a href="#!">¿Olvidaste tu contraseña?</a> </div> */}
              <MDBBtn className="mb-4 w-100" onClick={loginUser}>Ingresar</MDBBtn>
              <p className="text-center" hidden={!registarValido}>
                ¿Todavia no sos miembro? 
                <a href={"#!"} onClick={() => handleJustifyClick('tab2')} hidden={!registarValido}>
                  Registrate
                </a>
              </p>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === 'tab2'} >
              <MDBInput wrapperClass='mb-4' label='Nombre/s' id='form1' type='text' onChange={Event => handleName(Event)}/>
              <MDBInput wrapperClass='mb-4' label='Apellido/s' id='form2' type='text' onChange={Event => handleLastname(Event)}/>
              <MDBInput wrapperClass='mb-4' label='Correo electronico' id='form3' type='email' onChange={Event => handleEmailReg(Event)}/>
              <MDBInput wrapperClass='mb-4' label='Contraseña' id='form4' type='password' onChange={Event => handlePasswordReg(Event)}/>

              <MDBBtn className="mb-4 w-100" onClick={registerUser}>Registrarse</MDBBtn>
              <p className="text-center">¿Ya sos miembro? <a href={"#!"} onClick={() => handleJustifyClick('tab1')} >Ingresar</a></p>
            </MDBTabsPane>
          </MDBTabsContent>

        </MDBContainer>
      </div>
    </div>
  );
  
}

export default Login;