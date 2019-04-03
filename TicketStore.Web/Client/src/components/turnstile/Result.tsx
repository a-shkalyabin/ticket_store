import React, { Component } from 'react';

export class Result extends Component<any, any> {
  render() {
    const result = this.props.result;

    if (result === undefined) {
      return null;
    }
    return (
      <li>
      {result.codeResult.code} [{result.codeResult.format}]
      </li>
    );
  }
}
