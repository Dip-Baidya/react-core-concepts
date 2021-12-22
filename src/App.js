import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'salman-shah', 'Dipjol', 'joy', 'dip'];
  const products = [
    { name: 'photo shop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.88' },
    { name: 'PDF Reader', price: '$30.45' }
  ]

  const friends = [
    { name: 'Khair', phone: '01919', job: 'ANdroid Dev' },
    { name: 'Sakif', phone: '01717', job: 'Digitla Marketer' },
    { name: 'Upoma', phone: '01616', job: 'Digital Marketer' }
  ]

  // const nayokNames = nayoks.map(nayok => nayok);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            products.map(product => <li>{product.name}, {product.price}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <h1>Practice show Component Session</h1>

        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }

        <p>I am a React Person</p>
        <Person name="Dip Baidya" job="Software engineer"></Person>
        <Person name="Joy Baidya" job="Jr.Software engineer"></Person>
        <Person name="Ove Das" job="Graphic Designer"></Person>

      </header>
    </div>
  );
}

<h1>practice component Session</h1>

function Friend(props) {
  const friendStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
    marginTop: '50px',
    padding: '20px'
  }
  const { name, phone, job } = props.friend;
  return (
    <div style={friendStyle}>
      <h3>{name}</h3>
      <h5>{phone}</h5>
      <p>{job}</p>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '300px',
    float: 'left',
    marginTop: '50px',
    padding: '20px'
  }
  const nameStyle = {
    color: 'red'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3 style={nameStyle}>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

//Load dynamic data, API call useEffect integrate state
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])//Data bar bar load hoya thamanor jonno [] use korsi

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {
        users.map(user => <li>{user.email}</li>)
      }
      </ul>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: '2px solid orange', width: '400px', margin: '10px', padding: '5px' }}>
      <h2 >Name: {props.name}</h2>
      <p>Job: {props.job}</p>
    </div>
  )
}



export default App;
