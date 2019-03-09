# EASY ECHARTS COMPONENTS FOR REACT

Easy to use ECharts components for React.


[ECharts](https://github.com/ecomfe/echarts) is a powerful, captivating and charming data visualization tool, way better than D3.js.


### Installation

```bash
npm install easy-echarts-components-for-react --save
```




### [Check out the Demos](http://othmaneblial.github.io/easy-echarts-components-for-react/)




### Get started with an easy, non verbose component, which has basic props to have a good looking line, bar or area echart component.

```js
import React from 'react';
import { EchartsLine } from 'easy-echarts-components-for-react';


class App extends React.Component {

 render() {
      return (
        <EchartsLine
            style={{height: '40vh', width: '100%'}}
            theme= 'themeOne'
            title= 'Most used Hashtags on Instagram'
            xAxis={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
            seriesNames={['#love', '#instagood', '#photooftheday', '#fashion', '#beautiful'],}
            seriesData={[ [ 3463, 31898, 96, 10049, 34967, 15012, 1701 ],
                          [ 8135, 39451, 20651, 22599, 14753, 44823, 32469 ],
                          [ 28401, 34530, 15612, 43372, 49021, 25559, 20051 ],
                          [ 28588, 36861, 29559, 7216, 21830, 38563, 2336 ],
                          [ 2881, 1389, 19633, 7760, 6405, 1946, 28197 ] ]}
            seriesType='line'
            /// other options for seriesType are: linestack, bar, barStack, area, areaStack
            />
         );
   }
}

```


### An example of a echarts pie component

```js
import React from 'react';
import { EchartsPie } from 'easy-echarts-components-for-react';


class App extends React.Component {

 render() {
      return (
        <EchartsPie
            style={{height: '40vh', width: '100%'}}
            theme= 'themeOne'
            title= 'Imported Fruits'
            legend={['Apples','Apricots','Mangos','Nectarines','Oranges']}
            data={[
                {value:3265, name:'Apples'},
                {value:2524, name:'Apricots'},
                {value:1021, name:'Mangos'},
                {value:1365, name:'Nectarines'},
                {value:5564, name:'Oranges'}
            ]}
            // add a `doughnut={true}` if you want a pie doughnut
            />
         );
   }
}

```

## These ECHARTS components are very customizable, because they have a lot of props to tweak
### For the bar, barStack, line, lineStack, area, and areaStack types


Props | Type | Default Value
---------- | ---------- | ---------
style | object | `{ width: '100%', height: '100vh'}`
className | string | empty string
fontFamily | string | sans-serif
theme | string | #fff
title | string | empty string
titleFontSize | string | 15
titlePosition | string | center
titleFontStyle | string | normal
titleFontWeight | string | bold
tooltipType | string | cross
tooltipBackgroundColor | string | #b7aeaa
legendColor | string | #000
legendFontSize | string | 11
dataZoom | bool | true
saveAsImage | bool | false
gridLeft | string | 6%
gridRight | string | 6%
gridBottom | string | 14%
gridContainLabel | bool | true
xAxis | array | empty array
xAxisName | string | empty string
xAxisNameLocation | string | middle
xAxisNameGap | string | 32
seriesType | string | line
seriesNames | array | empty array
seriesData | array | empty array

### for the pie and the pie doughunt types


Props | Type | Default Value
---------- | ---------- | ---------
style | object | `{ width: '100%', height: '100vh'}`
className | string | empty string
fontFamily | string | sans-serif
theme | string | #fff
title | string | empty string
titleFontSize | string | 15
titlePosition | string | center
titleFontStyle | string | normal
titleFontWeight | string | bold
legendColor | string | #000
legendFontSize | string | 11
saveAsImage | string | false
doughnut | string | false
legend | array | empty array
data | array | empty array




### Development
Want to run demos locally

```bash
git clone https://github.com/OthmaneBlial/easy-echarts-components-for-react/
npm install
npm run start
open http://localhost:3000
```
