import { Space } from "antd";
import "./App.css";
import AppHeader from "./Components/AppHeader/header";
import SideMenu from "./Components/SideMenu/sideMenu";
import PageContent from "./Components/PageContent/pageContent";
import AppFooter from "./Components/AppFooter/footer";

function App(){
  return (
    <div className="App">

      <AppHeader />
      <Space className="SideAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space >
      <AppFooter/>

    </div>

  )
}

export default App