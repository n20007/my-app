import React from 'react'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { item: [], gender: [], name: [] }
    this.URI = 'https://api.genderize.io/?name='
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({ item: e.target.value })
  }

  handleSubmit (e) {
    this.setState({ name: this.state.item + 'の性別' })
    const URI = this.URI + this.state.item + '&country_id=JP'
    window
      .fetch(URI)
      .then(res => res.json())
      .then(json => this.setState({ gender: json.gender }))
  }

  render () {
    console.log(this.state)
    return (
      <body>
        <div id='center'>
          <h1>名前性別判定</h1>
          <label>
            名前:
            <input type='text' onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit}>の性別</button>
          <div>
            <h2>{this.state.name}</h2>
            {this.state.gender}
          </div>
          <Imagegender gender={this.state.gender} />
        </div>
      </body>
    )
  }
}

const Imagegender = props => {
  console.log(props.gender)
  if (props.gender === 'female') {
    return (
      <img
        src='https://3.bp.blogspot.com/-mq0hdaR-ZcY/XG4GXM_RphI/AAAAAAABRqw/8tlGYKiJOXQTZnkr1UWBoGmPtDIBivEzgCLcBGAs/s400/ahiruguchi_woman.png'
        alt=''
      />
    )
  } else if (props.gender === 'male') {
    return (
      <img
        src='https://4.bp.blogspot.com/-Hbl_buIRu5o/XG4GXOwvXLI/AAAAAAABRq0/hEWfV0FE5IEG66wOidqBlI5IA0e28QFGgCLcBGAs/s400/ahiruguchi_man.png'
        alt=''
      />
    )
  } else {
    return <></>
  }
}

export default App
