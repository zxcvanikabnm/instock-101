import { useLoaderData } from "react-router-dom";
import { getAllWarehouse } from "../../service/apiWarehouse.js";
import WarehouseItem from "./WarehouseItem";

function Warehouse() {
  // custom hook
  // data from loader as warehouseLoader
  const warehouse = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
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
