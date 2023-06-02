import { MoneyCollectOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd"
import { useEffect, useState } from "react";
import { getOrders, getRevenue } from "../../API/Api"


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}> Dashboard</Typography.Title >
      <Space direction="horizontal">
        <DashboardCard icon={<ShoppingCartOutlined style={{ color: "pink", borderRadius: 20, fontSize: 24, padding: 8, backgroundColor: "rgb(255,229,234)" }} />} title={"Orders"} value={1245} />
        <DashboardCard icon={<ShoppingOutlined style={{ color: "pink", borderRadius: 20, fontSize: 24, padding: 8, backgroundColor: "rgb(255,229,234)" }} />} title={"Inventory"} value={1294} />
        <DashboardCard icon={<UserOutlined style={{ color: "pink", borderRadius: 20, fontSize: 24, padding: 8, backgroundColor: "rgb(255,229,234)" }} />} title={"Customers"} value={1234} />
        <DashboardCard icon={<MoneyCollectOutlined style={{ color: "pink", borderRadius: 20, fontSize: 24, padding: 8, backgroundColor: "rgb(255,229,234)" }} />} title={"Revenue"} value={1024} />
      </Space>
      <Space>
        <RecentOrders/>
        <DashboardChart/>
      </Space>
    </Space>
  );
}
function DashboardCard({ title, value, icon }) {


  return (
    <Card>
      <Space direction="horizontal">
        {icon} {/* Render the icon passed in as a prop */}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
const [dataSource,setDataSource]= useState([])
const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
    getOrders().then((res) =>{
setDataSource(res.products.splice(0,4));
      setLoading(false);
    });

  },[]);

  return ( 
    <>
    <Typography.Text >Recent Orders</Typography.Text>
  <Table 
    columns={[
      {
        title: "Title",
        dataIndex: "title",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
      },
      {
        title: "Price",
        dataIndex: "discountedPrice",
      },
    ]}
    dataSource={dataSource}
    loading={loading}
    pagination={false}
  ></Table>
 </> 
  );
}
function DashboardChart(){
  const  [reveneuData ,setReveneuData] = useState({
    labels:[],
    datasets:[]
  })

  useEffect(() =>
  {
    getRevenue().then((res) => {
const labels= res.carts.map((cart)=>{
  return `User-${cart.userId}`;
});
const data= res.carts.map((cart)=>{
  return cart.discountedTotal;
});
const dataSource ={
  labels,
  datasets: [
    {
      label: 'Reveneu ',
      data: data,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   
  ],
};
setReveneuData(dataSource);

    })
    
  },[])


   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' ,
      },
      title: {
        display: true,
        text: 'Order Revenue',
      },
    },
  };




  
  return <Card 
  style={{ width: 500,height:280}}><Bar options={options} data={reveneuData} /></Card>
}


export default Dashboard