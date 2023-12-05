import Signin from "../users/signin";
import Account from "../users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import UserTable from "../users/table";
import { Provider } from "react-redux";
import store from "./store";
import Navigation from "./Navigation";
import Signup from "../users/signup";
function Project() {
return (
    <Provider store={store}>
<div>
<Nav />
<div className="row">
<div className="col-2">
<Navigation/>
</div>
<div className="col-10">
<Routes>
<Route path="/table" element={<UserTable />} />
<Route path="/" element={<Navigate to="/project/signin" />} />
<Route path="/signin" element={<Signin />} />
<Route path="/signup" element={<Signup />} />
<Route path="/account" element={<Account />} />
<Route path="/account/:id" element={<Account />} />
</Routes>
</div>
</div>
</div>  
</Provider>
);
}
export default Project;