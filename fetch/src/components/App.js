import '../App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {return res.json()})
    .then(data => setUsers(data))
  })

//   useEffect(() => {fetch("https://jsonplaceholder.typicode.com/users", {
//     method:'POST',
//     headers:{
//       'Content-type' : 'application/json'
//     },
//     body: JSON.stringify({
//       name: "Dan", age:30
//     })
//   })
//   .then(res => {return res.json()})
//   .then(data => setUsers(data))
// }))

  return (
    <div className="App">
      <h1>Works</h1>
      {users.map(user => {
        return(
          <div>
              <h3>{user.name} my moto: {user.company.catchPhrase}</h3>
              <p>Email: {user.email}</p>
              <br />
          </div>
        )
      })}
    </div>
  );
}

export default App;
