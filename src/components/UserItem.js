
import './UserItem.css';

const UserItem=(props)=>
{
    return <li className='user_item'>
       <h2> {props.uName} ({props.uAge} Years old)</h2>
    </li>
}

export default UserItem;