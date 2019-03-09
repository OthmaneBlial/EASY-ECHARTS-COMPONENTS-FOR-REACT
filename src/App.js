import React, { Component } from 'react';
import EchartsLine from './partials/EchartsLine'
import EchartsPie from './partials/EchartsPie'
import './App.css';
import { lineCode, lineStackCode, barCode, barStackCode, areaCode, areaStackCode, pieCode, pieDoughuntCode } from './codeSamples';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            seriesData: [[3463, 31898, 96, 10049, 34967, 15012, 1701],
            [8135, 39451, 20651, 22599, 14753, 44823, 32469],
            [28401, 34530, 15612, 43372, 49021, 25559, 20051],
            [28588, 36861, 29559, 7216, 21830, 38563, 2336],
            [2881, 1389, 19633, 7760, 6405, 1946, 28197]],
            seriesNames: ['#love', '#instagood', '#photooftheday', '#fashion', '#beautiful'],
            xAxis: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            showCodeArr: []
        }

    }

    randomize = () => {
        this.setState({ seriesData: this.state.seriesNames.map((seriesName, index) => Array(7).fill().map(() => Math.floor(Math.random() * 50000))) });
    }

    onShowCode = (type) => {
        if (!this.state.showCodeArr.includes(type)) {
            this.setState({ showCodeArr: [...this.state.showCodeArr, type] })
        }
    }

    onHideCode = (type) => {
        if (this.state.showCodeArr.includes(type)) {
            this.setState({ showCodeArr: this.state.showCodeArr.filter((item) => item !== type) })
        }
    }

    render() {


        return (
            <div className='App'>
                <div className='container is-fluid'>
                    <div className='columns big-title'>
                        <div className='column is-12'>
                            <h1 className='title is-2'>EASY ECHARTS COMPONENTS FOR REACT</h1>
                            <a className="button is-info">
                                <span className="icon is-small">
                                    <i className="fa fa-star"></i>
                                </span>
                                <span>Star me on Github</span>
                            </a>
                        </div>
                    </div>
                    <div className='columns'>
                        <div className='column is-12'>
                            <a className='button is-light randomize is-fullwidth' onClick={() => this.randomize()}>Randomize</a>
                        </div>
                    </div>


                    {/* ////// LINE ////// */}
                    {/* ECHARTS LINE */}
                    <div className='columns'>
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Line</h1>
                                <EchartsLine
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Most used Hashtags on Instagram'
                                    xAxis={this.state.xAxis}
                                    seriesNames={this.state.seriesNames}
                                    seriesData={this.state.seriesData}
                                    seriesType='line'
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('lineCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('lineCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('lineCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('lineCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('lineCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {lineCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>


                        {/* ECHARTS LINE STACK */}
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Line Stack</h1>
                                <EchartsLine
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Most used Hashtags on Instagram'
                                    xAxis={this.state.xAxis}
                                    seriesNames={this.state.seriesNames}
                                    seriesData={this.state.seriesData}
                                    seriesType='lineStack'
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('lineStackCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('lineStackCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('lineStackCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('lineStackCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('lineStackCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {lineStackCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>
                    </div>

                    {/* ////// BAR ////// */}
                    <div className='columns'>
                        {/* ECHARTS BAR */}
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Bar</h1>
                                <EchartsLine
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Most used Hashtags on Instagram'
                                    xAxis={this.state.xAxis}
                                    seriesNames={this.state.seriesNames}
                                    seriesData={this.state.seriesData}
                                    seriesType='bar'
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('barCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('barCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('barCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('barCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('barCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {barCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>

                        {/* ECHARTS BAR STACK */}
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Bar Stack</h1>
                                <EchartsLine
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Most used Hashtags on Instagram'
                                    xAxis={this.state.xAxis}
                                    seriesNames={this.state.seriesNames}
                                    seriesData={this.state.seriesData}
                                    seriesType='barStack'
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('barStackCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('barStackCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('barStackCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('barStackCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('barStackCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {barStackCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>
                    </div>


                    {/* ////// AREA ////// */}
                    <div className='columns'>
                        {/* ECHARTS AREA */}
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Area</h1>
                                <EchartsLine
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Most used Hashtags on Instagram'
                                    xAxis={this.state.xAxis}
                                    seriesNames={this.state.seriesNames}
                                    seriesData={this.state.seriesData}
                                    seriesType='area'
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('areaCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('areaCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('areaCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('areaCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('areaCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {areaCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>

                        {/* ECHARTS AREA STACK */}
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Area Stack</h1>
                                <EchartsLine
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Most used Hashtags on Instagram'
                                    xAxis={this.state.xAxis}
                                    seriesNames={this.state.seriesNames}
                                    seriesData={this.state.seriesData}
                                    seriesType='areaStack'
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('areaStackCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('areaStackCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('areaStackCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('areaStackCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('areaStackCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {areaStackCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>
                    </div>

                    {/* ////// PIE ////// */}
                    <div className='columns'>
                        {/* PIE */}
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Pie</h1>
                                <EchartsPie
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Imported Fruits'
                                    legend={['Apples', 'Apricots', 'Mangos', 'Nectarines', 'Oranges']}
                                    data={[
                                        { value: 3265, name: 'Apples' },
                                        { value: 2524, name: 'Apricots' },
                                        { value: 1021, name: 'Mangos' },
                                        { value: 1365, name: 'Nectarines' },
                                        { value: 5564, name: 'Oranges' }
                                    ]}
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('pieCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('pieCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('pieCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('pieCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('pieCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {pieCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>

                        {/* PIE doughnut */}
                        <div className='column is-6'>
                            <div className='echarts-component'>
                                <h1 className='title is-3'>Echarts Pie doughnut</h1>
                                <EchartsPie
                                    style={{ height: '40vh', width: '100%' }}
                                    theme='themeOne'
                                    title='Imported Fruits'
                                    legend={['Apples', 'Apricots', 'Mangos', 'Nectarines', 'Oranges']}
                                    data={[
                                        { value: 3265, name: 'Apples' },
                                        { value: 2524, name: 'Apricots' },
                                        { value: 1021, name: 'Mangos' },
                                        { value: 1365, name: 'Nectarines' },
                                        { value: 5564, name: 'Oranges' }
                                    ]}
                                    doughnut={true}
                                    fontFamily='Cabin Condensed'
                                />
                                <div className='control-buttons'>
                                    {(!this.state.showCodeArr.includes('pieDoughuntCode') &&
                                        <a className='button is-dark is-large' onClick={() => this.onShowCode('pieDoughuntCode')}>Show code</a>)}
                                    {(this.state.showCodeArr.includes('pieDoughuntCode') &&
                                        <a className='button is-light is-large' onClick={() => this.onHideCode('pieDoughuntCode')}>Hide code</a>)}
                                </div>
                                {(this.state.showCodeArr.includes('pieDoughuntCode')) && <div className='show-code'>
                                    <pre>
                                        <code>
                                            {pieDoughuntCode}
                                        </code>
                                    </pre>
                                </div>}
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}

export default App;
