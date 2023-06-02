import { AppstoreAddOutlined,ShopOutlined,ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function SideMenu() {
    const navigate = useNavigate()
    return <div className="SideMenu">
        <Menu
        onClick={(item) => {
            //item key
            navigate(item.key);

        }}
            items={[
                {
                    label: "Dashboard",
                    icon:<AppstoreAddOutlined/>,
                    key: "/",
                },
                {
                    label: "Inventory",
                    icon:<ShopOutlined />,
                    key: "/inventory",
                },
                {
                    label: "Orders",
                    icon:<ShoppingCartOutlined />,
                    key: "/order",
                },
                {
                    label: "Customers",
                    icon:<UserOutlined />,
                    key: "/customer",
                },
            ]

            }
        ></Menu>
    </div>

}
export default SideMenu