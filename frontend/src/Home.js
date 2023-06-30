import React, { useState } from 'react';
import background from "./img/computer.jpg";
//import { Navigate, Redirect } from "react-router-dom";
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
  MDBAccordion,
  MDBAccordionItem,
  MDBListGroup,
  MDBBadge,
  MDBInput,
  MDBBtn,
  MDBListGroupItem,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import {contact} from "../src/api/mensajes.api";

export default function App() {
  const [showNav, setShowNav] = useState(false);
  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [phone,setPhone] = React.useState('');
  const [message,setMessage] = React.useState('');

  const handleName = (event)=> {
    setName(event.target.value);
  }
  const handleEmail = (event)=> {
    setEmail(event.target.value);
  }
  const handlePhone = (event)=> {
    setPhone(event.target.value);
  }
  const handleMessage = (event)=> {
    setMessage(event.target.value);
  }

  const enviarMensaje = async function() {
    let datos = {
      "name_lastname": name,
      "email": email,
      "phone": phone,
      "comment": message
    }
    let getContact = await contact(datos);
    if (getContact.rdo === 0) {
      alert("Mensaje enviado!");
    }
    else if (getContact.rdo === 1) {
      alert("Error inesperado");
    }
  }

  const sendMessage=()=> {
    if (name!=="" && email!=="" && phone!=="" && message!=="") {
      enviarMensaje();
    }
    else {
      alert("Debe completar todos los campos");
    }
  }

  return (
    <header style={{backgroundColor: "#7A8D9B"}}>
    <div style={{ height: "55px" }}/>
      {localStorage.clear()}
      <MDBContainer fluid style={{backgroundColor: "#7A8D9B"}} >
        <section>
          <MDBNavbar expand='lg' className='fixed-top' light style={{backgroundColor: "#E9E4EA"}}>
            <MDBContainer fluid>
              <MDBNavbarBrand className='ms-1 ms-lg-3 d-flex align-items-center' href='#' onClick={() => setShowNav(false)}>
                <MDBIcon icon='home' className='text-primary me-2' />
                <small className='fw-bold'>Inicio</small>
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
                    <MDBNavbarLink active aria-current='page' href='#AcercaDeMi' onClick={() => setShowNav(false)}>
                      Acerca de mi
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#ExperienciaLaboral' onClick={() => setShowNav(false)}>
                      Experiencia laboral
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#Educacion' onClick={() => setShowNav(false)}>
                      Educación
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#Estudios' onClick={() => setShowNav(false)}>
                      Estudios
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='#Contacto' onClick={() => setShowNav(false)}>
                      Contacto
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='Login' onClick={() => setShowNav(false)}>
                      Iniciar sesion
                    </MDBNavbarLink>
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    <MDBNavbarLink disabled aria-current='page' href='/' tabIndex={10}>
                      Salir
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
        style={{backgroundImage: `url(${background})`, height: '210px'}}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1>Mariano Fortunato Rossi</h1>
              <MDBIcon flag='ar'/>
              <p>Desarrollador ABAP ~ Estudiante de Ingeniería en Informática</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <> <MDBContainer breakpoint="md" style={{backgroundColor: "#E9E4EA"}}>
        <div style={{ height: "65px" }} id="AcercaDeMi"/> 
          <MDBRow fluid>
            <MDBCol lg='3' md='4' className='mb-4'>
              <div className="d-flex align-items-center justify-content-center">
                <img src={require('./img/perfil.jpg')} className='img-fluid hover-shadow rounded-circle img-thumbnail' alt='' width={250} style={{backgroundColor: "#223542"}}/>
              </div>
            </MDBCol>
            <MDBCol lg='6' md='4' className='mb-4'>
                <div className="text-center d-flex align-items-center" style={{ height: "300px" }}>
                  <p> 
                    Estudiante de Ingeniería en Informática en la UADE.
                    Siento un gran interés por la programación y la computación y me considero una persona responsable que busca adquirir nuevos conocimientos, 
                    siempre dispuesto a afrontar nuevos desafíos.
                  </p>
                </div>
            </MDBCol>
            <MDBCol lg='3' md='4' className='mb-4 text-center align-items-center'>
                <div>
                  <MDBListGroup>
                    <strong>Email</strong>
                    <MDBListGroupItem style={{backgroundColor: "#C0CFD6"}}>marfortunato@uade.edu.ar</MDBListGroupItem>
                    <strong>Fecha de nacimiento</strong>
                    <MDBListGroupItem style={{backgroundColor: "#C0CFD6"}}>05/01/2000</MDBListGroupItem>
                    <strong>Telefono de contacto</strong>
                    <MDBListGroupItem style={{backgroundColor: "#C0CFD6"}}>11 5141 8306</MDBListGroupItem>
                    <strong>Ubicación</strong>
                    <MDBListGroupItem style={{backgroundColor: "#C0CFD6"}}>Buenos Aires, Argentina</MDBListGroupItem>
                  </MDBListGroup>
                </div>
            </MDBCol>
          </MDBRow>
          <MDBRow fluid>
            <MDBCol lg='6' md='6' className='mb-4 text-center align-items-center'>            
              <MDBBtn href='https://github.com/marifortu45' outline rounded color='dark' size='lg'>
                <MDBIcon fab icon='github'/> GitHub
              </MDBBtn>
            </MDBCol>
            <MDBCol lg='6' md='6' className='mb-4 text-center align-items-center'>            
              <MDBBtn href='https://www.linkedin.com/in/mariano-fortunato-rossi-a4690515a/' outline rounded color='primary' size='lg'>
                <MDBIcon fab icon="linkedin" /> LinkedIn
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <div style={{ height: "25px" }}/>
          <div style={{ height: "40px" }} id='ExperienciaLaboral' />
          <MDBRow fluid>
            <MDBCol lg='12' md='12' className='mb-4'>
              <div className='p-4 text-left bg-light'>
                <h3 className='mb-3'>Experiencia laboral</h3>
              </div>
              <MDBAccordion alwaysOpen>
                <MDBAccordionItem collapseId={1} headerTitle='ExxonMobil ~ Desarrollador SAP ABAP'>
                  <img src={require('./img/xom.png')} className='rounded-4 shadow-4 float-start fluid' alt='' width={60}/>
                  <div> <strong> Noviembre 2021 - Actualidad </strong> </div>
                  <div className="d-flex align-items-start">Desarrollo de soluciones customizadas y mantenimiento en lenguaje ABAP de SAP.
                                                            Implementación de soluciones mediante paradigma orientado a objetos, siguiendo 
                                                            los estandares organizacionales de seguridad y buenas practicas.
                  
                  </div>
                  <div className="d-flex align-items-start">Utilización de metodologias Agile durante el día a día.</div>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='Capgemini S.A. ~ Desarrollador SAP ABAP'>
                  <img src={require('./img/cap.jpg')} className='rounded-4 shadow-4 float-start fluid' alt='' width={60}/>
                  <div> <strong> Marzo 2020 - Noviembre 2021 </strong> </div>
                  <div className="d-flex align-items-start">Desarrollo de soluciones en lenguaje ABAP de SAP.</div>
                  <div className="d-flex align-items-start">Creación y mantenimiento de formularios Sapscript, SmartForms y AdobeForms.</div>
                  <div className="d-flex align-items-start">Utilización de iDocs, BAPIs, ModulePools, Jobs, ALV, programación orientada a objetos.</div>      
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
          </MDBRow>

          <div style={{ height: "40px" }} id='Educacion' />
          <MDBRow fluid>
            <MDBCol lg='6' md='6' className='mb-4' >
              <div className='p-4 text-left bg-light'>
                <h3 className='mb-3'>Educación</h3>
                <MDBListGroup light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <strong>Ingeniería en Informática</strong>
                    <div><text>Universidad Argentina de la Empresa</text></div>
                    <MDBBadge pill light>2021 - 2023</MDBBadge> 
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <strong>Ingeniería en Informática</strong>
                    <div><text>Universidad de Buenos Aires</text></div>
                    <MDBBadge pill light>2018 - 2021</MDBBadge> 
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
            </MDBCol>
            <MDBCol lg='6' md='6' className='mb-4'>
              <div className='p-4 text-left bg-light'>
                <h3 className='mb-3'>Idiomas</h3>
                <MDBListGroup light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <strong>Español</strong>
                    <div><text>Nativo</text></div>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                    <strong>Ingles</strong>
                    <div><text>Oral/Escrito avanzado</text></div> 
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
            </MDBCol>
          </MDBRow>

          <div style={{ height: "40px" }} id='Estudios'/>
          <MDBRow fluid>
            <MDBCol lg='6' md='6' className='mb-4'>
              <div className='p-4 text-left bg-light'>
                <h3 className='mb-3'>Lenguajes de programación</h3>
                <MDBListGroup light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Python</div>Intermedio
                    </div>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>C</div>Intermedio
                    </div>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Smalltalk</div>Básico
                    </div>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
            </MDBCol>
            <MDBCol lg='6' md='6' className='mb-4'>
              <div className='p-4 text-left bg-light'>
                <h3 className='mb-3'>Cursos y capacitaciones</h3>
                <MDBListGroup light>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Capacitacion SAP ABAP <MDBBadge pill light>80hs</MDBBadge></div>Capgemini S.A.
                    </div>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Capacitacion SAP ABAP <MDBBadge pill light>160hs</MDBBadge></div>Accenture
                    </div>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-start'>
                    <div className='ms-2 me-auto'>
                      <div className='fw-bold'>Desarrollo de Apps Móviles<MDBBadge pill light>40hs</MDBBadge></div>Google Activate
                    </div>
                  </MDBListGroupItem>
                </MDBListGroup>
              </div>
            </MDBCol>
          </MDBRow>

          <div style={{ height: "40px"}} id='Contacto' />
          <MDBRow fluid style={{width: "50"}}>
            <MDBCol lg='3' md='3' sm='2' center className='mb-4'/>
            <MDBCol lg='6' md='6' sm='8' center className='mb-4'>
              <MDBListGroupItem style={{backgroundColor: "#C0CFD6"}}><p><h3>¿Te interesa este perfil? ¡Contactalo!</h3></p></MDBListGroupItem>
              <div style={{ height: "15px" }} />
              <MDBInput wrapperClass='mb-4' id='form1n0' label='Nombre y apellido' onChange={Event => handleName(Event)} />
              <MDBInput wrapperClass='mb-4' type='email' id='form1n3' label='Correo electrónico' onChange={Event => handleEmail(Event)} />
              <MDBInput wrapperClass='mb-4' type='number' id='form1n4' label='Telefono de contacto' onChange={Event => handlePhone(Event)} />
              <MDBInput wrapperClass='mb-4' textarea id='form1n5' rows={4} label='Mensaje' onChange={Event => handleMessage(Event)} />
              <MDBBtn rounded className='mb-4' type='submit' block color='primary' onClick={sendMessage}>
                <h6><strong>Enviar mensaje</strong></h6>
              </MDBBtn> 
            </MDBCol>
            <MDBCol lg='3' md='3' sm='2' center className='mb-4'/>
          </MDBRow>
        </MDBContainer> </>
      </div>
    </header>
  );
}