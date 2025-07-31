import { useLoaderData } from "react-router-dom";
import { getAllWarehouse } from "../../service/apiWarehouse.js";
import WarehouseItem from "./WarehouseItem";

function Warehouse() {
  // custom hook
  // data from loader as warehouseLoader
  const warehouse = useLoaderData();

  return (
    <div className="warehouse shadow-lgs mx-3 rounded-lg bg-white px-4 pt-7 pb-5">
      <h1 className="font-avenirnext-demi text-3xl capitalize">warehouses</h1>
      <form action="" method="get"></form>
      <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-x-4 py-4">
        <h2>warehouse</h2>
        <h2>address</h2>
        <h2>contact name</h2>
        <h2>contact info</h2>
        <h2>actions</h2>
      </div>
      <div className="border-y border-stone-200 divide-y divide-stone-200">
        {warehouse.map((item) => (
          <WarehouseItem item={item} key={item.id} />
        ))}
      </div>
      <div className="border-y border-stone-200 divide-y divide-stone-200">
        {warehouse.map((item) => (
          <WarehouseItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const warehouse = await getAllWarehouse();
  return warehouse;
}

export default Warehouse;
