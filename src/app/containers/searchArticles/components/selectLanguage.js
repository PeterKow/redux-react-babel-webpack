import React from 'react'
import { Input } from 'react-bootstrap'
import _ from 'lodash'

const values = ['ABAP', "C", "C++", "C#", "Java", "JavaScript", "Objective-C", "PHP", "Python", "Swift", "SQL", "Ruby"];

export default  React.createClass({
  getInitialState() {
    return {
      value: values[_.findIndex(values, (language) => { return language === this.props.defaultLanguage; } )]
    };
  },

  propTypes: {
    defaultLanguage: React.PropTypes.string,
    label: React.PropTypes.string
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  },

  getValues(value, index){
    return (<option key={index} value={value}>{value}</option>);
  },

  render() {
    return (
      <Input ref="input" type="select" label={this.props.label} placeholder="Select" onChange={this.handleChange}>
        <option value="select">{this.state.value}</option>
        {values.map(this.getValues, this)}
      </Input>
    );
  }
});

