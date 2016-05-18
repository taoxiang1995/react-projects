import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class MessageForm extends Component{
	

	render(){
		return(
			<div>
				<form onSubmit = {this.onSubmit.bind(this)}>
					<input type="text" className="form-control" ref="text" placeholder="Please type a message..."/>

				</form>
			</div>
		)
	}

	onSubmit(e){
		e.preventDefault();

		this.props.emit('messageAdded', {
			timeStamp: Date.now(),

			//this.refs point to the DOM element
			//which give us access to the DOM
			text: this.refs.text.value.trim()
		});

		//Clear Form
		this.refs.text.value = '';
	}

	
}

export default MessageForm