//import React from 'react';
/*import ReactDOM from 'react-dom';*/

/*class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  
 
}
}*/


/*import React, { Component } from 'react';
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
	  records:[{"name":"raman"},{"name":"rakesh"},{"name":"suman"}]
    };
  }

  componentDidMount() {
    fetch("https://hn.algolia.com/api/v1/search?query=")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.items.map(item => (
            <li>
              {item.id}
            </li>
          ))}
        </ul>
      );
   }
  }
}

export default Car;*/

import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: []
  }
  //http://datainfosee.com/demo/website/php/wordpress/angularadmin/wp-json/wp/v2/posts?per_page=3
  //http://jsonplaceholder.typicode.com/todos
  //https://hn.algolia.com/api/v1/search?query=
  //
  componentDidMount() {
    fetch('http://datainfosee.com/demo/website/php/wordpress/angularadmin/wp-json/wp/v2/posts?per_page=3')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  // [...]
    render() {
    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
			  <a href={todo.link}>{todo.title.rendered}</a>
			  <img src={todo.featured_image_src} />
			  </h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }             
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;


