import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";

const roles = ["Bunu yazan tosun", "Okuyana kosun"]

class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" alt="background-image"/>
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome!
                    I post some stuff here :D
                  </h1>
                </div>
                <Typed 
                  loop={true}
                  typeSpeed={70}
                  backSpeed={70}
                  strings={roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor={true}
                  className="self-typed"
                  cursorChar="|"/>
                <div className="hero-welcome-bio">
                  <h1>
                    Let&apos;s take a look at my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Index;