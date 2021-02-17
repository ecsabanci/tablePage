import React, { Component } from 'react';

class Users extends Component {  

  constructor(props){
    super(props)

    this.state = {
      users: [],
      todos: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data
        })
      })

      
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => {
          this.setState({
              todos: data,
              status: data.map(el => (
                el.completed ? "Done" : "In Progress"
              ))
          })
      })

  }

  sortStatus = (e) => {
    this.setState({
      status: this.state.status.sort((a,b) => {
        return a > b ? -1 : 1
      })
    })
  }



  render() {

    var {users,todos,status} = this.state;

    return (
      <div className = "Users-list">
        <table>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Assignes</th>
                <th className="Status" onClick={this.sortStatus}>Status ^</th>
                <th>Actions</th>
            </tr>

            {
                todos.map((todo,index) => (
                    <tr key={todo.id}>
                        <td key={todo.id}>{todo.id}</td>
                        <td key={todo.title}>{todo.title}</td>
                        <td>{users.map(user => {
                            return user.id === todo.userId ? user.name : false; 
                        })}
                        </td>
                        {/* <td>{todo.completed ? "Done" : "In Progress"}</td> */}
                        <td>{status[index]}</td>
                        <td className="Actions">
                            <button key={todo.id} className="Actions-Edit-button">Edit</button>
                            <button className="Actions-Delete-button">Delete</button>
                        </td>
                    </tr>
                ))
            }

        </table>

      </div>
    )
  }
}

export default Users;