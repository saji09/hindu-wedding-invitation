import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DecorativeDivider from "./common/DecorativeDivider";
import { Send, CheckCircle } from "@mui/icons-material";
import TraditionalMotif from "./common/TraditionalMotif";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attending: "yes",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section
      id="rsvp"
      className="section-padding position-relative"
      style={{
        background:
          "linear-gradient(135deg, rgba(248, 241, 229, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23b78727' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          zIndex: -1,
        }}
      ></div>

      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center position-relative">
            <TraditionalMotif type="peacock" size="md" className="mb-3" />
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#8e2323" }}>
              உறுதிப்படுத்தல்
            </h2>
            <DecorativeDivider type="lamp" />
            <p className="lead" style={{ color: "#4a7023" }}>
              தயவுசெய்து டிசம்பர் 1, 2025 க்குள் உங்கள் வருகையை
              உறுதிப்படுத்தவும்
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {submitted ? (
              <div
                className="text-center p-5 rounded shadow-sm"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #f8f1e5)",
                  border: "1px solid rgba(183, 135, 39, 0.3)",
                }}
              >
                <div className="position-relative">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: "linear-gradient(90deg, #b78727, #8e2323)",
                    }}
                  ></div>
                </div>

                <CheckCircle
                  style={{
                    fontSize: "4rem",
                    color: "#4a7023",
                    marginBottom: "1.5rem",
                  }}
                />
                <h3 className="text-secondary mb-3">நன்றி!</h3>
                <p className="lead" style={{ color: "#2a2118" }}>
                  உங்கள் பதில் பதிவு செய்யப்பட்டது. <br />
                  வருகைக்கு நன்றி.
                </p>

                <div className="position-relative mt-4">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, #b78727, transparent)",
                    }}
                  ></div>
                </div>

                <Button
                  variant="primary"
                  className="mt-4"
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "#8e2323",
                    border: "none",
                    borderRadius: "25px",
                    padding: "8px 25px",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#b78727")}
                  onMouseLeave={(e) => (e.target.style.background = "#8e2323")}
                >
                  மற்றொரு பதில் சமர்ப்பிக்கவும்
                </Button>

                <div
                  className="position-relative"
                  style={{ marginTop: "2rem" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: "linear-gradient(90deg, #8e2323, #b78727)",
                    }}
                  ></div>
                </div>
              </div>
            ) : (
              <Form
                onSubmit={handleSubmit}
                className="rounded shadow-sm"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #f8f1e5)",
                  border: "1px solid rgba(183, 135, 39, 0.3)",
                  overflow: "hidden",
                }}
              >
                <div className="position-relative" style={{ height: "8px" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      background: "linear-gradient(90deg, #b78727, #8e2323)",
                    }}
                  ></div>
                </div>

                <div className="p-4 p-md-5 position-relative">
                  <div className="position-absolute top-0 end-0 m-3">
                    <TraditionalMotif type="kolam" size="sm" color="#8e2323" />
                  </div>
                  <div className="position-absolute bottom-0 start-0 m-3">
                    <TraditionalMotif type="mango" size="sm" color="#b78727" />
                  </div>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#4a7023", fontWeight: "500" }}>
                      முழு பெயர் *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        border: "1px solid #b78727",
                        borderRadius: "5px",
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#4a7023", fontWeight: "500" }}>
                      மின்னஞ்சல் *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        border: "1px solid #b78727",
                        borderRadius: "5px",
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#4a7023", fontWeight: "500" }}>
                      தொலைபேசி எண் *
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        border: "1px solid #b78727",
                        borderRadius: "5px",
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#4a7023", fontWeight: "500" }}>
                      வருகை தருபவர்களின் எண்ணிக்கை *
                    </Form.Label>
                        <Form.Select 
                            name="guests" 
                            value={formData.guests}
                            onChange={handleChange}
                            required
                            style={{
                                border: '1px solid #b78727',
                                borderRadius: '5px',
                                padding: '10px 15px',
                                backgroundColor: '#f8f1e5',
                                color: '#2a2118',
                                cursor: 'pointer'
                            }}
                            className="custom-wedding-select"
                            >
                            {[1, 2, 3, 4, 5, 6].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                            <option value="more">6+</option>
                        </Form.Select>
                  </Form.Group>

                  {/* <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#4a7023", fontWeight: "500" }}>
                      நீங்கள் வருகை தருகிறீர்களா? *
                    </Form.Label>
                    <div className="d-flex flex-column flex-md-row gap-3">
                      {["yes", "no"].map((option) => (
                        <div className="form-check" key={option}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="attending"
                            id={`attending-${option}`}
                            value={option}
                            checked={formData.attending === option}
                            onChange={handleChange}
                            required={option === "yes"} 
                            style={{
                              border: "2px solid #8e2323",
                              width: "18px",
                              height: "18px",
                              borderRadius: "50%",
                              marginRight: "8px",
                              appearance: "none",
                              WebkitAppearance: "none",
                              backgroundColor:
                                formData.attending === option
                                  ? "#8e2323"
                                  : "transparent",
                              backgroundImage:
                                formData.attending === option
                                  ? "radial-gradient(circle, #f8f1e5 35%, #8e2323 40%)"
                                  : "none",
                              transition: "all 0.2s ease-in-out",
                              cursor: "pointer",
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`attending-${option}`}
                            style={{ color: "#2a2118", cursor: "pointer" }}
                          >
                            {option === "yes"
                              ? "ஆம், நான்/நாங்கள் வருகிறேன்/வருகிறோம்"
                              : "இல்லை, வர முடியாது"}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Form.Group> */}

                  {/* <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#4a7023", fontWeight: "500" }}>
                      செய்தி (விரும்பினால்)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        border: "1px solid #b78727",
                        borderRadius: "5px",
                        padding: "10px 15px",
                      }}
                    />
                  </Form.Group> */}

                  <div className="position-relative mt-4">
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        background:
                          "linear-gradient(90deg, transparent, #b78727, transparent)",
                      }}
                    ></div>
                  </div>

                  <div className="text-center mt-5">
                    <Button
                      type="submit"
                      style={{
                        background: "#8e2323",
                        border: "none",
                        borderRadius: "25px",
                        padding: "10px 30px",
                        fontWeight: "500",
                        transition: "all 0.3s",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#b78727")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "#8e2323")
                      }
                    >
                      <Send className="me-2" /> சமர்ப்பிக்கவும்
                    </Button>
                  </div>
                </div>

                {/* Form footer */}
                <div className="position-relative" style={{ height: "8px" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      background: "linear-gradient(90deg, #8e2323, #b78727)",
                    }}
                  ></div>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RSVP;