import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function Account() {
const { id } = useParams();
const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
};
const [account, setAccount] = useState(null);
const save = async () => {
    await client.updateUser(account);
    };
const navigate = useNavigate();
const fetchAccount = async () => {
const account = await client.account();
setAccount(account);
};
const signout = async () => {
    await client.signout();
    navigate("/users/signin");
};
useEffect(() => {
if (id) {
    findUserById(id);
} else {
fetchAccount();
}
}, []);
return (
<div className="w-50">
<h1>Account</h1>
<button className = "btn btn-primary w-100" onClick={save}>
Save
</button>
<button className = "btn btn-danger w-100" onClick={signout}>
Signout
</button>
<Link to="users/table" className="btn btn-warning w-100">
Users
</Link>
{account && (
    <div>
        <input value={account.password}
        onChange={(e) => setAccount({ ...account,
        password: e.target.value })}/>
        <input value={account.firstName}
        onChange={(e) => setAccount({ ...account,
        firstName: e.target.value })}/>
        <input value={account.lastName}
        onChange={(e) => setAccount({ ...account,
        lastName: e.target.value })}/>
        <input value={account.dob}
        onChange={(e) => setAccount({ ...account,
        dob: e.target.value })}/>
        <input value={account.email}
        onChange={(e) => setAccount({ ...account,
        email: e.target.value })}/>
        <select onChange={(e) => setAccount({ ...account,
        role: e.target.value })}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        </select>
</div>
)}
</div>
);
}
export default Account;