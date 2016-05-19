import ReactDOM from 'react-dom';

class Contact extends React.Component {
  render(){
  	console.log(this.props.contact);
  	return (
  			<li>
  				{this.props.contact.name} {this.props.contact.phone}
  			</li>
  		)
  }
}

export default Contact;