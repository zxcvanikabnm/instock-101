import { useLoaderData } from "react-router-dom";
import { getAllWarehouse } from "../../service/apiWarehouse.js";
import WarehouseItem from "./WarehouseItem";

function Warehouse() {
  // custom hook
  // data from loader as warehouseLoader
  const warehouse = useLoaderData();

  return (
    <div className="warehouse shadow-lgs mx-5 rounded-lg bg-white px-5 pt-7 pb-5">
      <h1 className="font-avenirnext-demi text-3xl capitalize">warehouses</h1>
      <form action="" method="get"></form>
      <ul className="border-y border-stone-200 divide-y divide-stone-200">
        {warehouse.map((item) => (
          <WarehouseItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const warehouse = await getAllWarehouse();
  return warehouse;
}

export default Warehouse;
