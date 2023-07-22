
import {useState} from 'react';
import './InputForm.css';

const InputForm=(props)=>
{

    const [userData,setUserData]=useState({userName:"",userAge:"",id:""});
     
    const stateHandler=(id,value)=>
    {
         setUserData((prevData)=>{
            return{
                ...prevData,
                [id]:value
            }
         });
    }
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(userData.userName.trim().length===0|| +userData.userAge<1) // userAge is stored as a string and to convert it to number add + in front.
        {
            return;
        }
        // console.log(userData);
        const newUserData={userName:userData.userName, userAge:userData.userAge,id:Math.random().toString()};
         props.userDataAdd(newUserData);
        setUserData({userName:"",userAge:""});
    }


    return  <form onSubmit={formHandler} className='input_form'>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
  <input type="text" className="form-control" onChange={(event)=>{stateHandler("userName",event.target.value)}} value={userData.userName} id="formGroupExampleInput" />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Age(In years)</label>
  <input type="number" className="form-control" onChange={(event)=>{stateHandler("userAge",event.target.value)}} value={userData.userAge} id="formGroupExampleInput2"/>
</div>
<button type="submit" className="btn btn-primary">Add User</button>
</form>
}

export default InputForm;