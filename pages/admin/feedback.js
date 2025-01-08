 
import FeedbackTable from "components/Cards/FeedbackTable";
import Admin from "layouts/Admin.js";
import React from "react";

export default function feedback() {
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <FeedbackTable />
      </div>
    </div>
  );
}
feedback.layout = Admin;
