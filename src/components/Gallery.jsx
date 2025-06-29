import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DecorativeDivider from './common/DecorativeDivider'
import TraditionalMotif from './common/TraditionalMotif'

const Gallery = () => {
  const photos = [
    { 
      id: 1, 
      title: "நிச்சயதார்த்தம்", 
      subTitle: "Engagement",
      //img: "/assets/images/engagement.jpg",
      img: "/assets/images/9a5ad7a2-1648-48d1-be31-643ee3a72213.jpeg",
      date: "ஆகஸ்ட் 12, 2023",
      description: "எங்கள் அன்பான நிச்சயதார்த்த தருணம்"
    },
    { 
      id: 6, 
      title: "வரவேற்பு அட்டை", 
      subTitle: "Invitation",
      img: "/assets/images/invitation.jpg",
      date: "டிசம்பர் 1, 2023",
      description: "பாரம்பரிய தமிழ் வடிவமைப்பில் எங்கள் திருமண அட்டை"
    }
  ]

  return (
    <section id="gallery" className="section-padding position-relative" style={{
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
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#8e2323' }}>எங்கள் நினைவுகள்</h2>
            <DecorativeDivider type="lamp" />
            <p className="lead" style={{ color: '#4a7023' }}>எங்கள் அன்பான பயணத்தின் முக்கிய தருணங்கள்</p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {photos.map(photo => (
            <Col lg={6} key={photo.id} className="d-flex">
              <div className="traditional-gallery-card position-relative overflow-hidden rounded-4 shadow w-100" 
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8f1e5)',
                  border: '1px solid rgba(183, 135, 39, 0.2)'
                }}>
                <div className="position-relative" style={{ height: '8px' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(90deg, #b78727, #8e2323)'
                  }}></div>
                </div>
                
                <div className="row g-0 h-100">
                  <div className="col-md-6 gallery-image-container">
                    <img 
                      src={photo.img} 
                      alt={photo.title} 
                      className="img-fluid w-100 h-100 gallery-image"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                  </div>
                  <div className="col-md-6 d-flex align-items-center gallery-content">
                    <div className="p-4 p-lg-4 w-100 position-relative">
                      <div className="d-flex align-items-center mb-3">
                        <div style={{
                          background: '#f0e6d2',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px',
                          flexShrink: 0
                        }}>
                          <TraditionalMotif type="kolam" size="sm" color="#8e2323" />
                        </div>
                        <div>
                          <h3 className="h4 mb-0" style={{ color: '#8e2323' }}>{photo.title}</h3>
                          <small className="text-muted">{photo.subTitle}</small>
                        </div>
                      </div>
                      
                      <div className="d-flex align-items-center mb-3">
                        <div style={{
                          background: '#f0e6d2',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '15px',
                          flexShrink: 0
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#8e2323">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                          </svg>
                        </div>
                        <div>
                          <h5 className="mb-1" style={{ color: '#4a7023', fontSize: '0.9rem' }}>தேதி</h5>
                          <p className="mb-0" style={{ color: '#2a2118' }}>{photo.date}</p>
                        </div>
                      </div>
                      
                      <p className="mb-4" style={{ color: '#2a2118' }}>{photo.description}</p>
                      
                      <div className="position-relative mb-3">
                        <div 
                          className="position-absolute top-0 start-0 w-100" 
                          style={{ 
                            height: '1px', 
                            background: 'linear-gradient(90deg, transparent, #b78727, transparent)'
                          }}
                        ></div>
                      </div>
                      
                      <button className="btn btn-sm mt-2" style={{
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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        மேலும் பார்க்க
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="position-relative" style={{ height: '8px' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(90deg, #8e2323, #b78727)'
                  }}></div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <svg width="150" height="30" viewBox="0 0 150 30" className="mb-4">
              <path 
                d="M0,15 Q37.5,25 75,15 T150,15" 
                stroke="#b78727" 
                fill="none" 
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <path 
                d="M0,15 Q37.5,5 75,15 T150,15" 
                stroke="#8e2323" 
                fill="none" 
                strokeWidth="2"
              />
            </svg>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
