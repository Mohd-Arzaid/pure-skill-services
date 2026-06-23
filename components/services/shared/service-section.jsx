import { ServiceIndexHeading } from "./service-content";

const ServiceSection = ({ id, label, section }) => (
  <div id={id} className="flex flex-col scroll-mt-36">
    <ServiceIndexHeading>{label}</ServiceIndexHeading>
    {section}
  </div>
);

export default ServiceSection;
