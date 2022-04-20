import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

function PostList(props) {
    return (
        <div>
            <List {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="role" />
                    <DateField source="joinedDate" />
                </Datagrid>
            </List>
        </div>
    )
}

export default PostList;