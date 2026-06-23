import { SectionHeadingTwo, ServiceImage } from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  headingUpper: "BIS Certification",
  headingLower: "for foreign manufactures",
  description:
    "Foreign manufacturers need ISI mark for exports to India. Covers 600+ mandatory products and 20,000+ voluntary products.",
};

const intro = (
  <div className="flex flex-col gap-2">
    <SectionHeadingTwo>BIS Certification under FMCS Scheme</SectionHeadingTwo>

    <div className="flex justify-center">
      <ServiceImage
        src="/images/services/BISFM/BISCertificationforForeignManufacaturers.webp"
        alt="BIS Certification for Foreign Manufacturers"
        title="BIS Certification for Foreign Manufacturers"
      />
    </div>
  </div>
);

const OverviewSection = () => {
  return <div className=""></div>;
};

const StandardizationSection = () => {
  return <div>StandardizationSection</div>;
};

const RepresentationSection = () => {
  return <div>RepresentationSection</div>;
};

const DocumentSection = () => {
  return <div>DocumentSection</div>;
};

const ProcessSection = () => {
  return <div>ProcessSection</div>;
};

const CostingSection = () => {
  return <div>CostingSection</div>;
};

const SurveillanceSection = () => {
  return <div>SurveillanceSection</div>;
};

const FacilitatorSection = () => {
  return <div>FacilitatorSection</div>;
};

const sections = [
  {
    id: "overview",
    label: "Overview",
    section: <OverviewSection />,
  },
  // {
  //   id: "standardization",
  //   label: "Standardization",
  //   section: <StandardizationSection />,
  // },
  // {
  //   id: "representation",
  //   label: "Representation",
  //   section: <RepresentationSection />,
  // },
  // {
  //   id: "document",
  //   label: "Document",
  //   section: <DocumentSection />,
  // },
  // {
  //   id: "process",
  //   label: "Process",
  //   section: <ProcessSection />,
  // },
  // {
  //   id: "costing",
  //   label: "Costing",
  //   section: <CostingSection />,
  // },
  // {
  //   id: "surveillance",
  //   label: "Surveillance",
  //   section: <SurveillanceSection />,
  // },
  // {
  //   id: "facilitator",
  //   label: "Facilitator",
  //   section: <FacilitatorSection />,
  // },
];

const BISFM = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS Mark (ISI License) for Foreign Manufacturers"
      lang="en"
      hero={hero}
      intro={intro}
      sections={sections}
    />
  );
};

export default BISFM;
