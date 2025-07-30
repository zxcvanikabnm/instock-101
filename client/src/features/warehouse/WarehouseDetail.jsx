import { useLoaderData } from "react-router-dom";
import { getWarehouseById } from "../../service/apiWarehouse.js";
import backArrow from "../../assets/icon/icon-back-arrow.svg";
import WarehouseInfo from "./WarehouseInfo.jsx";

function WarehouseDetail() {
  const warehouse = useLoaderData(); // this is ONE warehouse object
  const inventory = warehouse.inventory || []; // defensive fallback
  console.log(inventory);
  console.log(warehouse);

  const {
    _id,
    warehouse: warehouseName,
    addressStreet,
    addressProv,
    contactName,
    contactNumber,
    contactEmail,
    inventory: warehouseInventory,
  } = warehouse;

  return (
    <>
      <div>
        <WarehouseInfo
          to={`/warehouses/`}
          src={backArrow}
          alt="back arrow"
          warehouseName={warehouseName}
          addressStreet={addressStreet}
          addressProv={addressProv}
          contactName={contactName}
          contactNumber={contactNumber}
          contactEmail={contactEmail}
        />
      </div>
      <section aria-label="Inventory list">
        <ul className="divide-y divide-stone-200 px-2">
          {warehouseInventory.map((item) => (
            <li key={item._id || item.id}>{item.productName}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function loader({ params }) {
  const warehouse = await getWarehouseById(params.id);
  return warehouse;
}

export default WarehouseDetail;
