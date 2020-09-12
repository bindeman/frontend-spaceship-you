/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import animations from "../animations";
import { motion } from "framer-motion";
import Timer from "react-compound-timer";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: (new Date(), 1000),
      bedTime: new Date(),
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1,
    };
  }

  componentDidUpdate() {}

  notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            <b>Time to sleep</b> - it's almost time to sleep. You have time
            before bedtime.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-watch-time",
      autoDismiss: 7,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={animations.pageVariants}
          transition={animations.pageTransition}
          className="content"
        >
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h1>
                    <Timer
                      initialTime={9000 * 60 * 48 + 5000}
                      lastUnit="h"
                      direction="backward"
                    >
                      {() => (
                        <React.Fragment>
                          <Timer.Hours />:
                          <Timer.Minutes />:
                          <Timer.Seconds />
                        </React.Fragment>
                      )}
                    </Timer>
                  </h1>
                </CardHeader>
                <CardSubtitle>
                  <p>It's almost time for bed</p>
                </CardSubtitle>
                <CardBody>
                  <Clock value={this.props.date} />
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          Notifications Places
                          <p className="category">
                            Click to view notifications
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tl")}
                            >
                              Top Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tc")}
                            >
                              Top Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("tr")}
                            >
                              Top Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="8">
                        <Row>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("bl")}
                            >
                              Bottom Left
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("bc")}
                            >
                              Bottom Center
                            </Button>
                          </Col>
                          <Col md="4">
                            <Button
                              block
                              color="primary"
                              onClick={() => this.notify("br")}
                            >
                              Bottom Right
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </>
    );
  }
}

export default Notifications;
