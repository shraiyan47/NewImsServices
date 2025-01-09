import DestinationTable from "components/Cards/DestinationTable";
import UploadDestination from "components/Forms/destinationForm";
import Admin from "layouts/Admin.js";
import React from "react";

export default function Destination() {
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <UploadDestination />
      </div>

      <div className="w-full mb-12 px-4">
        <DestinationTable />
      </div>
    </div>
  );
}
Destination.layout = Admin;
