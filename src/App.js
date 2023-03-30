import React,{useState} from 'react';
import './App.css';
import LoginForm from './LoginForm';
import { Register } from './Register';


function App() {
  const [currentForm,setCurrentForm]=useState('login');

  const toggleForm =(forName) =>{
    setCurrentForm(forName);
  }

  return (
    <div className="App">
     {
      currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm}/> :<Register onFormSwitch={toggleForm}/>
     }
    </div>
  );
}

export default App;
