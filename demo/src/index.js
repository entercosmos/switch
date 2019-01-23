import React, {Component} from 'react'
import {render} from 'react-dom'
import {css} from 'emotion'
import {injectGlobal} from 'emotion'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

import Switch from '../../src'

class Example1 extends Component {

    state = {
        value: true
    }

    render() {
        return <div>
            <h2>
                Checkbox (true)
            </h2>
            <div
                className={css`
                    width: 200px;
                `}
            >
                <Switch
                    value={this.state.value}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Example2 extends Component {

    state = {
        value: false
    }

    render() {
        return <div>
            <h2>
                Checkbox (false)
            </h2>
            <div
                className={css`
                    width: 200px;
                `}
            >
                <Switch
                    value={this.state.value}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Example3 extends Component {

    state = {
        value: false
    }

    render() {
        return <div>
            <h2>
                Checkbox (disabled)
            </h2>
            <div
                className={css`
                    width: 200px;
                `}
            >
                <Switch
                    value={this.state.value}
                    disabled={true}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </div>
            <h3>
                State
            </h3>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        </div>
    }
}

class Demo extends React.Component {

    render() {

        return (
            <div>
                <h1>Switch Demo</h1>
                <Example1/>
                <Example2/>
                <Example3/>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
