import Logo  from '../../imgs/lavender (2).png';
import { Typography,Space,Badge } from 'antd';
import {MailTwoTone ,BellTwoTone} from "@ant-design/icons"

function AppHeader() {
    return <div className="AppHeader">
        <img  width={100}  src={Logo} alt=""></img>
        <Typography.Title >
            Dashboard
        </Typography.Title>
        <Space> 
            <Badge count={5} dot>
        <MailTwoTone  twoToneColor="#8968AE" style={{fontSize:26}} />
        </Badge>
        <Badge count={15} >
        <BellTwoTone twoToneColor="#8968AE" style={{fontSize:26}} />
        </Badge>
        </Space>
    </div>

}
export default AppHeader