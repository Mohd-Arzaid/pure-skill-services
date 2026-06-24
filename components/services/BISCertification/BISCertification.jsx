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
  heading: "BIS Certification India for Importers and Manufacturers",
  description:
    "BIS certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.",
};

// const intro = (
//   <div className="flex flex-col gap-5">
//     <SectionHeadingTwo as="h1">
//       BIS Certification under FMCS Scheme
//     </SectionHeadingTwo>

//     <ServiceImage
//       src="/images/services/BISFM/BISCertificationforForeignManufacaturers.webp"
//       alt="BIS Certification for Foreign Manufacturers"
//       title="BIS Certification for Foreign Manufacturers"
//     />

//     <SectionHeadingThree as="h2">What is Indian BIS?</SectionHeadingThree>

//     <ServiceParagraph>
//       The Bureau of Indian Standards (BIS) is India's national standards body
//       under the Ministry of Consumer Affairs, Food and Public Distribution.
//       Established under the BIS Act 1986, and revised in 2016, BIS plays a
//       pivotal role in standardization, marking, and quality certification of
//       goods. It aims to ensure the quality, safety, and reliability of products
//       offered to Indian consumers.
//     </ServiceParagraph>

//     <ServiceParagraph>
//       A BIS License is mandatory for both Indian and foreign manufacturers to
//       manufacture, import or sell various products in India, listed in the BIS
//       mandatory certification category. To grant licenses BIS operates various
//       certification schemes like Product Certification Scheme (ISI Mark Scheme
//       for Indian Manufacturers), Hallmarking Scheme, BIS FMCS Scheme and many
//       more.
//     </ServiceParagraph>

//     <ServiceParagraph>
//       Foreign Manufacturers Certification Scheme (BIS FMCS) enables the overseas
//       manufacturers to apply for BIS certification to use the standard ISI mark
//       on their products. Foreign manufacturers can apply for BIS certification
//       by appointing an Authorized Indian Representative (AIR) to handle
//       compliance, documentation and communication with the Bureau of Indian
//       Standards.
//     </ServiceParagraph>
//   </div>
// );

const OverviewSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        BIS Certification in India | Complete Guide
      </SectionHeadingTwo>

      <ServiceImage
        src="/images/services/BISCertification/indian-bis-certification.webp"
        alt="Indian BIS Certification Schemes"
        title="BIS Certificate for Indian manufactures"
      />

      <SectionHeadingThree>What is BIS Certification?</SectionHeadingThree>

      <ServiceParagraph>
        BIS certification refers to the process of obtaining a quality standard
        certificate from the Bureau of Indian Standards (BIS) for manufacturing
        and selling various products in India. BIS offers various certification
        schemes through which the manufacturers can secure a BIS license to use
        the standard quality mark on their products. This standard mark
        showcases that their products comply with the required quality, safety
        and reliability standards as set by BIS.
      </ServiceParagraph>

      <ServiceParagraph>
        BIS certification is voluntary in nature but Bureau of Indian Standards
        made it mandatory for various products critical for consumers health and
        safety. BIS issues Quality Control Orders (QCO) to list the products that
        require a mandatory BIS license for manufacturing or importing in India.
      </ServiceParagraph>

      <ServiceParagraph>
        For many Indian manufacturers and importers securing BIS certification is
        a must. It covers a wide range of products including electrical
        appliances, cement and steel products, package drinking water,
        electronics like mobile phones, LED lights, power banks, precious metal
        jewelry (through hallmarking) and many more. The manufacturers and
        importers of these mandatory products cannot legally sell or distribute
        goods in India without BIS recognition.
      </ServiceParagraph>

      <SectionHeadingThree>Why BIS Certification Matters</SectionHeadingThree>

      <ServiceParagraph>
        Take for instance, a manufacturer from Germany who has invented a unique
        electronic device and is planning to sell it in the fast paced Indian
        Market. The device is unique, and safe and has also gained approvals in
        Europe. However, when the device is brought to the port in India, the
        customs officers hold the device. The question is, &quot;Why?&quot; The
        answer is, the device is supposed to have a BIS certification, which is
        a crucial part to sell electronic products in India.
      </ServiceParagraph>

      <ServiceParagraph>
        Many global and Indian manufacturers deal with the same instances every
        year. For Indian consumers, the BIS mark on a product is not just a
        logo, it is a mark of trust that the product has been tested for quality,
        safety, and reliability. For a business, it is the gateway to one of the
        largest markets in the entire world.
      </ServiceParagraph>

      <ServiceParagraph>
        This article will answer all the queries on BIS certification, its
        necessity, processes, benefits, schemes, costs, and the system and its
        navigation available to both foreign and domestic manufacturers.
      </ServiceParagraph>

      <SectionHeadingThree>A Brief History of BIS in India</SectionHeadingThree>

      <ServiceParagraph>
        The Bureau of Indian Standards (BIS) was formed in 1986 taking over the
        Indian Standards Institution (ISI) which was formed in 1947. BIS is now
        considered to be a quality guardian for standards in India and has
        aligned their practices to international levels and made the necessary
        amendments for the Indian conditions.
      </ServiceParagraph>

      <SectionHeadingThree>Remarkable Milestones</SectionHeadingThree>

      <ServiceList
        points={[
          "In 1947 the ISI was founded to support quality control systems after the country gained independence.",
          "In 1955 the ISI mark was awarded, becoming one of the most famous quality symbols in India.",
          "In 1986, the BIS Act was passed, replacing ISI with the Bureau of Indian Standards.",
          "In 2016 and 2018, further amendments enriched the BIS's responsibilities, making hallmarking and product certification more thorough.",
        ]}
      />

      <ServiceParagraph>
        Currently, BIS guarantees the safety, reliability, and standardization
        of thousands of tools and machinery for Indian users across multiple
        industries.
      </ServiceParagraph>

      <SectionHeadingThree>
        Why is BIS Certification mandatory in India?
      </SectionHeadingThree>

      <ServiceParagraph>
        The Indian market is enormous, ever-changing, and sensitive to price
        shifts. However, this openness also leaves the market exposed to cheap
        and unsafe goods. In this context, BIS certification acts as a protective
        barrier.
      </ServiceParagraph>

      <ServiceList
        points={[
          "Consumer Safety - protects people from potential accidents, health issues, and deceit.",
          "Market Regulation - ensures that non-conforming products do not enter the Indian market.",
          "Trust and Confidence - bolsters consumer belief in local and international products.",
          "Global Alignment - assists foreign companies in aligning with India's regulatory structure.",
          "Fair Competition - every market participant, irrespective of size, is assured of competing purely on quality.",
        ]}
      />

      <ServiceParagraph>
        BIS certification for packaged drinking water is an example of where
        lacking certification could pose health issues. Other equally lacking
        standards of product certification for heaters, toasters, and other
        electric appliances can lead to fires. Therefore, by having a BIS
        certification, the government makes sure these challenges are addressed.
      </ServiceParagraph>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div className="flex flex-col gap-5">
     
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        Role of Authorized Indian Representative (AIR) in BIS Certification
      </SectionHeadingTwo>

      <SectionHeadingThree>
        What is an Authorized Indian Representative (AIR)?
      </SectionHeadingThree>

      <ServiceParagraph>
        An Authorized Indian Representative (AIR) is a crucial intermediary
        appointed by a foreign manufacturer seeking BIS certification under the
        FMCS registration scheme. The AIR serves as the official liaison between
        the Bureau of Indian Standards (BIS) and the manufacturer, ensuring
        smooth communication, documentation handling, and coordination of the
        certification process.
      </ServiceParagraph>

      <SectionHeadingThree>
        Legal Requirement for AIR Appointment
      </SectionHeadingThree>

      <ServiceParagraph>
        As per BIS guidelines, any foreign manufacturer who does not have a
        registered office in India must appoint an AIR. This requirement ensures
        that BIS has a reliable, accessible point of contact within Indian
        jurisdiction.
      </ServiceParagraph>

      <SectionHeadingThree>Key Responsibilities of the AIR</SectionHeadingThree>

      <ServiceParagraph>
        The AIR&apos;s role spans the entire BIS certification process, from
        documentation and application submission to audit coordination and
        post-certification compliance:
      </ServiceParagraph>

      <ServiceTable
        className="mt-2"
        headers={["RESPONSIBILITY", "DESCRIPTION"]}
        rows={[
          [
            "Communication",
            "Acts as the point of contact with BIS officers and departments",
          ],
          [
            "Application Support",
            "Assists in filling forms, compiling documents, and submitting the application",
          ],
          [
            "Audit Coordination",
            "Coordinates factory inspection schedules and addresses auditor queries",
          ],
          [
            "Compliance Monitoring",
            "Ensures all testing and certification activities meet BIS norms",
          ],
          [
            "Renewal Management",
            "Oversees BIS licence renewal, documentation updates, and fee payments",
          ],
        ]}
      />

      <SectionHeadingThree>
        Eligibility Criteria to Become an AIR
      </SectionHeadingThree>

      <ServiceParagraph>
        To serve as an AIR, an individual or organization must :
      </ServiceParagraph>

      <ServiceList
        points={[
          "Be an Indian citizen or a legally registered business entity in India",
          "Have a physical address in India with a valid postal code",
          "Be capable of communicating fluently in English and local languages",
          "Understand the certification scheme, BIS documentation protocols, and regulatory expectations",
          "Be able to respond to audits and correspondence promptly on behalf of the foreign manufacturer",
        ]}
      />

      <SectionHeadingThree>Why the AIR Role is Vital</SectionHeadingThree>

      <ServiceParagraph>
        The AIR ensures continuity and accountability throughout the BIS
        certification process. Without an AIR:
      </ServiceParagraph>

      <ServiceList
        points={[
          "BIS has no jurisdiction to act against a non-complying foreign manufacturer",
          "Time-sensitive queries and audit schedules may get delayed",
          "The certification process can get stuck, revoked, or rejected",
        ]}
      />

      <ServiceParagraph>
        A proactive and experienced AIR significantly increases the chance of
        successful BIS certification.
      </ServiceParagraph>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        Documentation Required for BIS Certification under FMCS
      </SectionHeadingTwo>

      <ServiceTable
        className="mt-2"
        headers={["DOCUMENT TYPE", "PURPOSE"]}
        rows={[
          ["FMCS Application Form", "Official request for certification"],
          [
            "Manufacturing Equipment List",
            "Shows production capabilities",
          ],
          ["Raw Materials List", "Ensures input material quality"],
          [
            "Testing Equipment List",
            "Evaluates testing and compliance readiness",
          ],
          [
            "Calibration Certificates",
            "Proves test equipment accuracy",
          ],
          [
            "Factory Layout & Process Flow",
            "Helps auditors understand manufacturing stages",
          ],
          [
            "Test Certificates",
            "Proves quality of raw materials and final product",
          ],
          [
            "Quality Control Profile",
            "Verifies staff qualifications and SOPs",
          ],
          ["Payment Proof", "Validates fee submission to BIS"],
          [
            "Performance Bank Guarantee",
            "Acts as financial assurance for BIS",
          ],
        ]}
      />

      <SectionHeadingTwo as="h3">
        Detailed Breakdown of Each document required to Indian BIS
        certification
      </SectionHeadingTwo>

      <SectionHeadingThree>1. FMCS Application Form</SectionHeadingThree>

      <ServiceParagraph>
        This document provides general details about the foreign manufacturer,
        including:
      </ServiceParagraph>

      <ServiceList
        points={[
          "Product details (type, category, model)",
          "Intended Indian Standard",
          "Contact details of factory and AIR",
          "Manufacturing capacity and testing scope",
        ]}
      />

      <SectionHeadingThree>
        2. List of Manufacturing Equipment
      </SectionHeadingThree>

      <ServiceList
        points={[
          "Machine name and make",
          "Production capacity",
          "Contact details of factory and AIR",
          "Maintenance records (if applicable)",
        ]}
      />

      <SectionHeadingThree>3. List of Raw Materials</SectionHeadingThree>

      <ServiceList
        points={[
          "Source of procurement",
          "Grades and specifications",
          "Testing protocol (if any)",
        ]}
      />

      <SectionHeadingThree>4. List of Testing Equipment</SectionHeadingThree>

      <ServiceList
        points={[
          "Equipment name and manufacturer",
          "Compliance with test parameters in Indian Standard",
          "Location within the factory",
        ]}
      />

      <SectionHeadingThree>5. Calibration Certificates</SectionHeadingThree>

      <ServiceList
        points={[
          "Date of last calibration",
          "Validity period",
          "Certificate number",
        ]}
      />

      <SectionHeadingThree>
        6. Factory Layout & Process Flow Diagram
      </SectionHeadingThree>

      <ServiceList
        points={[
          "Entry and exit points",
          "Testing lab areas",
          "QC checkpoints",
          "Storage and packaging sections",
        ]}
      />

      <SectionHeadingThree>7. Performance Bank Guarantee</SectionHeadingThree>

      <ServiceParagraph>
        Issued by an RBI-approved Indian bank, the Performance Bank Guarantee
        (PBG) covers liability in case of non-compliance. This document must:
      </ServiceParagraph>

      <ServiceList
        points={[
          "Be on official bank letterhead",
          "Indicate guarantee period and amount",
          "Be signed and sealed",
        ]}
      />

      <SectionHeadingThree>
        Common documentation mistakes to avoid while applying for BIS
        certificate or Indian BIS.
      </SectionHeadingThree>

      <ServiceList
        points={[
          "Mismatch between form data and factory reality",
          "Submitting expired calibration reports",
          "Missing BIS fee proof",
          "Incomplete or vague process flows",
          "Naming inconsistencies between documents",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        Step-by-Step BIS Certification Process Under FMCS
      </SectionHeadingTwo>

      <SectionHeadingThree>
        Overview of the BIS Certification Journey
      </SectionHeadingThree>

      <ServiceParagraph>
        The BIS certification process under the Foreign Manufacturers
        Certification Scheme (FMCS) is methodical, structured, and multi-phased.
        It ensures that products comply with applicable Indian standards,
        manufacturing processes are robust, and testing is accurate.
      </ServiceParagraph>

      <SectionHeadingThree>
        Step-by-Step BIS license Process Summary Table
      </SectionHeadingThree>

      <ServiceTable
        className="mt-2"
        headers={["STEP", "DESCRIPTION"]}
        rows={[
          ["1", "Application Submission to BIS FMCD"],
          ["2", "Documentation Scrutiny and Initial Review"],
          ["3", "Query Resolution & Clarification Submission"],
          ["4", "Nomination of BIS Technical Auditor"],
          ["5", "Factory Audit Scheduling & Coordination via AIR"],
          ["6", "Factory Inspection & Sample Sealing by BIS Auditor"],
          ["7", "In-House Product Testing (if applicable)"],
          [
            "8",
            "Testing of Sealed Samples in BIS-Approved Labs in India",
          ],
          ["9", "Review of Test Reports & Audit Findings"],
          ["10", "Issuance of BIS License and Use of ISI Mark"],
        ]}
      />

      <SectionHeadingThree>
        Sample copy of BIS FMCS certificate.
      </SectionHeadingThree>

      <SectionHeadingTwo as="h3">Timeframe to Obtain BIS Certificate</SectionHeadingTwo>

      <SectionHeadingThree>
        Typical Duration from Application to Certificate
      </SectionHeadingThree>

      <ServiceParagraph>
        The BIS certification process under FMCS generally takes about 120
        working days (approximately 3–4 months) from the date of correct
        application submission. Delays often occur when documents are unclear
        or if the factory isn&apos;t audit ready.
      </ServiceParagraph>

      <ServiceImage
        src="/images/services/BISFM/biscertificate.png"
        alt="Sample BIS FMCS certificate"
        title="Sample BIS FMCS certificate"
      />

     

 
    </div>
  );
};

const CostingSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        BIS Certification Cost Structure Explained
      </SectionHeadingTwo>

      <SectionHeadingThree>
        Overview of BIS Certification Costs
      </SectionHeadingThree>

      <ServiceParagraph>
        Securing a BIS certificate under the Foreign Manufacturers
        Certification Scheme (FMCS) involves several types of costs. These cover
        everything from application submission and audits to product testing
        and mark usage.
      </ServiceParagraph>

      <ServiceParagraph>
        Foreign manufacturers must budget adequately to ensure timely payments,
        as failure to pay can lead to rejection of BIS certification mid-way.
      </ServiceParagraph>

      <ServiceTable
        className="mt-2"
        headers={["COST CATEGORY", "DESCRIPTION"]}
        rows={[
          [
            "Application Fee (INR 1000)",
            "Paid during submission of the FMCS application form for obtaining Indian BIS",
          ],
          [
            "Audit Charges (INR 7000)",
            "Covers BIS auditor travel, man-day rates, and related expenses",
          ],
          [
            "Product Testing Fees (As per product)",
            "For testing sealed samples at BIS-recognized labs in India",
          ],
          [
            "License Fee (INR 1000)",
            "One-time fee paid upon grant of BIS certificate",
          ],
          [
            "Marking Fee (As per product)",
            "Annual fee for usage of the ISI mark on certified products",
          ],
          [
            "Performance Bank Guarantee (USD 10,000)",
            "Financial guarantee deposited via Indian bank to ensure compliance",
          ],
        ]}
      />
    </div>
  );
};

const SurveillanceSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        Post BIS Certification Surveillance and Compliance Requirements
      </SectionHeadingTwo>

      <ServiceParagraph>
        Once a BIS certificate is granted, the responsibility doesn&apos;t end
        there. The BIS certification includes an ongoing surveillance and
        compliance system to ensure continuous adherence to Indian standards.
        This post-certification phase is crucial to maintaining your BIS
        license, retaining the right to use the ISI mark, and avoiding legal
        penalties or suspensions.
      </ServiceParagraph>

      <ServiceParagraph>
        Key Surveillance Components after obtaining BIS certificate Market
        Surveillance : Random product sampling from the Indian market for
        independent lab testing , if the sample fails the BIS certificate is
        suspended. It is done twice every year.
      </ServiceParagraph>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        Why Choose a BIS Certification Consultant?
      </SectionHeadingTwo>

      <ServiceParagraph>
        The BIS certification under the FMCS registration scheme is intricate,
        highly technical, and time-sensitive. While it is possible to pursue
        certification independently, most successful foreign manufacturers rely
        on BIS consultants to streamline the journey and minimize risks.
      </ServiceParagraph>

      <SectionHeadingThree>What Does a BIS Consultant Do?</SectionHeadingThree>

      <ServiceParagraph>
        A BIS certification consultant provides end-to-end guidance across every
        step of the process. Their core responsibilities include:
      </ServiceParagraph>

      <ServiceTable
        className="mt-2"
        headers={["TASK", "DESCRIPTION"]}
        rows={[
          [
            "Documentation",
            "Prepares, reviews, and formats all required documents",
          ],
          [
            "Application Support",
            "Submits and tracks your BIS application",
          ],
          [
            "Audit Preparation",
            "Guides factory teams to ensure audit readiness",
          ],
          [
            "Sample Coordination",
            "Manages sealing and shipment of samples to India",
          ],
          [
            "Testing Assistance",
            "Liaises with labs and helps interpret results",
          ],
          [
            "Renewal & Surveillance",
            "Oversees license extensions and compliance checks",
          ],
        ]}
      />

      <ServiceParagraph>
        They act as your strategic partner, often doubling as your Authorized
        Indian Representative (AIR).
      </ServiceParagraph>
    </div>
  );
};

const sections = [
  {
    id: "overview",
    label: "OVERVIEW",
    section: <OverviewSection />,
  },
  {
    id: "schemes",
    label: "SCHEMES",
    section: <SchemesSection />,
  },
  {
    id: "process",
    label: "PROCESS",
    section: <ProcessSection />,
  },
  {
    id: "documents",
    label: "DOCUMENTS",
    section: <DocumentsSection />,
  },
  {
    id: "cost",
    label: "COST",
    section: <CostSection />,
  },
  {
    id: "air",
    label: "AIR",
    section: <AIRSection />,
  },
  {
    id: "conclusion",
    label: "CONCLUSION",
    section: <ConclusionSection />,
  },
  {
    id: "faqs",
    label: "FAQS",
    section: <FAQSection />,
  },
];

const BISCertification = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS Certification India for Importers and Manufacturers"
      lang="en"
      hero={hero}
      // intro={<></>}
      sections={sections}
    />
  );
};

export default BISCertification;
