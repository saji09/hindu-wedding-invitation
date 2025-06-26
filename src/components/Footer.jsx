import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TraditionalMotif from './common/TraditionalMotif'
import { Phone, Email, LocationOn } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className="position-relative py-5" style={{
      backgroundColor: '#2a2118',
      color: '#f8f1e5',
      overflow: 'hidden'
    }}>
      <div className="position-absolute top-0 start-0 w-100" style={{ height: '15px' }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 15" preserveAspectRatio="none">
          <path 
            d="M0,7.5 C150,15 300,0 450,7.5 C600,15 750,0 900,7.5 C1050,15 1200,0 1200,7.5 L1200,15 L0,15 Z" 
            fill="#8e2323"
          />
          <path 
            d="M0,7.5 C200,0 400,15 600,7.5 C800,0 1000,15 1200,7.5" 
            stroke="#b78727" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="5,3"
          />
        </svg>
      </div>

      <div className="position-absolute bottom-0 start-0" style={{ opacity: 0.1 }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path d="M40,100 Q100,40 160,100 Q100,160 40,100 Z" fill="#b78727" />
        </svg>
      </div>
      <div className="position-absolute top-0 end-0" style={{ opacity: 0.1 }}>
        <svg width="150" height="150" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="60" fill="none" stroke="#8e2323" strokeWidth="2" />
          <TraditionalMotif type="kolam" size={150} color="#8e2323" />
        </svg>
      </div>

      <Container>
        <Row className="g-4 position-relative">
          <Col md={4} className="text-center text-md-start">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <h4 className="mb-3" style={{ color: '#b78727' }}>Tharshan & Thivya</h4>
              <div className="mb-3">
                <TraditionalMotif type="peacock" size="md" color="#8e2323" />
              </div>
              <p className="mb-0" style={{ maxWidth: '250px' }}>
                எங்கள் திருமணத்தில் பங்கேற்றமைக்கு நன்றி
              </p>
            </div>
          </Col>
          
        <Col md={4} className="text-center">
        <div className="position-relative">
            <h4 className="mb-4" style={{ color: '#b78727' }}>தொடர்புக்கு</h4>
            
            <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-center justify-content-center">
                <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ 
                backgroundColor: '#8e2323',
                color: '#f8f1e5'
                }}>
                <Phone style={{ 
                    color: '#f8f1e5', 
                    fontSize: '1rem',
                    fill: 'currentColor'
                }} />
                </div>
                <span>+94 771234567 (Tharshan)</span>
            </li>
            <li className="mb-3 d-flex align-items-center justify-content-center">
                <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ 
                backgroundColor: '#8e2323',
                color: '#f8f1e5'
                }}>
                <Phone style={{ 
                    color: '#f8f1e5', 
                    fontSize: '1rem',
                    fill: 'currentColor'
                }} />
                </div>
                <span>+94 771234567 (Thivya)</span>
            </li>
            <li className="d-flex align-items-center justify-content-center">
                <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ 
                backgroundColor: '#8e2323',
                color: '#f8f1e5'
                }}>
                <Email style={{ 
                    color: '#f8f1e5', 
                    fontSize: '1rem',
                    fill: 'currentColor'
                }} />
                </div>
                <span>tharshthiv.wedding@example.com</span>
            </li>
            </ul>
        </div>
        </Col>

        <Col md={4} className="text-center text-md-end">
        <div className="position-relative">
            <h4 className="mb-4" style={{ color: '#b78727' }}>முகவரி</h4>
            
            <div className="d-flex align-items-center justify-content-center justify-content-md-end mb-3">
            <div className="rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ 
                backgroundColor: '#8e2323',
                color: '#f8f1e5'
            }}>
                <LocationOn style={{ 
                color: '#f8f1e5', 
                fontSize: '1rem',
                fill: 'currentColor'
                }} />
            </div>
            <div>
                <p className="mb-1">456 பருத்தித்துறை வீதி</p>
                <p className="mb-1">நல்லூர்</p>
                <p className="mb-1">யாழ்ப்பாணம் - 40000</p>
                <p className="mb-0">வட மாகாணம், இலங்கை</p>
            </div>
            </div>
        </div>
        </Col>
        </Row>
        
        <Row className="mt-5 position-relative">
          <Col className="text-center">
            <div className="position-relative mb-3">
              <div style={{ 
                height: '1px', 
                background: 'linear-gradient(90deg, transparent, #b78727, transparent)',
                margin: '0 auto',
                maxWidth: '300px'
              }}></div>
            </div>
            <p className="mb-0" style={{ color: '#b78727' }}>
              &copy; {new Date().getFullYear()} Tharshan & Thivya திருமணம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer