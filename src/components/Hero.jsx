import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DecorativeDivider from './common/DecorativeDivider'
import TraditionalMotif from './common/TraditionalMotif'

const Hero = () => {
  return (
    <section className="hero-section position-relative overflow-hidden" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(rgba(248, 241, 229, 0.8), rgba(248, 241, 229, 0.6)), url("../assets/images/hero-bg.jpg") no-repeat center center',
      backgroundSize: 'cover'
    }}>
      <div className="position-absolute w-100 h-100" style={{
        backgroundColor: 'rgba(42, 33, 24, 0.2)',
        zIndex: 0
      }}></div>

      <div className="position-absolute w-100 h-100" style={{
        zIndex: 1,
        overflow: 'hidden'
      }}>
        <svg className="position-absolute" style={{
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          opacity: 0.7,
          animation: 'float 8s ease-in-out infinite'
        }} viewBox="0 0 100 100">
          <TraditionalMotif type="kolam" size={100} color="#8e2323" />
        </svg>

        <svg className="position-absolute" style={{
          top: '30%',
          right: '10%',
          width: '120px',
          height: '120px',
          opacity: 0.6,
          animation: 'float 10s ease-in-out infinite 2s'
        }} viewBox="0 0 100 100">
          <TraditionalMotif type="peacock" size={100} color="#b78727" />
        </svg>
      </div>

      <Container className="position-relative z-2 py-5">
        <Row className="align-items-center justify-content-center py-5">
          <Col md={10} lg={8} className="text-center">
            <div className="position-relative mb-5" style={{ perspective: '1000px' }}>
              <h1 className="display-2 fw-bold mb-4" style={{
                color: '#8e2323',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                animation: 'fadeInDown 1s ease-out'
              }}>
                <span style={{
                  display: 'inline-block',
                  animation: 'heartbeat 2s infinite'
                }}>Tharshan</span>
                <span style={{
                  display: 'inline-block',
                  margin: '0 15px',
                  color: '#b78727',
                  animation: 'pulse 2s infinite'
                }}>&</span>
                <span style={{
                  display: 'inline-block',
                  animation: 'heartbeat 2s infinite 0.5s'
                }}>Thivya</span>
              </h1>
              
              <TraditionalMotif 
                type="mango" 
                size="md" 
                className="position-absolute"
                style={{
                  top: '-20px',
                  left: '20%',
                  transform: 'rotate(-30deg)',
                  animation: 'swing 5s ease-in-out infinite'
                }}
              />
              <TraditionalMotif 
                type="mango" 
                size="md" 
                className="position-absolute"
                style={{
                  top: '-20px',
                  right: '20%',
                  transform: 'rotate(30deg)',
                  animation: 'swing 5s ease-in-out infinite 1s'
                }}
              />
            </div>

            <DecorativeDivider type="lamp" />
            
            <p className="lead mb-4" style={{
              fontSize: '1.5rem',
              color: '#f8f1e5',
              textShadow: '1px 1px 2px rgba(42, 33, 24, 0.5)',
              animation: 'fadeIn 1.5s ease-out'
            }}>
              உங்கள் அன்பான வருகைக்காக காத்திருக்கிறோம்
            </p>
            
            <div className="position-relative my-4">
              <h2 className="h2 mb-4" style={{
                color: '#f8f1e5',
                position: 'relative',
                display: 'inline-block',
                textShadow: '1px 1px 3px rgba(42, 33, 24, 0.5)'
              }}>
                திருமண விழா
                <span className="position-absolute bottom-0 start-0 w-100" style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #b78727, transparent)'
                }}></span>
              </h2>
            </div>
            
            <p className="h4 mb-5" style={{
              color: '#f8f1e5',
              fontWeight: '500',
              textShadow: '1px 1px 2px rgba(42, 33, 24, 0.5)',
              animation: 'fadeInUp 1s ease-out'
            }}>
              தேதி: <span style={{ color: '#b78727' }}>டிசம்பர் 15, 2025</span>
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <TraditionalMotif 
                type="kolam" 
                size="lg" 
                style={{
                  animation: 'rotate 10s linear infinite',
                  filter: 'drop-shadow(1px 1px 2px rgba(42, 33, 24, 0.5))'
                }} 
              />
              <TraditionalMotif 
                type="peacock" 
                size="lg" 
                style={{
                  animation: 'rotate 10s linear infinite reverse',
                  filter: 'drop-shadow(1px 1px 2px rgba(42, 33, 24, 0.5))'
                }} 
              />
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.05); }
          50% { transform: scale(1); }
          75% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes swing {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { 
            opacity: 0;
            transform: translateY(-30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero