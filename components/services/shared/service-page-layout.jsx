import React from "react";
import ServiceBreadcrumb from "./service-breadcrumb";

const ServicePageLayout = ({ breadcrumbLabel }) => {
  return (
    <div className="relative">
      <ServiceBreadcrumb label={breadcrumbLabel} />
    </div>
  );
};

export default ServicePageLayout;
