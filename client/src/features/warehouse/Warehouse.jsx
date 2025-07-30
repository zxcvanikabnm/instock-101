import { useLoaderData } from "react-router-dom";
import { getAllWarehouse } from "../../service/apiWarehouse.js";
import WarehouseItem from "./WarehouseItem";

function Warehouse() {
  // custom hook
  // data from loader as warehouseLoader
  const warehouse = useLoaderData();

  return (
    <ul className="warehouse mx-5 divide-y divide-stone-200 rounded-lg bg-white shadow-lg lg:top-20">
      {warehouse.map((item) => (
        <WarehouseItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const warehouse = await getAllWarehouse();
  return warehouse;
}

export default Warehouse;
