import { Link } from "react-router-dom";
import arrow from "../../assets/icon/icon-arrow-right.svg";

function WarehouseItem({ item }) {
  const {
    id,
    warehouse,
    addressStreet,
    addressProv,
    contactName,
    contactNumber,
    contactEmail,
    inventory,
  } = item;

  return (
    <div>
      <ul>
        <li>
          <Link to={`/warehouses/${_id}`}>
            {warehouse}
            <img src={arrow} alt="arrow" />
          </Link>
        </li>
        <li>{addressStreet}</li>
        <li>{addressProv}</li>
        <li>{contactName}</li>
        <li>{contactNumber}</li>
        <li>{contactEmail}</li>
      </ul>
    </div>
  );
}

export default WarehouseItem;
