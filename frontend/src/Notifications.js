import React, { useState } from 'react';
import background from "./img/computer.jpg";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBNavbarBrand,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import {getMessagesApi} from "../src/api/mensajes.api";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function App() {
  //const [showBasic, setShowBasic] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  
  const clearStorage= ()=>{
    localStorage.clear();
  } 

  const obtenerMensajes= async function(token) {
    if(rows.length === 0) {
      let getMessages = await getMessagesApi(token);
      if (getMessages.rdo === 0) {
        //console.log('Mensajes recibidos');
        setRows(getMessages.message);
      }
      else {
        console.log("Sesion invalida")
        navigate('/Home', { replace: true })
      }
    } 
  } 

  const getMessages= ()=>{
    var token = localStorage.getItem('token');
    if(!token) {
      //Redirecciono si alguien quiere acceder sin iniciar sesion
      navigate('/Home', { replace: true })
    }
    obtenerMensajes(token);
  } 

  return (
    <header style={{backgroundColor: "#7A8D9B"}}>
    <div style={{ height: "55px"}} />
      {
        getMessages()
        }
      
      <MDBContainer fluid style={{backgroundColor: "#7A8D9B"}} >
        <section>
          <MDBNavbar expand='lg' className='fixed-top' light style={{backgroundColor: "#E9E4EA"}}>
            <MDBContainer fluid>
              <MDBNavbarBrand className='ms-1 ms-lg-3 d-flex align-items-center' onClick={() => setShowNav(false)}>
                <MDBIcon icon='envelope-open' className='text-primary me-2' />
                <small className='fw-bold'>
                  Notificaciones
                </small>
              </MDBNavbarBrand>

              <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-label='Toggle navigation'
                onClick={() => setShowNav(!showNav)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>

              <MDBCollapse navbar show={showNav}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='Login' disabled onClick={() => setShowNav(false)}> 
                      <b>Sesion iniciada como: {localStorage.getItem('email')}</b>
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink aria-current='page' onClick={clearStorage} href='/' tabIndex={10}>
                      <b>Salir</b>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </section>
      </MDBContainer>

      <div id="Inicio"
        className='p-5 text-center bg-image'
        style={{backgroundImage: `url(${background})`, height: '280px'}}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <MDBRow fluid>
          <MDBCol className='mb-4'>
            <div style={{ height: "15px" }}/>
            <div className="d-flex align-items-center justify-content-center">
              <img src={require('./img/perfil.jpg')} className='img-fluid hover-shadow rounded-circle img-thumbnail' alt='' width={250} style={{backgroundColor: "#223542"}}/>
            </div>
          </MDBCol>
          <MDBCol className='mb-4'>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1>Mariano Fortunato Rossi</h1>
                <MDBIcon flag='ar'/>
                <p>Desarrollador ABAP ~ Estudiante de Ingeniería en Informática</p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        </div>
      </div>
      
      <div style={{backgroundColor: "#7A8D9B"}}>
        <> <MDBContainer breakpoint="md" style={{backgroundColor: "#E9E4EA"}}>
        <div style={{ height: "50px" }}/> 
          <MDBRow fluid>
            {
              rows.length===0?
              <p>Ningun registro fue encontrado en la base de datos...</p>
              :
              <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell width="200">Nombre y apellido</TableCell>
                    <TableCell width="100"align="center">Email</TableCell>
                    <TableCell width="150"align="center">Telefono</TableCell>
                    <TableCell align="center" width="500">Mensaje</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map ((row, index) => (
                    <TableRow key={row.name_lastname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                      <TableCell component="th" scope="row">{row.name_lastname}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.phone}</TableCell>
                      <TableCell align="center">{row.comment}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>           
            }
            <div style={{ height: "50px" }}/> 
          </MDBRow>
        </MDBContainer> </>
        <div >{rows.length===0?<div style={{ height: "500px" }}/>:<div style={{ height: "400px" }}/>} </div>
      </div>
    </header>
  );
}