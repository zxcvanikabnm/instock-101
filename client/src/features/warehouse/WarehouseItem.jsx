import arrow from "../../assets/icon/icon-arrow-right.svg";
import WarehouseInfo from "./WarehouseInfo";

function WarehouseItem({ item }) {
  const {
    _id,
    warehouse: warehouseName,
    addressStreet,
    addressProv,
    contactName,
    contactNumber,
    contactEmail,
  } = item;

  return (
    <div>
      <WarehouseInfo
          to={`/warehouses/${_id}`}
          src={arrow}
          alt="arrow"
          warehouseName={warehouseName}
          addressStreet={addressStreet}
          addressProv={addressProv}
          contactName={contactName}
          contactNumber={contactNumber}
          contactEmail={contactEmail}
        />
    </div>
  );
}

export default WarehouseItem;
