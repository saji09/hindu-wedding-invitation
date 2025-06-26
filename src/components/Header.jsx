import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { EmojiPeople, Favorite, Event, PhotoCamera, Mail } from '@mui/icons-material'
import TraditionalMotif from './common/TraditionalMotif'

const Header = () => {
  return (
    <Navbar expand="lg" className="sticky-top" style={{
      background: 'linear-gradient(to right, #8e2323, #b78727)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      padding: '0.5rem 0'
    }}>
      <Container>
        <div className="position-absolute bottom-0 start-0 w-100" style={{
          height: '3px',
          background: 'linear-gradient(90deg, #b78727, #4a7023, #8e2323)'
        }}></div>
        
        <Navbar.Brand href="#home" className="d-flex align-items-center position-relative">
          <div style={{
            animation: 'swing 5s ease-in-out infinite'
          }}>
            <TraditionalMotif type="peacock" size="md" color="#f8f1e5" />
          </div>
          <span className="ms-3 text-light fs-4 fw-bold" style={{
            fontFamily: "'Tiro Tamil', serif",
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            letterSpacing: '1px'
          }}>
            Tharshan <span style={{ color: '#f0e6d2' }}>&</span> Thivya
            <span style={{
              display: 'block',
              fontSize: '1rem',
              marginTop: '-5px',
              color: '#f0e6d2'
            }}>திருமணம்</span>
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" style={{
          color: '#f8f1e5'
        }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M3 7H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 15H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 23H27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link 
              href="#couple" 
              className="d-flex align-items-center mx-2 py-3 py-lg-0 position-relative"
              style={{
                color: '#f8f1e5',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f0e6d2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#f8f1e5'}
            >
              <div className="position-relative">
                <EmojiPeople className="me-2" style={{ fontSize: '1.2rem' }} />
                <span>மணமக்கள்</span>
                <div className="position-absolute bottom-0 start-0 w-100" style={{
                  height: '2px',
                  background: '#f8f1e5',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s',
                  transformOrigin: 'left center'
                }}></div>
              </div>
            </Nav.Link>
            
            <Nav.Link 
              href="#events" 
              className="d-flex align-items-center mx-2 py-3 py-lg-0 position-relative"
              style={{
                color: '#f8f1e5',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f0e6d2';
                e.currentTarget.querySelector('div > div').style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f8f1e5';
                e.currentTarget.querySelector('div > div').style.transform = 'scaleX(0)';
              }}
            >
              <div className="position-relative">
                <Event className="me-2" style={{ fontSize: '1.2rem' }} />
                <span>நிகழ்ச்சிகள்</span>
                <div className="position-absolute bottom-0 start-0 w-100" style={{
                  height: '2px',
                  background: '#f8f1e5',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s',
                  transformOrigin: 'left center'
                }}></div>
              </div>
            </Nav.Link>
            
            <Nav.Link 
              href="#gallery" 
              className="d-flex align-items-center mx-2 py-3 py-lg-0 position-relative"
              style={{
                color: '#f8f1e5',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f0e6d2';
                e.currentTarget.querySelector('div > div').style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f8f1e5';
                e.currentTarget.querySelector('div > div').style.transform = 'scaleX(0)';
              }}
            >
              <div className="position-relative">
                <PhotoCamera className="me-2" style={{ fontSize: '1.2rem' }} />
                <span>புகைப்படங்கள்</span>
                <div className="position-absolute bottom-0 start-0 w-100" style={{
                  height: '2px',
                  background: '#f8f1e5',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s',
                  transformOrigin: 'left center'
                }}></div>
              </div>
            </Nav.Link>
            
            <Nav.Link 
              href="#rsvp" 
              className="d-flex align-items-center mx-2 py-3 py-lg-0 position-relative"
              style={{
                color: '#f8f1e5',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f0e6d2';
                e.currentTarget.querySelector('div > div').style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f8f1e5';
                e.currentTarget.querySelector('div > div').style.transform = 'scaleX(0)';
              }}
            >
              <div className="position-relative">
                <Mail className="me-2" style={{ fontSize: '1.2rem' }} />
                <span>உறுதிப்படுத்தல்</span>
                <div className="position-absolute bottom-0 start-0 w-100" style={{
                  height: '2px',
                  background: '#f8f1e5',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s',
                  transformOrigin: 'left center'
                }}></div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        @keyframes swing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .navbar-nav .nav-link:hover div > div {
          transform: scaleX(1) !important;
        }
      `}</style>
    </Navbar>
  )
}

export default Header