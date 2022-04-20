import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

function SuperAdminCreate(props) {
    return (
        <Create title="Create Admin" {...props}>
            <SimpleForm>
                <TextInput source="tenant_schoolname" />
                <TextInput source="tenant_name" />
                <TextInput source="tenant_mailid" />
                <TextInput source="tenant_phonenum" />
                <TextInput source="tenant_planname" />
                <TextInput source="tenant_role" />
            </SimpleForm>
        </Create>
    )
}

export default SuperAdminCreate;