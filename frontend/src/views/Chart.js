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
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import animations from "animations.js";
import { motion } from "framer-motion";
import { Typography, Slider } from "@material-ui/core";
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
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
    radialChart
} from "variables/charts.js";
import moment from "moment";
import PerfectScrollbar from "perfect-scrollbar";
const axios = require('axios').default;

class Chart extends React.Component {
  constructor(props) {
    super(props);

    let chartTemplate = chartExample1["data1"];
    console.log(chartTemplate);
    //chartTemplate.datasets.data = [9, 2, 1, 3, 4, 9, 9, 8, 9, 3, 1, 3];
    this.state = {
      bigChartData: "data1",
      renderedData: null,
      chartTemplate: chartExample1["data1"],
      mentalData: [4, 5, 8, 5, 4, 9, 9, 8, 9, 3, 1, 3],
      mentalLabels: [4, 5, 8, 5, 4, 9, 9, 8, 9, 3, 1, 3],
      physicalSlider: 5,
      sleepSlider: 5,
      chartData: null,
      sleepDate: '5:00',
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
          "DEC",
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
            //data: [4, 5, 8, 5, 4, 9, 9, 8, 9, 3, 1, 3],
          },
        ],
      },
    };
  }

  componentDidMount() {

    axios.get(`/api/networks`)
        .then(res => {

          const chartData = res.data[0].data;
          console.log(chartData);
          this.setState({ chartData });

         const data2 = {
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
              "DEC",
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
                data: chartData,
              },
            ],
          };
          this.setState({renderedData: data2});
        })


  }

  render() {
    return (
      <>
        <Col xs="10">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <h5 className="card-category">Physical Health</h5>
                  <CardTitle tag="h2">7.92</CardTitle>
                </Col>
                <Col sm="6">
                  <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                  >
                    <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: this.state.bigChartData === "data1",
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
                          active: this.state.bigChartData === "data3",
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
                { this.state.renderedData !== null &&
                <Line
                    data={this.state.renderedData}
                    options={chartExample1.options}
                />}
              </div>
            </CardBody>
          </Card>
        </Col>

      </>
    );
  }
}

export default Chart;
