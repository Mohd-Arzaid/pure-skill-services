import React from "react";
import ServiceBreadcrumb from "./service-breadcrumb";
import ServiceHero from "./service-hero";

const ServicePageLayout = ({ breadcrumbLabel, lang, hero }) => {
  return (
    <div className="relative">
      <ServiceBreadcrumb label={breadcrumbLabel} lang={lang} />
      <ServiceHero
        headingUpper={hero.headingUpper}
        headingLower={hero.headingLower}
        description={hero.description}
        lang={lang}
      />
    </div>
  );
};

export default ServicePageLayout;
