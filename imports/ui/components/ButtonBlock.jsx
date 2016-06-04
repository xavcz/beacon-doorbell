import React from 'react';
import { Button } from 'react-bootstrap';

export class ButtonBlock extends React.Component {
  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    
    return (
      <div className="well" style={wellStyles}>
        <Button bsStyle="warning" bsSize="large" block>RING ME</Button>
      </div>
    );
  }
}