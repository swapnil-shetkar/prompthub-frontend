import { Routes, Route } from "react-router-dom";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Home from "./core/Home";
import Dashboard from "./user/userDashboard";
import PrivateRoutes from "./auth/PrivateRoute";
import AdminRoutes from "./auth/adminRoute";
import AdminDashboard from "./user/adminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from "./core/Shop";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/user/dashboard" />
        </Route>

        <Route element={< AdminRoutes/>}>
          <Route element={<AdminDashboard />} path="/admin/dashboard" />
          <Route element={<AddCategory />} path="/create/category" />
          <Route element={<AddProduct />} path="/create/product" />
        </Route>

      </Routes>
    </div>
  );
}
export default App;
