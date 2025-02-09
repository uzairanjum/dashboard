import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

function DashboardLayout() {
  return (
    <>
      <Header />
      <main className="my-3">
        <Sidebar />
        <div className="pl-60 pt-32 pr-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DashboardLayout;
