import { Link } from "react-router-dom";

function WarehouseInfo({
  to,
  src,
  alt,
  imagePos,
  warehouseName,
  addressStreet,
  addressProv,
  contactName,
  contactNumber,
  contactEmail,
}) {
  return (
    /*<article
    //   className="grid grid-cols-2 gap-2"
      className="flex gap-5"
      aria-label={`Warehouse info for ${warehouseName}`}
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <div>
          <h2>warehouse</h2>
          <Link to={to} className="location-link flex gap-1">
            {imagePos === "before" && <img src={src} alt={alt} />}
            {warehouseName}
            {imagePos === "after" && <img src={src} alt={alt} />}
          </Link>
        </div>
        <div>
          <h2>address</h2>
          <p>{addressStreet}</p>
          <p>{addressProv}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div>
          <h2>contact name</h2>
          <p>{contactName}</p>
        </div>
        <div>
          <h2>contact information</h2>
          <p>{contactNumber}</p>
          <p>{contactEmail}</p>
        </div>
      </div>
    </article>*/
    <div className="grid grid-cols-2 gap-y-2 gap-x-4 md:grid-cols-4 md:gap-y-0">
        {/* Warehouse Name */}
        <div className="col-span-1 md:col-span-1 font-medium text-sm">
            <h2>warehouse</h2>
            <Link to={to} className="location-link flex gap-1">
                {imagePos === "before" && <img src={src} alt={alt} />}
                {warehouseName}
                {imagePos === "after" && <img src={src} alt={alt} />}
            </Link>
        </div>

        {/* Contact Name */}
        <div className="col-span-1 md:col-span-1 text-sm text-gray-700">
            <h2>contact name</h2>
            <p>{contactName}</p>
        </div>

        {/* Warehouse Address */}
        <div className="col-span-1 md:col-span-1 text-sm text-gray-600">
            <h2>address</h2>
            <p>{addressStreet}</p>
            <p>{addressProv}</p>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-1 text-sm text-gray-600">
            <h2>contact information</h2>
            <p>{contactNumber}</p>
            <p>{contactEmail}</p>
        </div>
    </div>
  );
}

export default WarehouseInfo;
