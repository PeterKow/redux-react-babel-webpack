import React from 'react'
import { Input } from 'react-bootstrap';

export default  React.createClass({
  getInitialState() {
    return {
      value: this.props.location
    };
  },

  propType: {
    location: React.PropTypes.string
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
        placeholder="Location eg. London"
        //label="Working example with validation"
        //help="Validation is based on string length."
        hasFeedback
        ref="input"
        groupClassName="group-class"
        labelClassName="label-class"
        onChange={this.handleChange} />
    );
  }
});