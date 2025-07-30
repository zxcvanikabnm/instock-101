// src/ui/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;


// function Layout() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       <header className="sticky top-0 z-50">
//         <Navbar />
//       </header>

//       <main className="flex-1 overflow-y-auto">
//         <Outlet />
//       </main>

//       <footer className="bg-slate-800 text-white py-4 text-center">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// export default Layout;