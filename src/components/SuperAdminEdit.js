import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

function SuperAdminEdit(props) {
    return (
        <Edit title="Edit Admin" {...props}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="tenant_schoolname" />
                <TextInput source="tenant_name" />
                <TextInput source="tenant_mailid" />
                <TextInput source="tenant_phonenum" />
                <TextInput source="tenant_planname" />
                <TextInput source="tenant_role" />
            </SimpleForm>
        </Edit>
    )
}

export default SuperAdminEdit;