// import arrow from "../../assets/icon/icon-arrow-right.svg";
// import WarehouseInfo from "./WarehouseInfo";

// function WarehouseItem({ item }) {
//   const {
//     _id,
//     warehouse: warehouseName,
//     addressStreet,
//     addressProv,
//     contactName,
//     contactNumber,
//     contactEmail,
//   } = item;

//   return (
//     <div className="flex flex-col py-4 md:flex-row">
//       <WarehouseInfo
//         to={`/warehouses/${_id}`}
//         src={arrow}
//         alt="arrow"
//         imagePos="after"
//         warehouseName={warehouseName}
//         addressStreet={addressStreet}
//         addressProv={addressProv}
//         contactName={contactName}
//         contactNumber={contactNumber}
//         contactEmail={contactEmail}
//       />
//       <div className="button-container flex w-full justify-between md:w-fit md:flex-col md:items-end">
//         <button className="warning-button">delete</button>
//         <button className="alternate-button">edit</button>
//       </div>
//     </div>
//   );
// }

// export default WarehouseItem;

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
    // <div className="grid md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-x-4 py-4">
    <div className="grid md:grid-cols-[1fr_1fr_auto] gap-x-4 py-4">
      <WarehouseInfo
        to={`/warehouses/${_id}`}
        src={arrow}
        alt="arrow"
        imagePos="after"
        warehouseName={warehouseName}
        addressStreet={addressStreet}
        addressProv={addressProv}
        contactName={contactName}
        contactNumber={contactNumber}
        contactEmail={contactEmail}
      />

      {/* Buttons */}
      <div className="col-span-2 flex justify-between mt-5 md:mt-0 md:col-span-1 md:flex-col md:items-end md:gap-2">
        <button className="warning-button">delete</button>
        <button className="alternate-button">edit</button>
      </div>
    </div>
  );
}

export default WarehouseItem;
