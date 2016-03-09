import React from 'react';

export default class Howdy extends React.Component {
  render() {
    let {name} = this.props;

    return (<b>Howdy, {name}! This is pretty cool.</b>);
  }
}