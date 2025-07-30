import { Link } from "react-router-dom";

function WarehouseInfo({
  to,
  src,
  alt,
  warehouseName,
  addressStreet,
  addressProv,
  contactName,
  contactNumber,
  contactEmail,
}) {
  return (
    <article aria-label={`Warehouse info for ${warehouseName}`}>
      <ul>
        <li>
          <Link to={to}>
            <img src={src} alt={alt} />
            {warehouseName}
          </Link>
        </li>
        <li>{addressStreet}</li>
        <li>{addressProv}</li>
        <li>{contactName}</li>
        <li>{contactNumber}</li>
        <li>{contactEmail}</li>
      </ul>
    </article>
  );
}

export default WarehouseInfo;
