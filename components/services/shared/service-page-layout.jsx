import React, { Fragment } from "react";
import ServiceBreadcrumb from "./service-breadcrumb";
import ServiceHero from "./service-hero";
import ServiceIndex from "./service-index";
import { ServiceSeparator } from "./service-content";
import ServiceSection from "./service-section";
import ServiceAuthor from "./service-author";
import ServiceRightSideContent from "./service-right-side-content";

const ServicePageLayout = ({ breadcrumbLabel, hero, intro, sections }) => {
  return (
    <div className="relative">
      <ServiceBreadcrumb label={breadcrumbLabel} />
      <ServiceHero
        headingUpper={hero.headingUpper}
        headingLower={hero.headingLower}
        description={hero.description}
        headingAs={hero.headingAs}
      />
      <ServiceIndex index={sections} />

      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex flex-col gap-6 md:gap-9">
       
              {intro}
              <ServiceSeparator />
              {sections.map((section, index) => (
                <Fragment key={section.id}>
                  {index > 0 && <ServiceSeparator />}
                  <ServiceSection id={section.id} label={section.label}>
                    {section.section}
                  </ServiceSection>
                </Fragment>
              ))}
              <ServiceAuthor />
            </div>
          </div>

          {/* Right Side */}
          <ServiceRightSideContent />
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;
