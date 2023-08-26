import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"


//Import Images
import error from "../../assets/images/error-img.png"

export function useCountdown() {
  let [remaining, setRemaining] = useState('6');

  useEffect(() => {
    function tick() {
      setRemaining(remaining - 1);
    }

    const countdown = setInterval(tick, 1000);

    if (remaining < 0) {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [remaining]);

  return remaining;
}


const Pages404 = () => {
    const navigate = useNavigate()
    useEffect(() => {
      setTimeout(() => {
        navigate('/')
      }, 6000)
    }, [])
    const countdown = useCountdown();
    //meta title
    document.title = "404 Error Page | EliteForm";

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 fw-medium">
                  4<i className="bx bx-buoy bx-spin text-primary display-3" />
                  4
                </h1>
                <h4 className="text-uppercase">Sorry, the page was not found</h4>
                <p>Automatic redirect in{" "}<span style={{ fontSize: "24px" }}>{countdown}</span> seconds.</p>
                <div className="mt-5 text-center">
                  <Link
                    className="btn btn-primary "
                    to="/dashboard"
                  >
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8" xl="6">
              <div>
                <img src={error} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Pages404
