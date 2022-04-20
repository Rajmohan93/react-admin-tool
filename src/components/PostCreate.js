import React from "react";
import { Create, SimpleForm, DateInput, TextInput } from "react-admin";

export default function PostCreate(props) {
    return (
        <Create title='Create Post' {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="role" />
                <DateInput source="joinedDate" />
            </SimpleForm>
        </Create>
    )
}