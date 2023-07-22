
import UserItem from "./UserItem";

const UsersList=(props)=>
{
    if(props.items.length===0) return ;
  return (<ul>
    {props.items.map((item)=>{return <UserItem key={item.id} uName={item.userName} uAge={item.userAge} ></UserItem>})}
  </ul>
  );
}

export default UsersList;