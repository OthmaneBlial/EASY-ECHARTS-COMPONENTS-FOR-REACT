import React, { Component } from "react";
import PropTypes from "prop-types";
import echarts from "echarts";
import elementResizeEvent from "element-resize-event";

class EchartsPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {
        backgroundColor: this.props[this.props.theme],
        title: {
          text: this.props.title,
          x: this.props.titlePosition,
          top: 30,
          textStyle: {
            fontStyle: this.props.titleFontStyle,
            fontFamily: this.props.fontFamily,
            fontWeight: this.props.titleFontWeight,
            fontSize: this.props.titleFontSize
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          left: "center",
          top: 63,
          data: this.props.legend
        },
        toolbox: {
          feature: {
            saveAsImage: { show: this.props.saveAsImage, title: "SAVE" }
          }
        },
        series: [
          {
            name: "Imported Fruits",
            type: "pie",
            radius: this.props.doughnut ? ["50%", "60%"] : "50%",
            avoidLabelOverlap: false,
            center: ["50%", "55%"],
            data: this.props.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  }

  renderChart = () => {
    const chartDom = this.chart;
    const chart = echarts.getInstanceByDom(chartDom);
    const myChart = echarts.init(chartDom, "default");
    if (this.state.option && typeof this.state.option === "object") {
      myChart.setOption(this.state.option, false, false);
    }
    elementResizeEvent(chartDom, function() {
      myChart.resize();
    });
  };

  componentDidMount() {
    this.renderChart();
  }

  componentWillUpdate() {
    this.renderChart();
  }

  render() {
    return (
      <div
        ref={chart => (this.chart = chart)}
        style={this.props.style}
        className={this.props.className}
      />
    );
  }
}

EchartsPie.propTypes = {
  // general propTypes
  style: PropTypes.object,
  className: PropTypes.string,
  fontFamily: PropTypes.string,
  themeOne: PropTypes.string,
  themeTwo: PropTypes.string,
  themeThree: PropTypes.string,
  theme: PropTypes.string,

  // title propTypes
  title: PropTypes.string,
  titlePosition: PropTypes.string,
  titleFontSize: PropTypes.string,
  titleFontStyle: PropTypes.string,
  titleFontWeight: PropTypes.string,

  // tooltip propTypes
  tooltipType: PropTypes.string,
  tooltipBackgroundColor: PropTypes.string,

  // legend propTypes
  legendColor: PropTypes.string,
  legendFontSize: PropTypes.string,

  // toolbox propTypes
  saveAsImage: PropTypes.bool,

  // series propTypes
  doughnut: PropTypes.bool,
  legend: PropTypes.array,
  data: PropTypes.array
};

EchartsPie.defaultProps = {
  // general defaultProps
  style: {
    width: "100%",
    height: "100vh"
  },
  className: "",
  fontFamily: "sans-serif",
  themeOne: "#c9dbe2",
  themeTwo: "#e5edff",
  themeThree: "#f0ffe5",
  theme: "#fff",

  // title defaultProps
  title: "",
  titleFontSize: "18",
  titlePosition: "center",
  titleFontStyle: "normal",
  titleFontWeight: "bold",

  // legend defaultProps
  legendColor: "#000",
  legendFontSize: "11",

  // toolbox defaultProps
  saveAsImage: false,

  // series defaultProps
  doughnut: false,
  legend: [],
  data: []
};

export default EchartsPie;
