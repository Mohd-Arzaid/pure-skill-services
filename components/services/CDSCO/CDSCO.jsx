import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: "CDSCO Registration Certificate",
  description:
    "CDSCO license is mandatory for the manufacturing, import, sale, and distribution of all medical devices in India.",
};

const OverviewSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo as="h1">CDSCO Registration Certificate</SectionHeadingTwo>

    <SectionHeadingTwo>CDSCO Overview</SectionHeadingTwo>

    <ServiceParagraph>
      CDSCO stands for Central Drugs Standard Control Organisation (which comes
      under the Ministry of Health and Family Welfare), headquartered in Delhi
      and has 6 zonal offices in India namely at Mumbai, Kolkata, Chennai,
      Ghaziabad, Hyderabad and Ahmedabad and various other sub-zonal offices. It
      is the national regulatory body for products like cosmetics, drugs, medical
      devices, etc.
    </ServiceParagraph>

    <ServiceParagraph>
      Different divisions of the CDSCO are as below:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Medical device division (Drugs)",
        "Drugs",
        "Cosmetics",
        "Clinical Trial on medical devices division",
        "Vaccines",
        "BA/BE",
      ]}
    />
  </div>
);

const EligibilitySection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>CDSCO Certificate Eligibility</SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Eligibility for a CDSCO Certificate requires meeting regulatory
      guidelines.
    </ServiceParagraph>

    <ServiceParagraph>
      All manufacturers, either of Indian or foreign origin, can apply for the
      CDSCO license. In the case of a foreign manufacturer, the license will be
      granted to the manufacturer, and the Indian counterpart of the manufacturer
      will act as its authorized Indian Representative. The Indian representative
      of the manufacturer must have a valid state drugs license under Form
      20-B/21-B or Form 42 (applied under Form 41) as per the latest guidelines
      released by CDSCO.
    </ServiceParagraph>
  </div>
);

const ClassificationSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>CDSCO Device Classification</SectionHeadingTwo>

    <ServiceParagraph>
      Medical devices are categorized into four classes by the Medical Device
      Rules 2017:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Class A ( least risk )",
        "Class B ( Moderate risk )",
        "Class C ( Moderate to high risk )",
        "Class D ( High risk )",
      ]}
    />

    <ServiceParagraph>
      CDSCO Registration can be obtained through online portal registration:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Class A ( non sterile and non measuring ) products come under registration scheme.",
        "Class A ( Sterile or measuring ) products require license.",
      ]}
    />

    <ServiceParagraph>
      This brings us to the conclusion that products which are under Class A (
      sterile or measuring ), Class B, Class C and Class D require a license
      from CDSCO.
    </ServiceParagraph>
  </div>
);

const DocumentsSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>Required Documents for CDSCO LICENSE</SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      CDSCO registration for Class A products ( non-sterile and non-measuring
      ):
    </ServiceParagraph>

    <ServiceList
      points={[
        "Drugs license of importer (Required only for foreign manufacturer)",
        "Free sales certificate (Required only for foreign manufacturer)",
        "ISO certificate (Required only for foreign manufacturer)",
        "List of products to be registered",
        "Basic details about the product (example: storage temperature, shelf life, model number, etc.)",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      Class A ( sterile or measuring ), Class B, Class C and Class D:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Plant Master File (PMF)",
        "Device Master File (DMF)",
        "Manufacturing process flowchart",
        "Labels and user manual",
        "Design verification and validation",
        "Stability validation data",
        "Challan of the government fee paid",
      ]}
    />
  </div>
);

const RegistrationSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>Class A Product Registration Process</SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Process for CDSCO registration for Class A products ( non-sterile and
      non-measuring )
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Registration Steps:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Generation of login Credentials",
        "Registration of Indian / foreign manufacturer",
        "Registration of importer ( in case of import only )",
        "Addition of product details",
        "Submission of details to CDSCO",
        "Grant of registration",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      TIMELINE: CDSCO registration process will take 1 day after the documents are
      submitted to us.
    </ServiceParagraph>
  </div>
);

const LicensingSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingThree>Process For CDSCO License</SectionHeadingThree>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Licensing Steps:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Identifying the class of the medical device",
        "Making groups as per the guidelines mentioned as per CDSCO guidelines",
        "Creation of login credentials for the manufacturer",
        "Collection of documents from the overseas manufacturer",
        "Collection of documents from Indian importer",
        "Checking and vetting of documents as per the rules",
        "Payment of government fees",
        "Submission of Application online",
        "Clearing of queries ( if any )",
        "Audit of the firm",
        "Clearing of queries ( if any ) after the audit",
        "Grant of license",
        "Generation of CDSCO certificate",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      TIMELINE: Approx 6-8 weeks after submission of application.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      VALIDITY: It is granted for 5 years initially and renewed thereafter by
      paying the government fees.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Additional Notes:
    </ServiceParagraph>

    <ServiceList
      points={[
        "In case of CDSCO import license, AUDIT OF THE FOREIGN MANUFACTURER IS NOT CONDUCTED, and rest of the procedure remains the same.",
        "License number mentioned on the CDSCO registration certificate has to be mentioned on the products / packaging.",
        "Test license is also required in case of Indian manufacturers.",
        "SPECIALIZED LICENSES: If you are applying for a license for a new drug, biological product, or innovative medical device, additional approvals such as clinical trials or safety testing may be required.",
      ]}
    />

    <ServiceParagraph>
      For further assistance or to ensure proper filing, you can consult a
      regulatory consultant experienced in CDSCO processes.
    </ServiceParagraph>
  </div>
);

const ConsultingSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingThree>CDSCO License Consulting Services</SectionHeadingThree>

    <ServiceParagraph>
      As CDSCO registration certifications, our job is to ensure that the tiring
      procedures listed above become a cakewalk for you. Right from the
      beginning, i.e., from the stage of collection of documents from foreign
      manufacturers or preparation of documents for Indian manufacturers,
      conducting thorough compliance checks, coordinating submissions, addressing
      department queries, and following up with the department for the grant of
      a license, everything is under our scope of work.
    </ServiceParagraph>

    <ServiceParagraph>
      We are one of the most experienced CDSCO certifications in the field of
      medical products, we provide apex quality of services possible to all our
      national and international clients.
    </ServiceParagraph>
  </div>
);

const sections = [
  {
    id: "overview",
    label: "Overview",
    section: <OverviewSection />,
  },
  {
    id: "eligibility",
    label: "Eligibility",
    section: <EligibilitySection />,
  },
  {
    id: "classification",
    label: "Classification",
    section: <ClassificationSection />,
  },
  {
    id: "documents",
    label: "Documents",
    section: <DocumentsSection />,
  },
  {
    id: "registration",
    label: "Registration",
    section: <RegistrationSection />,
  },
  {
    id: "licensing",
    label: "Licensing",
    section: <LicensingSection />,
  },
  {
    id: "consulting",
    label: "Consulting",
    section: <ConsultingSection />,
  },
];

const faqs = [
  {
    question: "What services do you offer for CDSCO compliance?",
    answer:
      "We offer comprehensive CDSCO regulatory compliance services including product registration, license applications, regulatory strategy, documentation preparation, and post-approval compliance monitoring for pharmaceuticals, medical devices, and cosmetics in India.",
  },
  {
    question: "How long does the CDSCO approval process typically take?",
    answer:
      "CDSCO approval timelines vary based on product category and application type. Typically, drug approvals take 6-12 months, medical device registrations 3-6 months, and cosmetic registrations 2-4 months. Our certifications work to expedite these timelines through proper documentation and regulatory strategy.",
  },
  {
    question: "What documents are required for CDSCO registration?",
    answer:
      "Required documents include product dossiers, manufacturing information, stability data, clinical trial results (if applicable), Good Manufacturing Practice (GMP) certificates, Certificate of Pharmaceutical Product (CoPP), and various application forms specific to your product category. Our team assists in preparing all necessary documentation.",
  },
  {
    question: "Do you assist with clinical trial approvals in India?",
    answer:
      "Yes, we provide end-to-end support for clinical trial applications in India, including protocol development, ethics committee submissions, CDSCO applications, site selection assistance, and regulatory compliance throughout the trial process. We also help navigate the New Drugs and Clinical Trials Rules, 2019.",
  },
  {
    question: "What are the costs associated with CDSCO registrations?",
    answer:
      "CDSCO registration costs include official government fees (which vary by product type), testing fees, consultant fees, and potential inspection costs. We provide transparent quotations based on your specific product and requirements, with options for different service levels to fit various budgets.",
  },
  {
    question: "How do you handle post-approval regulatory requirements?",
    answer:
      "Our post-approval services include pharmacovigilance support, periodic safety update reports, variation applications, renewal submissions, compliance with labeling requirements, adverse event reporting, and ongoing regulatory intelligence to keep you informed of regulatory changes affecting your products.",
  },
  {
    question:
      "Can you help with import licenses for pharmaceuticals and medical devices?",
    answer:
      "Yes, we specialize in obtaining Import Licenses (Form 10) for drugs and Registration Certificates for medical devices. Our services include preparing all necessary documentation, coordinating with Indian authorized agents, liaising with CDSCO, and handling post-approval compliance requirements for imported products.",
  },
  {
    question:
      "What experience does your consulting team have with CDSCO regulations?",
    answer:
      "Our consulting team consists of regulatory experts with 10+ years of experience in Indian pharmaceutical regulations. Team members include former regulatory professionals, pharmacists, and industry specialists who maintain close relationships with regulatory authorities and stay updated on the latest regulatory developments.",
  },
  {
    question:
      "How do recent regulatory changes affect pharmaceutical registrations in India?",
    answer:
      "Recent regulatory changes include the New Drugs and Clinical Trials Rules (2019), Medical Device Rules (2017), and ongoing updates to the Drugs and Cosmetics Act. These changes have streamlined some processes while adding new requirements for safety monitoring and quality control. Our certifications keep abreast of all changes and adjust strategies accordingly.",
  },
  {
    question: "Do you offer support for manufacturing facility inspections?",
    answer:
      "Yes, we provide comprehensive support for CDSCO manufacturing facility inspections, including pre-inspection readiness assessments, gap analysis, preparation of required documentation, mock inspections, training of personnel, and assistance during actual inspections to ensure a successful outcome.",
  },
];

const CDSCO = () => (
  <ServicePageLayout
    breadcrumbLabel="CDSCO Registration Certificate"
    hero={hero}
    sections={sections}
    faqs={faqs}
    languages={[]}
  />
);

export default CDSCO;
