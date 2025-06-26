import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import DecorativeDivider from './common/DecorativeDivider'
import { LocationOn, CalendarToday, Schedule } from '@mui/icons-material'
import TraditionalMotif from './common/TraditionalMotif'

const Events = () => {
  const events = [
    {
      title: "திருமண விழா",
      date: "டிசம்பர் 15, 2025",
      time: "காலை 9:00 மணி - 11:30 மணி",
      venue: "நல்லூர் கந்தசுவாமி கோயில்",
      address: "கோயில் வீதி, நல்லூர், யாழ்ப்பாணம்",
      mapLink: "https://goo.gl/maps/Vwz1FovR4p12",
      description: "யாழ்ப்பாணம் பாரம்பரிய முறைப்படி திருமண விழா நடைபெறும்."
    },
    {
      title: "விருந்து நிகழ்ச்சி",
      date: "டிசம்பர் 15, 2025",
      time: "மாலை 6:00 மணி - 9:00 மணி",
      venue: "யாழ்ப்பாணம் நகர மண்டபம்",
      address: "முதலியார் வீதி, யாழ்ப்பாணம்",
      mapLink: "https://goo.gl/maps/VdY3Pq5vRUq",
      description: "நண்பர்கள் மற்றும் குடும்பத்தினருடன் விருந்தும் கலாச்சார நிகழ்வுகளும் நடைபெறும்."
    }
  ];

  return (
    <section id="events" className="section-padding position-relative">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23b7872720\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        opacity: 0.3,
        zIndex: -1
      }}></div>

      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center position-relative">
            <TraditionalMotif type="peacock" size="md" className="mb-3" />
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#8e2323' }}>திருமண நிகழ்ச்சிகள்</h2>
            <DecorativeDivider type="lamp" />
            <p className="lead" style={{ color: '#4a7023' }}>உங்கள் அன்பான வருகையை எதிர்நோக்கியுள்ளோம்</p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {events.map((event, index) => (
            <Col lg={5} key={index}>
              <Card className="border-0 shadow h-100 event-card" 
                style={{
                  background: 'linear-gradient(145deg, #f8f1e5, #ffffff)',
                  borderRadius: '15px',
                  overflow: 'hidden'
                }}>

                <div className="position-relative" style={{ height: '10px' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(90deg, #b78727, #8e2323)'
                  }}></div>
                </div>
                
                <Card.Body className="p-4 position-relative">
                  <div className="position-absolute top-0 end-0 m-3">
                    <TraditionalMotif type="kolam" size="sm" color="#b78727" />
                  </div>
                  
                  <h3 className="mb-4" style={{ 
                    color: '#8e2323',
                    borderBottom: '2px dashed #b78727',
                    paddingBottom: '10px',
                    position: 'relative'
                  }}>
                    {event.title}
                    <TraditionalMotif 
                      type="mango" 
                      size="xs" 
                      style={{ 
                        position: 'absolute',
                        right: 0,
                        bottom: '-5px'
                      }} 
                    />
                  </h3>
                  
                  <div className="d-flex align-items-start mb-3">
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
                      <CalendarToday style={{ color: '#8e2323' }} />
                    </div>
                    <div>
                      <h5 className="mb-1" style={{ color: '#4a7023' }}>தேதி & நேரம்</h5>
                      <p className="mb-0" style={{ color: '#2a2118' }}>
                        {event.date}<br />
                        <span style={{ color: '#b78727', fontWeight: 500 }}>{event.time}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-3">
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
                      <LocationOn style={{ color: '#8e2323' }} />
                    </div>
                    <div>
                      <h5 className="mb-1" style={{ color: '#4a7023' }}>இடம்</h5>
                      <p className="mb-1" style={{ color: '#2a2118' }}>
                        <span style={{ fontWeight: 500 }}>{event.venue}</span><br />
                        {event.address}
                      </p>
                      <a 
                        href={event.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm mt-2"
                        style={{
                          background: '#8e2323',
                          color: 'white',
                          borderRadius: '20px',
                          padding: '5px 15px',
                          border: 'none',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.background = '#b78727'}
                        onMouseLeave={(e) => e.target.style.background = '#8e2323'}
                      >
                        Google Map இல் காண்க
                      </a>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start">
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
                      <Schedule style={{ color: '#8e2323' }} />
                    </div>
                    <div>
                      <h5 className="mb-1" style={{ color: '#4a7023' }}>விவரங்கள்</h5>
                      <p className="mb-0" style={{ color: '#2a2118' }}>{event.description}</p>
                    </div>
                  </div>
                </Card.Body>
                
                <div className="position-relative" style={{ height: '10px' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(90deg, #8e2323, #b78727)'
                  }}></div>
                </div>
              </Card>
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

export default Events