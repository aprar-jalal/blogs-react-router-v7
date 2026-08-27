import { Outlet } from "react-router";
import Navbar from "./src/components/navbar";
import Footer from "./src/components/footer";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}