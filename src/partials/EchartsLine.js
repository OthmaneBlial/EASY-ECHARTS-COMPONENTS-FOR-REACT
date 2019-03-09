import React, { Component } from "react";
import PropTypes from "prop-types";
import echarts from "echarts";
import elementResizeEvent from "element-resize-event";

class EchartsLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option: {
        backgroundColor: this.props[this.props.theme],
        title: {
          text: this.props.title,
          x: this.props.titlePosition,
          top: 5,
          textStyle: {
            fontStyle: this.props.titleFontStyle,
            fontFamily: this.props.fontFamily,
            fontWeight: this.props.titleFontWeight,
            fontSize: this.props.titleFontSize
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: this.props.tooltipType,
            label: {
              backgroundColor: this.props.tooltipBackgroundColor
            }
          }
        },
        legend: {
          data: this.props.seriesNames,
          top: 37,
          textStyle: {
            color: this.props.legendColor,
            fontSize: this.props.legendFontSize,
            fontFamily: this.props.fontFamily
          }
        },
        dataZoom: {
          show: this.props.dataZoom
        },
        toolbox: {
          feature: {
            saveAsImage: { show: this.props.saveAsImage, title: "SAVE" }
          }
        },
        grid: {
          left: this.props.gridLeft,
          right: this.props.gridRight,
          bottom: this.props.gridBottom,
          containLabel: this.props.gridContainLabel
        },
        xAxis: [
          {
            type: "category",
            boundaryGap:
              this.props.seriesType === "bar" ||
              this.props.seriesType === "barStack"
                ? true
                : false,
            data: this.props.xAxis,
            name: this.props.xAxisName,
            nameLocation: this.props.xAxisNameLocation,
            nameGap: this.props.xAxisNameGap
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: this.switchOnEchartsLineType(this.props.seriesData)
      }
    };
  }

  switchOnEchartsLineType = seriesData => {
    switch (this.props.seriesType) {
      case "areaStack":
        return this.props.seriesNames.map((seriesName, index) =>
          Object.assign({
            name: seriesName,
            type: "line",
            stack: "stackConnector",
            areaStyle: { normal: {} },
            data: seriesData[index]
          })
        );
        break;
      case "area":
        return this.props.seriesNames.map((seriesName, index) =>
          Object.assign({
            name: seriesName,
            type: "line",
            areaStyle: { normal: {} },
            data: seriesData[index]
          })
        );
        break;
      case "line":
        return this.props.seriesNames.map((seriesName, index) =>
          Object.assign({
            name: seriesName,
            type: "line",
            data: seriesData[index]
          })
        );
        break;
      case "lineStack":
        return this.props.seriesNames.map((seriesName, index) =>
          Object.assign({
            name: seriesName,
            type: "line",
            stack: "stackConnector",
            data: seriesData[index]
          })
        );
        break;
      case "bar":
        return this.props.seriesNames.map((seriesName, index) =>
          Object.assign({
            name: seriesName,
            type: "bar",
            data: seriesData[index]
          })
        );
        break;
      case "barStack":
        return this.props.seriesNames.map((seriesName, index) =>
          Object.assign({
            name: seriesName,
            type: "bar",
            stack: "stackConnector",
            data: seriesData[index]
          })
        );
        break;

      default:
        return this.props.seriesNames.map((seriesName, index) =>
          Object.assign({
            name: seriesName,
            type: "line",
            data: seriesData[index]
          })
        );
        break;
    }
  };

  renderChart = () => {
    const chartDom = this.chart;
    const chart = echarts.getInstanceByDom(chartDom);
    const myChart = echarts.init(chartDom, "default");
    myChart.setOption(this.state.option, true, true);
    elementResizeEvent(chartDom, function() {
      myChart.resize();
    });
  };

  componentDidMount() {
    this.renderChart();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState(prevState => ({
        option: {
          ...prevState.option,
          series: this.switchOnEchartsLineType(nextProps.seriesData)
        }
      }));
    }
  }

  componentDidUpdate() {
    this.renderChart();
  }

  render() {
    console.log(this.props);
    console.log(this.state.option.series[0].data);
    return (
      <div
        ref={chart => (this.chart = chart)}
        style={this.props.style}
        className={this.props.className}
      />
    );
  }
}

EchartsLine.propTypes = {
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

  // dataZoom propTypes
  dataZoom: PropTypes.bool,

  // toolbox propTypes
  saveAsImage: PropTypes.bool,

  // grid propTypes
  gridLeft: PropTypes.string,
  gridRight: PropTypes.string,
  gridBottom: PropTypes.string,
  gridContainLabel: PropTypes.bool,

  // xAxis propTypes
  xAxis: PropTypes.array,
  xAxisName: PropTypes.string,
  xAxisNameLocation: PropTypes.string,
  xAxisNameGap: PropTypes.number,

  // series propTypes
  seriesType: PropTypes.string,
  seriesNames: PropTypes.array,
  seriesData: PropTypes.array
};

EchartsLine.defaultProps = {
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
  titleFontSize: "15",
  titlePosition: "center",
  titleFontStyle: "normal",
  titleFontWeight: "bold",

  // tooltip defaultProps
  tooltipType: "cross",
  tooltipBackgroundColor: "#b7aeaa",

  // legend defaultProps
  legendColor: "#000",
  legendFontSize: "11",

  // dataZoom defaultProps
  dataZoom: true,

  // toolbox defaultProps
  saveAsImage: false,

  // grid defaultProps
  gridLeft: "6%",
  gridRight: "6%",
  gridBottom: "14%",
  gridContainLabel: true,

  // xAxis defaultProps
  xAxis: [],
  xAxisName: "",
  xAxisNameLocation: "middle",
  xAxisNameGap: 32,

  // series defaultProps
  seriesType: "line",
  seriesNames: [],
  seriesData: []
};

export default EchartsLine;
