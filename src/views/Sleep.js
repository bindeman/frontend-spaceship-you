import React from "react";
import NotificationAlert from "react-notification-alert";
import animations from "../animations";
import { motion } from "framer-motion";
import Timer from "react-compound-timer";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { Line, Bar } from "react-chartjs-2";
import "../ourStyles.scss";

import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import { chartExample3 } from "variables/charts.js";

class Sleep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleeping: false,
      sleepTime: new Date("2020-09-13T06:30:00Z"),
      wakeTime: new Date("2020-09-13T14:30:00Z"),
    };
  }

  notify = () => {
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
      place: "tc",
      message: (
        <div>
          <b>Time to sleep</b> - it's almost time to sleep. You have 1 hour
          before bedtime.
        </div>
      ),
      type: "info",
      icon: "tim-icons icon-watch-time",
      autoDismiss: 7,
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  toggleSleep(event) {
    const sleeping = this.state.sleeping;
    this.setState({ sleeping: !sleeping });
  }

  render() {
    console.log(chartExample3.data);
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
            <Col xs="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-time-alarm text-primary" />{" "}
                    Sleep & Wake Hours
                  </CardTitle>
                </CardHeader>
                <CardBody style={{ color: "white" }}>
                  <Row className="alarm-display">
                    <Col xs="6">
                      <p>Bedtime</p>
                      <div className="sleep">
                        {this.state.sleepTime.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </div>
                    </Col>
                    <Col xs="6">
                      <p>Wake-Up</p>
                      <div className="wake">
                        {this.state.wakeTime.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </div>
                    </Col>
                  </Row>
                  <Timer
                    initialTime={3610000}
                    lastUnit="h"
                    direction="backward"
                    checkpoints={[
                      { time: 3600000, callback: () => this.notify() },
                    ]}
                    className="time-till-bed"
                  >
                    {({ timerState }) => (
                      <div className="time-till-bed">
                        <strong>
                          <Timer.Hours />
                        </strong>{" "}
                        hour(s) and{" "}
                        <strong>
                          <Timer.Minutes />
                        </strong>{" "}
                        minute(s) till bedtime
                      </div>
                    )}
                  </Timer>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <strong>Can't sleep?</strong>
                  </CardTitle>
                </CardHeader>
                <CardBody style={{ paddingTop: 0 }}>
                  <div
                    className="chart-area"
                    style={{ margin: "0px 30px", width: "auto" }}
                  >
                    <ul>
                      <li style={{ marginBottom: 10 }}>
                        <a href="https://www.youtube.com/watch?v=bn9F19Hi1Lk">
                          <strong>
                            Try putting on some ocean sounds to help you fall
                            asleep.
                          </strong>
                        </a>
                      </li>
                      <li style={{ marginBottom: 10 }}>
                        Wake up! Walk around. Read a book. Do something around
                        your place. Then come back.
                      </li>
                    </ul>
                    <blockquote className="blockquote text-center">
                      <p>
                        This is where you go to <strong>sleep</strong>, not to
                        linger, worrying about why you can't.
                      </p>
                      <footer className="blockquote-footer">CGP Grey</footer>
                    </blockquote>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <Button
                block
                color="primary"
                onClick={() => this.toggleSleep()}
                style={{ marginBottom: 30 }}
              >
                {!this.state.sleeping ? "I'm going to sleep" : "I'm waking up"}
              </Button>
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Hours Slept</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-time-alarm text-primary" />{" "}
                    <strong>7.24</strong> hours on average this week
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
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

export default Sleep;
