import React, { Component } from 'react';
import './Member.css';

class MemberDetail extends Component {
  render() {
    return (
      <div className="member-detail" onClick={() => this.props.click(this.props.name)}>
      	{this.props.name}
      	<br/>
      	{this.props.year}
      </div>
    );
  }
}

export default MemberDetail;