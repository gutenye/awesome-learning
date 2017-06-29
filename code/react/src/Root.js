import React from 'react'

class Root extends React.Component {
  render() {
    const {props: {children}} = this
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Root
