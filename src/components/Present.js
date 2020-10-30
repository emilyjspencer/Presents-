import React, { Component } from 'react';

class Present extends Component {

    constructor(props) {
        super(props)
        this.state = {person: '', present: ''};
    }

    render() {
      return (
        <div>
            Present
        </div>
    )
  }
}

export default Present;