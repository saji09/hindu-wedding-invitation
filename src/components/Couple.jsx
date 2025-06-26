import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import DecorativeDivider from './common/DecorativeDivider'
import { Favorite } from '@mui/icons-material'
import TraditionalMotif from './common/TraditionalMotif'

const Couple = () => {
  return (
    <section id="couple" className="section-padding position-relative" style={{
      background: 'linear-gradient(135deg, rgba(248, 241, 229, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
    }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23b78727\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        zIndex: -1
      }}></div>

      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center position-relative">
            <TraditionalMotif type="peacock" size="md" className="mb-3" />
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#8e2323' }}>மணமக்களைப் பற்றி</h2>
            <DecorativeDivider type="lamp" />
            <p className="lead" style={{ color: '#4a7023' }}>நாங்கள் எங்கள் வாழ்க்கைப் பயணத்தை ஒன்றாகத் தொடங்க உற்சாகமாக இருக்கிறோம்</p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center align-items-center">
          <Col lg={5}>
            <Card className="border-0 shadow h-100 couple-card" style={{
              borderRadius: '15px',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #ffffff, #f8f1e5)'
            }}>
              <div className="position-relative">
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  zIndex: 2
                }}>
                  <TraditionalMotif type="kolam" size="sm" color="#8e2323" />
                </div>
                <Card.Img 
                  variant="top" 
                  src="/assets/images/groom.jpg" 
                  alt="Groom" 
                  className="img-fluid"
                  style={{
                    height: '350px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 text-center" style={{
                  background: 'linear-gradient(to top, rgba(142, 35, 35, 0.8), transparent)'
                }}>
                  <h3 className="text-light mb-0">Tharshan</h3>
                </div>
              </div>
              <Card.Body className="text-center position-relative">
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '40px',
                  background: '#f8f1e5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #b78727'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#8e2323">
                    <path d="M15.5 12c2.5 0 4.5 2 4.5 4.5 0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5zm0 2a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5zM12 13v2h-1v4h1v2H3v-2h1v-4H3v-2h9zm0-11a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93L8 18h2.23l6.89-11.3C18.72 4.13 18.46 2 16 2h-4z"/>
                  </svg>
                </div>
                <p className="mb-1" style={{ color: '#2a2118', marginTop: '20px' }}>
                  <span style={{ color: '#8e2323', fontWeight: '500' }}>மகன்:</span> திரு. Kanagasabai & திருமதி. AAA
                </p>
                <p style={{ color: '#b78727', fontWeight: '500' }}>
                  நல்லூர், யாழ்ப்பாணம், இலங்கை
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <button className="btn btn-sm mx-2" style={{
                    background: '#8e2323',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '5px 15px',
                    border: 'none',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#b78727'}
                  onMouseLeave={(e) => e.target.style.background = '#8e2323'}
                  >
                    <Favorite className="me-1" style={{ fontSize: '1rem' }} /> 
                    மகிழ்ச்சியான நினைவுகள்
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col xs={12} lg={2} className="d-flex align-items-center justify-content-center my-4 my-lg-0 position-relative">
            <div className="position-absolute" style={{
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(183, 135, 39, 0.2) 0%, rgba(183, 135, 39, 0) 70%)',
              borderRadius: '50%'
            }}></div>
            <div className="bg-primary rounded-circle p-4 d-flex align-items-center justify-content-center shadow" style={{
              background: 'linear-gradient(135deg, #8e2323, #b78727)',
              zIndex: 1
            }}>
              <Favorite style={{ fontSize: '2.5rem', color: 'white' }} />
            </div>
          </Col>
          
          <Col lg={5}>
            <Card className="border-0 shadow h-100 couple-card" style={{
              borderRadius: '15px',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #ffffff, #f8f1e5)'
            }}>
              <div className="position-relative">
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  zIndex: 2
                }}>
                  <TraditionalMotif type="mango" size="sm" color="#8e2323" />
                </div>
                <Card.Img 
                  variant="top" 
                  src="/assets/images/bride.jpg" 
                  alt="Bride" 
                  className="img-fluid"
                  style={{
                    height: '350px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 text-center" style={{
                  background: 'linear-gradient(to top, rgba(142, 35, 35, 0.8), transparent)'
                }}>
                  <h3 className="text-light mb-0">Thivya</h3>
                </div>
              </div>
              <Card.Body className="text-center position-relative">
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '40px',
                  background: '#f8f1e5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #b78727'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#8e2323">
                    <path d="M12 2a8 8 0 018 8c0 1.848-.627 3.55-1.684 4.905l3.387 3.388a1 1 0 01-1.414 1.414l-3.387-3.387A7.96 7.96 0 0112 18a8 8 0 110-16zm0 2a6 6 0 100 12 6 6 0 000-12zM8.535 8.535a1 1 0 011.415 0 3.975 3.975 0 015.657 0 1 1 0 01-1.415 1.414 1.975 1.975 0 00-2.828 0 1 1 0 01-1.415 0 1 1 0 010-1.414z"/>
                  </svg>
                </div>
                <p className="mb-1" style={{ color: '#2a2118', marginTop: '20px' }}>
                  <span style={{ color: '#8e2323', fontWeight: '500' }}>மகள்:</span> திரு. சிவலோகன் & திருமதி. குமுதினி
                </p>
                <p style={{ color: '#b78727', fontWeight: '500' }}>
                  அச்சுவேலி, யாழ்ப்பாணம், இலங்கை
                </p>
                <div className="d-flex justify-content-center mt-3">
                  <button className="btn btn-sm mx-2" style={{
                    background: '#8e2323',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '5px 15px',
                    border: 'none',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#b78727'}
                  onMouseLeave={(e) => e.target.style.background = '#8e2323'}
                  >
                    <Favorite className="me-1" style={{ fontSize: '1rem' }} /> 
                    மகிழ்ச்சியான நினைவுகள்
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Couple