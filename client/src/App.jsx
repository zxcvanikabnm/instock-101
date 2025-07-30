import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as warehouseLoader } from "./features/warehouse/Warehouse";
import WarehousesPage from "./pages/WarehousesPage";

const router = createBrowserRouter([
  {
    path: "/warehouses",
    element: <WarehousesPage />,
    loader: warehouseLoader,
  }
]);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading order...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
