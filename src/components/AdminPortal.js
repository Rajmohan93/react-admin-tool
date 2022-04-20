import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider  from "ra-data-simple-rest";

// import PostList from "./PostList";
// import PostCreate from "./PostCreate";
// import UserList from "./UserList";

import SuperAdminList from "./SuperAdminList";
import SuperAdminCreate from "./SuperAdminCreate";
import SuperAdminEdit from "./SuperAdminEdit";

const AdminPortal = () => (
    <Admin dataProvider={simpleRestProvider('http://localhost:8080/api')}>
        {/* <Resource name="posts" list={PostList} create={PostCreate} /> */}
        {/* <Resource name="users" list={UserList} /> */}
        <Resource name="superadmin" list={SuperAdminList} create={SuperAdminCreate} edit={SuperAdminEdit} />
    </Admin>
);

export default AdminPortal;