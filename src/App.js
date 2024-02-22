import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // Q: response 데이터 값
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users })
      })
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => {
          return (
            <div key={monster.id}>
              <div>{monster.name}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
