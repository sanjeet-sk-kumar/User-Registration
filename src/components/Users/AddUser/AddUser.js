import React,{ useState } from 'react';
import classes from './AddUser.module.css';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

const AddUser = props =>{
    const [userName,setUserName]=useState('');
    const [userAge,setUserAge]=useState('');
    const [error,setError]= useState();
    const userNameChangeHandler = event =>{
        setUserName(event.target.value);
    }
    const userAgeChangeHandler = event =>{
        setUserAge(event.target.value);
    }
    const addUserHandler = (event) =>{
        const user={
            name: userName.trim(),
            age: userAge.trim()
        }
        console.log(user.age.length);
        if(user.name.length===0 && user.age.length===0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            console.log('Invalid Input');
        }
        else if(Number(user.age)<0){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (>0).'
            })
            console.log('Age Can not be -ve');
        }
        else
            props.onAddUser(user);
        setUserAge('');
        setUserName('');
        event.preventDefault();
    }

    const errorHandler = () => {
        setError(null);
    }
    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={userName} onChange={userNameChangeHandler}></input>
                    <label htmlFor="userage">Age (Years)</label>
                    <input id="userage" type="number" value={userAge} onChange={userAgeChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;