import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./ui/Layout";

import { loader as warehouseLoader } from "./features/warehouse/Warehouse";
import WarehousesPage from "./pages/WarehousesPage";

import WarehouseDetail, {
  loader as warehouseDetailLoader,
} from "./features/warehouse/WarehouseDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/warehouses",
                element: <WarehousesPage />,
                loader: warehouseLoader,
            },
            {
                path: "/warehouses/:id",
                element: <WarehouseDetail />,
                loader: warehouseDetailLoader,
            },
        ]
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
