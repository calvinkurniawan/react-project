import React, { Component } from 'react';
import MemberDetail from './MemberDetail.js';
import './Member.css';

function PopUp(props){
	return <div style={{ position:'fixed' , top:'0' , bottom:'0' , left:'0' , right:'0' , backgroundColor:'rgba(0,0,0,.5)' , textAlign:'center' }}>
		<div style={{ backgroundColor:'white' , display:'inline-block' , padding:'20px' , marginTop:'45vh'}}>
			<span className="exitBtn" onClick={() => props.click(props.message)}>
				{'\u274C'}
			</span>
			<br/>
			{props.message}
		</div>
	</div>;
}

class Member extends Component {
	clickHandler(title,event) {
		var status_temp = !this.state.status;
		this.setState({ message : title , status:status_temp });
		//console.log(status_temp);
	}

	constructor(props){
		super(props)
		this.state = {name: [] , message:'-' , status:false}
	}

	componentDidMount() {    
	  var that = this;
	  var url = 'https://facebook.github.io/react-native/movies.json'

	  fetch(url)
	  .then(function(response) {
	    if (response.status >= 400) {
	      throw new Error("Bad response from server");
	    }
	    return response.json();
	  })
	  .then(function(data) {
	    that.setState({ name: data.movies });
	  });
	}

	render() {
		const person = this.state.name.map((item,i) => {
			return <MemberDetail name={item.title} year={item.releaseYear} key= {i} click = {this.clickHandler.bind(this)} />
		});

		return (
		  <div className="member-container">
		  	{person}
		  	{
		  		this.state.status ? <PopUp message = {this.state.message} click = {this.clickHandler.bind(this)} /> : null
		  	}
		  </div>
		);
	}
}

export default Member;