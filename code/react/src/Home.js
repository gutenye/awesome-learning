import './Home.scss'
import React from 'react'

const quotes = [
  {id: '1', title: 'Facebook'},
  {id: '2', title: 'Google'},
]

class Root extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='header'>
          header
        </div>
        <div className='body'>
          {quotes.map(({id, title}) =>
          <div key={id}>{title}</div>
          )}
        </div>
        <div className='footer'>
          footer3
        </div>
      </div>
    )
  }
}

export default Root
