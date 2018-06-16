import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <ListGroup flush>
        <ListGroupItem>
          <ListGroupItemHeading onClick={this.toggle}>
            question 1
          </ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse} ref="q1">
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>question 2</ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse}>
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>question 3</ListGroupItemHeading>
          <Collapse isOpen={!this.state.collapse}>
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Example;
