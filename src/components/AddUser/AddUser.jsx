import { React, useState }  from 'react'
import styles from './AddUser.module.css'
import { Button } from '@mui/material';

export default function AddUser(props) {

    const [userInput, setUserInput] = useState({
        name: '',
        age: ''
    });

    const usernameChangeHandler = (event) => {
      setUserInput({
        ...userInput,
        name: event.target.value
      })
    }

    const ageChangeHandler = (event) => {
      setUserInput({
        ...userInput,
        age: event.target.value
      })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.onAddUser(userInput)
    }

  return (
    <form className={styles.form}>
        <p>
          <label htmlFor='username'>Username</label>
          <input type='text' id="username" onChange={usernameChangeHandler}></input>
        </p>
        <p>
          <label htmlFor='age'>Age (Years)</label>
          <input type='number' id="age" onChange={ageChangeHandler}></input>
        </p>
        <p>
          <Button onClick={submitHandler} type="submit">
            Add User
          </Button>
        </p>
    </form>
  )
}
