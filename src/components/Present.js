import React, { Component } from 'react';

import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';

import './Present.css';

class Present extends Component {

    constructor(props) {
        super(props)
        this.state = {person: '', present: ''};
    }

    render() {
      return (
          <>
        <div className="presentform">
            
            <Form>
               <FormGroup className="formgroup">
                   <FormLabel>Name:       </FormLabel>
                   <FormControl id="person" placeholder="Enter a name" onChange={event => this.setState({ person: event.target.value })} className="name" />
                   <br />
                   <br />
                   <FormLabel>Gift:          </FormLabel>
                   <FormControl id="gift" placeholder="Enter a gift" onChange={event => this.setState({ present: event.target.value })} className="present" />
               </FormGroup>
           </Form>
           <Button 
             id="remove-button"
             onClick={() => this.props.removeItem(this.props.present.id)}
             >Remove Gift
             </Button>
           
        </div>
      
        </>
  
    )
  }
}



export default Present;