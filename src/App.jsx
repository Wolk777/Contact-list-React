import React, {Component} from 'react';
import UserList from './components/UserList'
import SearchField from './components/SearchField'
import Form from './components/Form'
import './App.css';

class App extends Component {
  state={
    name:'',
    phone:'',
    photo:'',
    search:'',
    nameValid: false,
    phoneValid: false,
    photoValid: false,
    formValid: false,
    messageError: '',
    isFound: false,
    foundContacts:[],
    users:[
      {
        id:"375-25-531-93-76",
        name:"Vlad",
        phoneNumber:"375-25-531-93-76",
        imgUrl: "www.React.ru"
      },
        {
        id:"375-25-531-93-77",
        name:"Lena",
        phoneNumber:"375-25-531-93-77",
        imgUrl: "www.Redux.by"
      },
    ],
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
  let {nameValid, phoneValid, photoValid, name, phone, photo} = this.state;
  switch(fieldName) {
    case 'name':
      nameValid = (name && name.length > 2 && name.length < 15);
      break;
    case 'phone':
      phoneValid = (phone && phone.length > 10 && phone.length < 20);
      break;
    case 'photo':
      photoValid = (photo && photo.length > 5);
    default:
      break;
  }
  this.setState({
                  nameValid: nameValid,
                  phoneValid: phoneValid,
                  photoValid: photoValid,
                }, this.validateForm);
  }

  validateForm() {
    let formValid = this.state.nameValid && this.state.phoneValid  && this.state.photoValid;
    this.setState({formValid: formValid});
  }   

  addUser = (e) => {
    e.preventDefault();
    let {name, phone, photo, nameValid, phoneValid, photoValid, formValid, messageError} = this.state;

    if(!formValid) {
      this.setState({messageError:'Check the correctness of filling out the form.'});
      return;
    };

    let users = [ ...this.state.users,
      {
        id:`${phone}`,
        name:name,
        phoneNumber:phone,
        imgUrl:photo
      }];
    name = phone = photo = messageError ='';
    nameValid = phoneValid = photoValid = formValid = false;
    this.setState({users, name, phone, photo, nameValid, phoneValid, photoValid, formValid, messageError});
  }

  searchUser = () => {
    const {search, users} = this.state;
    const foundContacts = users.filter(user => user.name === search);
    let isFound = foundContacts.length > 0 ? false: true;
    this.setState(()=> ({foundContacts:foundContacts}));
    this.setState({
      search:'',
      isFound: isFound,
    });
  }

  removeUser = (id) => {
    const {users, foundContacts} = this.state;
    let usersFilter = users.filter(user => user.id !== id);
    let foundContactsFilter = foundContacts.filter(user => user.id !== id)
    this.setState(() => ({ 
      users:usersFilter,
      foundContacts:foundContactsFilter,
     }))
  }

  render(){
    const {name, phone, photo, search, users, foundContacts, messageError, 
          nameValid, phoneValid, photoValid, formValid, isFound} = this.state;
    const handleUserInput = this.handleUserInput;
    return(
      <div className="container">
        <Form 
          nameText={name} 
          phoneText={phone} 
          photoUrl={photo}
          nameValid={nameValid} 
          phoneValid={phoneValid} 
          photoValid={photoValid}
          formValid={formValid}
          messageError={messageError} 
          onChange={handleUserInput} 
          onAdd={this.addUser}/>
        <SearchField users={users} 
          searchText={search} 
          foundContacts={foundContacts}
          isFound={isFound}
          onChangeSearch={handleUserInput} 
          onSearch={this.searchUser}/>
        <UserList users={users} onRemove={this.removeUser}/>
      </div>
    );
  }
}

export default App;
