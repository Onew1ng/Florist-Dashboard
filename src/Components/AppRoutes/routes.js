import { Route, Routes}from "react-router-dom"
import Dashboard from "../../Pages/Dashboard/dashboard"
import Inventory from "../../Pages/Inventory/inventory"
import Order from "../../Pages/Orders/order"
import Customers from "../../Pages/Customers/customer"
function  AppRoutes(){
return(
    
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/inventory" element={<Inventory/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/customer" element={<Customers/>}></Route>


    </Routes>
    
)
}
export default AppRoutes