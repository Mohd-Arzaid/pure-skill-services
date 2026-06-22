import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  headingUpper: "BIS Certification",
  headingLower: "for foreign manufactures",
  description:
    "Foreign manufacturers need ISI mark for exports to India. Covers 600+ mandatory products and 20,000+ voluntary products.",
};

const BISFM = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS Mark (ISI License) for Foreign Manufacturers"
      lang="en"
      hero={hero}
    />
  );
};

export default BISFM;
