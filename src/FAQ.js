import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";

const FAQGroup2 = () => <div>abba</div>;

class FAQGroup extends Component {
  constructor(props) {
    super(props);
  }

  groupToggle = () => {
    alert("group toggle");
    //React.Children.forEach(this.childrenWithProps, child => child.doCollapse());
    //this.childrenWithProps.map(child => child.toggle);
  };

  setRef = node => {
    console.log("setRef");
    this.a = node;
  };

  renderChildren = () => {
    this.childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        notifyToggle: this.groupToggle,
        ref: this.setRef
      });
    });
    return this.props.children;
  };

  toggle = event => {
    console.log(event.target);
  };

  render = () => {
    return <div onClick={this.toggle}>{this.renderChildren()}</div>;
  };
}

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: props.collapsed };
  }

  toggle = () => {
    if (this.props.notifyToggle) this.props.notifyToggle();
    this.setState({ collapse: !this.state.collapse });
  };

  doCollapse = () => {
    this.setState({ collapse: true });
  };

  render() {
    return (
      <div className={`accordeon`}>
        <h2
          color="primary"
          className={`${!this.state.collapse ? "accordeon__uncollapsed" : ""}`}
        >
          {this.props.title}
        </h2>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>{this.props.children}</CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export { FAQGroup, FAQGroup2 };
export default FAQ;
