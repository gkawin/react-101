import React from 'react'
import ReactDOM from 'react-dom'

class Helloworld extends React.Component {
  render () {
    return (<div>Hello world</div>)
  }
}

ReactDOM.render(<Helloworld />, document.getElementById('app'))
