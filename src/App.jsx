import React, {Component} from 'react';
import UserList from './components/UserList'
import SearchField from './components/SearchField'
import Form from './components/Form'
import './App.css';


class App extends Component {
  state={
    nameText:'',
    phoneText:'',
    photoUrl:'',
    searchText:'',
    users:[],
    foundUsers:[]
  }

  handleChange = (e) => {
    e.preventDefault();
    e.target.getAttribute('name') === 'name' ?
    this.setState({nameText: e.target.value}) :
    e.target.getAttribute('name') === 'phone' ?
    this.setState({phoneText: e.target.value}) :
    e.target.getAttribute('name') === 'photo' ?
    this.setState({photoUrl: e.target.value}) :
    this.setState({searchText: e.target.value})
  }

  addUser = (e) => {
    e.preventDefault();
    let {nameText, phoneText, photoUrl} = this.state;
    if(!nameText || !phoneText) return;
      const users = [ ...this.state.users,
      {
        id:`${nameText}-${phoneText}`,
        name:nameText,
        phoneNumber:phoneText,
        imgUrl:photoUrl
      }];
    nameText = phoneText = photoUrl = '';
    this.setState({users, nameText, phoneText, photoUrl});
  }

  removeUser = (id) => {
    const {users, foundUsers} = this.state;
    let usersFilter = users.filter(user => user.id !== id)
    let foundUsersFilter = foundUsers.filter(user => user.id !== id)
    this.setState(() => ({
      users:usersFilter,
      foundUsers:foundUsersFilter,
      nameText:'',
      phoneText:'',
      photoUrl:'',
    }))
  }

  searchUser = () => {
    const {searchText, users} = this.state;
    this.setState(()=> ({foundUsers:users.filter(user => user.name === searchText)}))
    this.setState({searchText:''});
  }

  render(){
    const {nameText, phoneText, photoUrl, searchText, users, foundUsers} = this.state;
    const {handleChange, addUser, searchUser, removeUser} = this;
    return (
      <div className="container">
        <Form nameText={nameText} phoneText={phoneText} photoUrl={photoUrl} 
        onChange={handleChange} onAdd={addUser} onRemove={removeUser}/>
        <SearchField onChange={handleChange} onSearch={searchUser} 
        onRemove={removeUser} foundUsers={foundUsers} searchText={searchText} />
        <UserList users={users}/>
      </div>
    );
  }
}

export default App;
