
import {useState} from 'react';
import './InputForm.css';

const InputForm=()=>
{

    const [userData,setUserData]=useState({userName:"",userAge:0});
     
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
    }


    return  <form onSubmit={formHandler} className='input_form'>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Username</label>
  <input type="text" className="form-control" onChange={(event)=>{stateHandler("userName",event.target.value)}} value={userData.userName} id="formGroupExampleInput" />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Age(In years)</label>
  <input type="Number" className="form-control" onChange={(event)=>{stateHandler("userAge",event.target.value)}} id="formGroupExampleInput2"/>
</div>
<button type="submit" className="btn btn-primary">Add User</button>
</form>
}

export default InputForm;