import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/fetchItems";


function App() {



  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
