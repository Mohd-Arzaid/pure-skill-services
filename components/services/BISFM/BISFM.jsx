import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceImage,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: "BIS Certification for Foreign Manufacturers",
  description:
    "Foreign manufacturers need ISI mark for exports to India. Covers 600+ mandatory products and 20,000+ voluntary products.",
};

const intro = (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo as="h1">
      BIS Certification under FMCS Scheme
    </SectionHeadingTwo>

    <ServiceImage
      src="/images/services/BISFM/BISCertificationforForeignManufacaturers.webp"
      alt="BIS Certification for Foreign Manufacturers"
      title="BIS Certification for Foreign Manufacturers"
    />

    <SectionHeadingThree>What is Indian BIS?</SectionHeadingThree>

    <ServiceParagraph>
      The Bureau of Indian Standards (BIS) is India's national standards body
      under the Ministry of Consumer Affairs, Food and Public Distribution.
      Established under the BIS Act 1986, and revised in 2016, BIS plays a
      pivotal role in standardization, marking, and quality certification of
      goods. It aims to ensure the quality, safety, and reliability of products
      offered to Indian consumers.
    </ServiceParagraph>

    <ServiceParagraph>
      A BIS License is mandatory for both Indian and foreign manufacturers to
      manufacture, import or sell various products in India, listed in the BIS
      mandatory certification category. To grant licenses BIS operates various
      certification schemes like Product Certification Scheme (ISI Mark Scheme
      for Indian Manufacturers), Hallmarking Scheme, BIS FMCS Scheme and many
      more.
    </ServiceParagraph>

    <ServiceParagraph>
      Foreign Manufacturers Certification Scheme (BIS FMCS) enables the overseas
      manufacturers to apply for BIS certification to use the standard ISI mark
      on their products. Foreign manufacturers can apply for BIS certification
      by appointing an Authorized Indian Representative (AIR) to handle
      compliance, documentation and communication with the Bureau of Indian
      Standards.
    </ServiceParagraph>
  </div>
);

const OverviewSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        What is Foreign Manufacturers Certification Scheme (BIS FMCS)
      </SectionHeadingTwo>

      <ServiceParagraph>
        Foreign manufacturers certification scheme (FMCS) was introduced by the
        Bureau of Indian Standards in 2000 that allows the overseas
        manufacturers to use the standard mark (ISI Mark) on their products
        exported to India. Just like the Product Certification Scheme for Indian
        manufacturers, BIS FMCS scheme ensures that the products manufactured
        outside India must meet the same safety and quality standards benchmarks
        before being exported and sold in the Indian market.
      </ServiceParagraph>

      <SectionHeadingThree>Key Features and Scopes</SectionHeadingThree>

      <ServiceList
        points={[
          "Target: BIS FMCS covers manufacturing units located outside India. The scheme is available to manufacturers only; importers and traders cannot obtain a BIS licence under FMCS.",
          "Testing facilities: The manufacturing unit must have adequate in-house testing facilities and technically qualified quality control personnel to test products as per Indian Standards.",
          "Authorized Indian Representative (AIR): The foreign manufacturer must appoint an Indian resident as AIR to act as the local point of contact with BIS for compliance management.",
          "Products coverage: A wide range of products notified under Quality Control Orders (QCOs) issued by the Indian government—such as steel, cement, electrical appliances, chemicals, automotive parts, toys, and more.",
          "Exclusions: Electronics and IT products are excluded from this scheme; they are covered under the Bureau of Indian Standards Compulsory Registration Scheme (CRS).",
        ]}
      />

      <ServiceParagraph>
        BIS has listed over 600 products under mandatory certification, and over
        20,000 items are eligible for a voluntary BIS certificate.
      </ServiceParagraph>

      <SectionHeadingThree>
        Why BIS Certification is Crucial ?
      </SectionHeadingThree>

      <ServiceParagraph>
        Obtaining a BIS certificate is more than a legal requirement—it's a
        gateway to India's vast consumer market. Here are a few key reasons why
        it's essential:
      </ServiceParagraph>

      <ServiceList
        points={[
          "Legal Compliance: Products must comply with relevant Indian standards.",
          "Brand Credibility: The ISI mark serves as proof of quality and boosts consumer trust.",
          "Customs Clearance: Without a valid BIS licence, products may be rejected at customs.",
          "Market Access: Helps foreign brands gain seamless entry and widespread acceptance in India.",
          "Risk Mitigation: Ensures that products are safe, thus avoiding potential recalls and liability issues.",
        ]}
      />

      <SectionHeadingThree>
        Key Features of BIS certificate for foreign manufacturers
      </SectionHeadingThree>

      <ServiceTable
        headers={["FEATURE", "DESCRIPTION"]}
        rows={[
          ["Applicability", "Foreign manufacturers only"],
          ["Marking", "ISI mark + CM/L number"],
          ["Audit Requirement", "Mandatory factory inspection"],
          ["Testing", "Conducted at BIS-approved Indian labs"],
          ["Validity", "BIS license valid for 1-2 years"],
          ["Renewal", "Required upon expiry or product updates"],
          [
            "AIR (Authorized Indian Representative)",
            "Must be appointed to liaise with BIS",
          ],
          [
            "Performance Bank Guarantee",
            "Required from RBI-approved Indian bank",
          ],
        ]}
      />
    </div>
  );
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
