import React, { Component } from 'react';

import { Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap';

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
               <FormGroup>
                   <FormLabel>Name</FormLabel>
                   <FormControl onChange={event => this.setState({ person: event.target.value })} className="name" />
                   <br />
                   <FormLabel>Gift</FormLabel>
                   <FormControl onChange={event => this.setState({ present: event.target.value })} className="present" />
               </FormGroup>
           </Form>
           <Button 
             className="remove-button"
             onClick={() => this.props.removeItem(this.props.present.id)}
             >Remove Gift
             </Button>
           
        </div>
      
        </>
  
    )
  }
}



export default Present;