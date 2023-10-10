import React from "react";
import { List, ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import './UserList.css'

export default function UsersList(props) {
  const users = props.users;
  return (
    <div className="elements">
       {users.map(user =>  
         <p>
          {user.name} ({user.age} Years old)
         </p>
       )}
    </div>
  );
}
