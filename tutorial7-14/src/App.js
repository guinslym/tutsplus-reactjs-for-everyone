import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [
{
	id:1,
	name: 'Guinsly',
	phone: '400-344-0000'
},
{
	id:2,
	name: 'Jessica',
	phone: '345-098-0000'
},
{
	id:3,
	name: 'Matthiew',
	phone: '231-678-2344'
},
{
	id:4,
	name: 'Paul',
	phone: '949-234-2343'
}
]

class App extends React.Component {
  render(){
  	return (
         <div>
         <h1>Contact List</h1>
         <ContactsList contacts={this.props.contacts}/>
         </div> 
  		)
  }
}
 
ReactDOM.render(<App contacts={contacts} />,document.getElementById('app'));