import React from 'react'
import { Input } from 'react-bootstrap';

export default  React.createClass({
  getInitialState() {
    return {
      value: this.props.keywords
    };
  },

  propTypes: {
    keywords: React.PropTypes.string
  },

  validationState() {
    let length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  },

  render() {
    return (
      <Input
        type="text"
        value={this.state.value}
        placeholder="Your main skills eg. AngularJS, Bootstrap"
        //label="Working example with validation"
        //help="Validation is based on string length."
        //bsStyle={this.validationState()}
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        onChange={this.handleChange} />
    );
  }
});