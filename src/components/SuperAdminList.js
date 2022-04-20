import React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

function SuperAdminList(props) {
    return (
        <div>
            <List {...props}>
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="tenant_schoolname" />
                    <TextField source="tenant_name" />
                    <TextField source="tenant_mailid" />
                    <TextField source="tenant_phonenum" />
                    <TextField source="tenant_planname" />
                    <TextField source="tenant_role" />
                    <EditButton basePath="/superadmin" />
                    <DeleteButton basePath="/superadmin" />
                </Datagrid>
            </List>
        </div>
    )
}

export default SuperAdminList;