import { Typography } from "antd"

function AppFooter() {
    return <div className="AppFooter">
       
        <Typography.Link href="tel:1234567789">
            +123456789 </Typography.Link>
            <Typography.Link href="https://www.google.com" target={'_blank'}>Privacy Policy</Typography.Link>
            <Typography.Link href="https://www.google.com"target={'_blank'}>Terms of Use</Typography.Link>
   
</div>
}
export default AppFooter