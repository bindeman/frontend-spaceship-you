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
// nodejs library that concatenates classes
import classNames from "classnames";
import Timer from "react-compound-timer";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import animations from "animations.js";
import { motion } from "framer-motion";
import { Typography, Slider } from "@material-ui/core";
import Charts from 'chart.js'
// reactstrap components
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
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    let chartTemplate = chartExample1['data1'];
    console.log(chartTemplate);
    //chartTemplate.datasets.data = [9, 2, 1, 3, 4, 9, 9, 8, 9, 3, 1, 3];
    this.state = {
      bigChartData: "data1",
      chartTemplate: chartExample1['data1'],
      mentalData: [4, 5, 8, 5, 4, 9, 9, 8, 9, 3, 1, 3],
      mentalLabels: [4, 5, 8, 5, 4, 9, 9, 8, 9, 3, 1, 3],
      physicalSlider: 5,
      mentalSlider: 5,
      data2: {
          labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
          ],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              backgroundColor: "none",
              borderColor: "#1f8ef1",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#1f8ef1",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#1f8ef1",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [4, 5, 8, 5, 4, 9, 9, 8, 9, 3, 1, 3]
            }
          ]
        },



    };
  }



  onChangeMental = (event, newValue) => {
    this.setState({ mentalSlider: newValue });
  };

  onChangePhysical = (event, newValue) => {
    this.setState({ physicalSlider: newValue });
  };

  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };



  render() {
    return (
      <>
        <motion.div
            initial="initial" animate="in" exit="out" variants={animations.pageVariants} transition={animations.pageTransition}
            className="content">





          <Row>
            <Col xs="12">
              <div class={"hero-header"}>

              <img className="hero-logo"src="https://i.ibb.co/Ms0rkCS/Screen-Shot-2020-09-12-at-11-49-29-AM.png"></img>
              <h2>Welcome to your Spaceship</h2>
                <p>Quarantine can managing life harder. Stay productive with Spaceship You to keep track of Sleep, work, and relaxation through our four sections. Based of the YouTube video by CGP Grey.</p>
              <Button
                  block
                  color="primary"
                  onClick={() => this.notify("tc")}
              >
                Watch the video
              </Button>
                </div>
            </Col>
          </Row>








          {/*<Row>*/}
          {/*<Col xs="12">*/}
          {/*  <Card className="card-chart">*/}

          {/*    <CardBody>*/}
          {/*      <Row>*/}
          {/*      <Col xs="3">*/}
          {/*        <CardHeader>*/}
          {/*          <h5 className="card-category">Wellness</h5>*/}


          {/*        <CardTitle tag="h2">*/}
          {/*          How are you feeling today?*/}
          {/*        </CardTitle>*/}
          {/*          <p>Mark the way you are feeling with these sliders. Keep track of the way you're feeling through these sliders.</p>*/}
          {/*        </CardHeader>*/}
          {/*      </Col>*/}
          {/*        <Col xs="3">*/}

          {/*        </Col>*/}


          {/*      </Row>*/}
          {/*      <Row>*/}
          {/*        <Col xs="6">*/}
          {/*          <Typography id="discrete-slider" gutterBottom>*/}
          {/*            Physical Wellness*/}
          {/*          </Typography>*/}
          {/*          <Slider*/}
          {/*              defaultValue={5}*/}
          {/*              orientation="vertical"*/}
          {/*              aria-labelledby="discrete-slider"*/}
          {/*              valueLabelDisplay="auto"*/}
          {/*              step={1}*/}
          {/*              marks*/}
          {/*              min={1}*/}
          {/*              max={10}*/}
          {/*          />*/}


          {/*          <Typography id="discrete-slider" gutterBottom>*/}
          {/*            Mental Wellness*/}
          {/*          </Typography>*/}
          {/*          <Slider*/}
          {/*              defaultValue={5}*/}
          {/*              aria-labelledby="discrete-slider"*/}
          {/*              orientation="vertical"*/}
          {/*              valueLabelDisplay="auto"*/}
          {/*              step={1}*/}
          {/*              marks*/}
          {/*              min={1}*/}
          {/*              max={10}*/}
          {/*          />*/}

          {/*        </Col>*/}

          {/*      </Row>*/}
          {/*    </CardBody>*/}
          {/*  </Card>*/}
          {/*</Col>*/}
          {/*</Row>*/}



          <Row>



            <Col lg="1">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    {this.state.mentalSlider}
                  </CardTitle>
                  <h5 style={{fontSize: '10.5px', marginTop: '-12px', marginBottom: '20px'}} className="card-category">Mental</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col ws={"1"}>
                      <Slider
                          defaultValue={5}
                          value={this.state.mentalSlider}
                          onChange={this.onChangeMental}
                          aria-labelledby="discrete-slider"
                          orientation="vertical"
                          valueLabelDisplay="auto"
                          step={1}
                          marks
                          min={1}
                          max={10}
                          style={{height: '220px', margin: "auto", display: 'block'}}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xs="10">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">

                      <h5 className="card-category">
                        Physical Health
                      </h5>
                      <CardTitle tag="h2">
                        7.92
                      </CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                      >
                        <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data1"
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                              defaultChecked
                              className="d-none"
                              name="options"
                              type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Physical
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data3"
                            })}
                            onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                              className="d-none"
                              name="options"
                              type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Mental
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                        data={this.state.chartTemplate}
                        options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>



            <Col lg="1">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    {this.state.physicalSlider}
                  </CardTitle>
                  <h5 style={{fontSize: '10.5px', marginTop: '-12px', marginBottom: '20px'}} className="card-category">Physical</h5>

                </CardHeader>
                <CardBody>
                  <Row>
                    <Col ws={"1"}>
                      <Slider
                          defaultValue={5}
                          value={this.state.physicalSlider}
                          onChange={this.onChangePhysical}
                          aria-labelledby="discrete-slider"
                          orientation="vertical"
                          valueLabelDisplay="auto"
                          step={1}
                          marks
                          min={1}
                          max={10}
                          style={{height: '220px', margin: "auto", display: "block"}}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">

                    <h5 className="card-category">
                      Mental Health
                    </h5>
                    <CardTitle tag="h2">
                      <Timer
                          initialTime={ 9000 * 60 * 48 + 5000}
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
                    </CardTitle>
                  </Col>
                  <Col sm="6">

                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>




          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Time Spent Working Out</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-user-run text-info" />{" "}
                    263 minutes
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Hours Slept</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-time-alarm text-primary" />{" "}
                    7.24 hours
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
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Completed Tasks</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-send text-success" /> 12,100K
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample4.data}
                      options={chartExample4.options}
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

export default Dashboard;
