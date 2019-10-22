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
    foundUsers:[],
    users:[
      {
        id:"1",
        name:"Vlad",
        phoneNumber:"123",
        imgUrl: "www"
      },
        {
        id:"2",
        name:"Lena",
        phoneNumber:"456",
        imgUrl: "xxx"
      },
    ],
  }

  handleChangeName = (e) => {
    const name = e.target.value;
    this.setState({nameText: name});    
  }

  handleChangePhone = (e) => {
    const phone = e.target.value;
    this.setState({phoneText: phone});    
  }

  handleChangePhoto = (e) => {
    const photo = e.target.value;
    this.setState({photoUrl: photo});    
  }  

  handleChangeSearch = (e) => {
    const search = e.target.value;
    this.setState({searchText: search});    
  }  

  addUser = (e) => {
    e.preventDefault();
    let {nameText, phoneText, photoUrl} = this.state;
    if(!nameText || nameText.length < 2 || nameText.length > 15) return;
    if(!phoneText || phoneText.length < 10 || phoneText.length > 20) return;
    if(!photoUrl || photoUrl.length < 5) return;

    let users = [ ...this.state.users,
      {
        id:`${nameText}-${phoneText}`,
        name:nameText,
        phoneNumber:phoneText,
        imgUrl:photoUrl
      }];
    nameText = phoneText = photoUrl = '';
    this.setState({users, nameText, phoneText, photoUrl});
  }

    searchUser = () => {
    const {searchText, users} = this.state;
    this.setState(()=> ({foundUsers:users.filter(user => user.name === searchText)}))
    this.setState({searchText:''});
  }

  removeUser = (id) => {
    const {users, foundUsers} = this.state;
    let usersFilter = users.filter(user => user.id !== id);
    let foundUsersFilter = foundUsers.filter(user => user.id !== id)
    this.setState(() => ({ 
      users:usersFilter,
      foundUsers:foundUsersFilter,
     }))
  }

  render(){
    const {nameText, phoneText, photoUrl, searchText, users, foundUsers} = this.state;
    return(
      <div className="container">
        <Form nameText={nameText} 
          phoneText={phoneText} 
          photoUrl={photoUrl} 
          onChangeName={this.handleChangeName} 
          onChangePhone={this.handleChangePhone} 
          onChangePhoto={this.handleChangePhoto} 
          onAdd={this.addUser}/>
        <SearchField users={users} 
          searchText={searchText} 
          foundUsers={foundUsers}
          onChangeSearch={this.handleChangeSearch} 
          onSearch={this.searchUser}/>
        <UserList users={users} onRemove={this.removeUser}/>
      </div>
    );
  }
}

export default App;
