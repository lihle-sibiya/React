// import './App.css';
// import React, { Component } from 'react';
// import UserForm from './UserForm';
// import Products from './Products';

// class App extends Component {
//   render() {

//     return (
//       <div >
//         <h1>My First React App</h1>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {
  render() {        
    return (
      <div>
        <UserForm />        
                
      </div>
    );
  }
}

export default App;