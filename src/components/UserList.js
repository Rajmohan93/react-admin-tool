import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

function UserList(props) {
    return (
        <div>
            <List {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                </Datagrid>
            </List>
        </div>
    )
}

export default UserList;