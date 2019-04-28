import React, {Component} from 'react'
import {render} from 'react-dom'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'
import {css} from 'emotion'
import {injectGlobal} from 'emotion'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import Switch from '../../src'

class Example1 extends Component {

    state = {
        value: true
    }

    render() {
        return <div>
            <Heading>
                Switch that's switched on
            </Heading>
            <Box>
                <Switch
                    value={this.state.value}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example2 extends Component {

    state = {
        value: false
    }

    render() {
        return <div>
            <Heading>
                Switch that's switched off
            </Heading>
            <Box>
                <Switch
                    value={this.state.value}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Example3 extends Component {

    state = {
        value: false
    }

    render() {
        return <div>
            <Heading>
                Switch that's switched off and disabled
            </Heading>
            <Box>
                <Switch
                    value={this.state.value}
                    disabled={true}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
        </div>
    }
}

class Demo extends React.Component {

    render() {

        return (
            <Canvas>
                <Example1/>
                <Example2/>
                <Example3/>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
