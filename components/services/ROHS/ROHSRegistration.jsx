import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceList,
  ServiceParagraph,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  heading: "ROHS Registration Certification",
  description:
    "Comprehensive RoHS Certification services for electronic products to ensure global market access and environmental compliance.",
};

const OverviewSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo as="h1">ROHS Registration Certification</SectionHeadingTwo>

    <SectionHeadingThree>RoHS Certification in India</SectionHeadingThree>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Essential compliance for electronic products in the global market
    </ServiceParagraph>

    <ServiceParagraph>
      Rapid growth in the electronics and electrical equipment industry, coupled
      with an increasing concern for the environment and the impact on human
      health, can be seen on a global scale. Hazardous materials in electronic
      products can adversely affect ecosystems and human life at all stages of a
      product&apos;s lifecycle from the manufacturing of the product, to its
      disposal, and everything in between. This and other similar global
      concerns have prompted the introduction of regulatory frameworks across the
      world, with one of the most noteworthy being the introduction of the RoHS
      Certification.
    </ServiceParagraph>

    <ServiceParagraph>
      In India, the surge in electronic consumption, the resultant increase in
      e-waste, and the regulation of the environment in India for the purpose
      of protecting it has made RoHS compliance essential. As a manufacturer,
      importer, distributor, or exporter of electrical and electronic equipment,
      gaining an understanding of RoHS certification is essential in order to be
      legally compliant and gain access to the European Union (EU) and other
      markets.
    </ServiceParagraph>

    <ServiceParagraph>
      This guide examines RoHS Certification in India in an all inclusive manner,
      explaining its meaning and scope, benefits, process, methods, costs,
      duration, and outlining steps that can be taken to obtain RoHS certification
      in India in the most streamlined manner.
    </ServiceParagraph>
  </div>
);

const ROHSMeaningSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      RoHS Certification Meaning and Full Form
    </SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Understanding the Restriction of Hazardous Substances Directive
    </ServiceParagraph>

    <ServiceParagraph>
      RoHS stands for &apos;Restriction of Hazardous Substances&apos;. In order
      to obtain the certification, it is necessary to comply with the RoHS
      Enforcement Regulation that requires the restriction of certain hazardous
      substances in electrical and electronic equipment (EEE).
    </ServiceParagraph>

    <ServiceParagraph>
      As part of the European Union&apos;s effort to address issues of health
      and environmental dangers of pollution stemming from the disposal of
      electronic equipment, the Restriction of Hazardous Substances (RoHS)
      Directive 2002/95/EC, was introduced. This directive came into effect on
      July 1, 2006, and all products that fall under its regulations and are sold
      in the EU must comply with its guidelines.
    </ServiceParagraph>

    <ServiceParagraph>
      Additionally, the directive has evolved through the years expanding its
      scope and imposition of additional restricted materials, including the
      RoHS 2 (2011/65/EU) and RoHS 3 (EU 2015/863) directives.
    </ServiceParagraph>
  </div>
);

const NecessitySection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Why RoHS Certification in India is Necessary
    </SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Environmental protection and legal compliance requirements
    </ServiceParagraph>

    <ServiceParagraph>
      Rapid technological advancements, coupled with shorter life cycles of
      electronic products, are significantly increasing the volume of electronic
      waste in India. The Ministry of Environment, Forest and Climate Change
      (MoEFCC) enacted the E-Waste (Management) Rules which now also require
      RoHS compliance for electrical and electronic equipment to be sold,
      manufactured, or imported into India.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      RoHS and E-Waste Rules in India
    </ServiceParagraph>

    <ServiceParagraph>
      Enforcement of RoHS compliance in India is done through the:
    </ServiceParagraph>

    <ServiceList
      points={[
        "E-Waste (Management) Rules, 2016",
        "Amended E-Waste Rules (2018 & 2022)",
      ]}
    />

    <ServiceParagraph>
      These regulations require producers to guarantee that the restricted
      materials are in compliance with the prescribed limits and to keep
      technical documentation for compliance verification.
    </ServiceParagraph>
  </div>
);

const ApplicabilitySection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>Who Needs to Obtain RoHS Certification?</SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Companies requiring RoHS compliance certification
    </ServiceParagraph>

    <ServiceParagraph>
      Any company that engages with the production, import, sale, or
      distribution of electrical and electronic equipment must ensure RoHS
      compliance, including:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Manufacturers of electronic products",
        "Importers of electrical and electronic products",
        "Exporters to the European Union",
        "Component and OEM manufacturers",
        "Distributors, traders, and resellers",
        "Assemblers and contract manufacturers",
      ]}
    />

    <ServiceParagraph>
      Even if you don&apos;t sell directly to the European Union, you may need
      RoHS compliant certification if your customers or integrators sell to RoHS
      regulated countries.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Products Covered Under RoHS
    </ServiceParagraph>

    <ServiceParagraph>
      RoHS covers a variety of electrical and electronic products such as:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Consumer electronics",
        "Telecommunications and IT equipment",
        "Electrical equipment used in industry",
        "Medical equipment",
        "Control and monitoring instruments",
        "Equipment used in lighting",
        "Electrical and electronic appliances",
        "Electrical tools and machines",
        "Power adapters and supplies",
        "PCBs",
        "Connectors, cables, and other components",
      ]}
    />
  </div>
);

const RestrictedSubstancesSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Substances Restricted Under RoHS Certification
    </SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Hazardous materials limited by RoHS compliance
    </ServiceParagraph>

    <ServiceParagraph>
      RoHS has set certain limits that regulate the use of hazardous substances.
      The substances that are presently restricted under the RoHS directive
      include:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Lead (Pb)",
        "Mercury (Hg)",
        "Cadmium (Cd)",
        "Hexavalent Chromium (Cr⁶⁺)",
        "Polybrominated Biphenyls (PBB)",
        "Polybrominated Diphenyl Ethers (PBDE)",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      Environmental and Health Impact
    </ServiceParagraph>

    <ServiceParagraph>These substances are known to:</ServiceParagraph>

    <ServiceList
      points={[
        "Leach contaminants into landfill sites",
        "Pollute the groundwater with toxic contaminants",
        "Cause neurological disorders, respiratory disorders, and reproductive disorders",
        "Create an occupational hazard during the manufacturing and recycling process",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      Products Exempted from RoHS Certification
    </ServiceParagraph>

    <ServiceParagraph>
      The following product categories are exempt from RoHS compliance:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Military and national defense products",
        "Products that do not use electricity",
        "Equipment that does not use electricity to accomplish its primary purpose",
        "Sub-assemblies or components of exempt products",
        "Products that assist Micro, Small, and Medium Enterprises (MSMEs) under the MSME Development Act, 2006",
        "Batteries",
        "Equipment that contains radioactive waste",
      ]}
    />
  </div>
);

const ProcessSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Procedure to Obtain RoHS Certification in India
    </SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Step-by-step certification process for RoHS compliance
    </ServiceParagraph>

    <ServiceParagraph>
      For businesses that wish to achieve compliance and expand their market,
      knowing the procedure to obtain RoHS certification in India is essential.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Step-by-Step Certification Process for RoHS
    </ServiceParagraph>

    <SectionHeadingThree as="div">
      Step 1. Product Finalization
    </SectionHeadingThree>

    <ServiceParagraph>
      Specify and finalize the product(s) that needs to be certified. This may
      include:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Single products",
        "Product lines",
        "Multiple variants that share the same design and materials",
      ]}
    />

    <SectionHeadingThree as="div">
      Step 2. Submission of Application
    </SectionHeadingThree>

    <ServiceParagraph>
      Fill out the application form and send it to a certifying body like Sun
      Certifications to begin the process along with a few basic details about
      the product and the company.
    </ServiceParagraph>

    <SectionHeadingThree as="div">Step 3. Review of Documents</SectionHeadingThree>

    <ServiceParagraph>
      The initial documents are scanned to evaluate the readiness of the applicant
      for compliance. These include:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Bills of materials",
        "Supplier declarations",
        "Material safety data sheets",
        "Prior test reports (if any)",
      ]}
    />

    <SectionHeadingThree as="div">
      Step 4. Testing and Verification for ROHS
    </SectionHeadingThree>

    <ServiceParagraph>
      Testing is done per the given guidelines to check the level of restricted
      substances.
    </ServiceParagraph>

    <SectionHeadingThree as="div">
      Step 5. Product Audit and Evaluation
    </SectionHeadingThree>

    <ServiceParagraph>
      The audit of the manufacturing company and the processes is done to check
      for the evidence of continuing compliance.
    </ServiceParagraph>

    <SectionHeadingThree as="div">
      Step 6. Final Submission of Documentation
    </SectionHeadingThree>

    <ServiceParagraph>
      All the extra explanation and corrective action documents are submitted.
    </ServiceParagraph>

    <SectionHeadingThree as="div">Step 7. Review and Evaluation</SectionHeadingThree>

    <ServiceParagraph>
      The certifying body reviews the documentation with respect to the tests
      and audit results.
    </ServiceParagraph>

    <SectionHeadingThree as="div">
      Step 8. Distribution of ROHS Certificate
    </SectionHeadingThree>

    <ServiceParagraph>
      The Document of Compliance and covering certificate is provided to the
      applicant after successful evaluations.
    </ServiceParagraph>
  </div>
);

const TestingSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Technologies and Methods for Testing Compliance with ROHS
    </SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Testing methods and technologies for RoHS compliance verification
    </ServiceParagraph>

    <ServiceParagraph>
      Testing is the foundation of compliance verification ROHS certification
      check.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Common Testing Methods
    </ServiceParagraph>

    <SectionHeadingThree as="div">
      1. X-Ray Fluorescence (XRF)
    </SectionHeadingThree>

    <ServiceList
      points={[
        "Can be done without damaging product",
        "Quick screening technique",
        "Best suited for metals, connectors, pins, and terminals",
      ]}
    />

    <SectionHeadingThree as="div">2. Destructive Testing</SectionHeadingThree>

    <ServiceList
      points={[
        "Used for PCBs, relays, and switches.",
        "Components get destroyed during analysis.",
        "Results are very accurate.",
      ]}
    />

    <SectionHeadingThree as="div">3. Eddy Current Testing</SectionHeadingThree>

    <ServiceList
      points={[
        "Used for coils, transformers, and inductors.",
        "Can be done with or without damaging the parts.",
      ]}
    />

    <SectionHeadingThree as="div">4. Mechanical Sorting</SectionHeadingThree>

    <ServiceParagraph>
      Used for differentiating plastic and metal components.
    </ServiceParagraph>

    <SectionHeadingThree as="div">5. Metal Detection</SectionHeadingThree>

    <ServiceParagraph>
      Used for ensuring critical metals don&apos;t get into production lines.
    </ServiceParagraph>

    <ServiceParagraph>
      On-site screening makes use of Portable RoHS analyzers and XRF metal
      analyzers.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Technical File Requirements for RoHS Certification
    </ServiceParagraph>

    <ServiceParagraph>
      To be compliant with RoHS, a complete technical file is necessary. Important
      technical documents are the following:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Description and specs of product",
        "Drawings of design and structure",
        "Risk assessment of materials, parts, and subassemblies",
        "Conformity declarations of the suppliers",
        "Records of manufacturing processes",
        "Reports of tests and evidence of compliance",
        "Standards and specifications that are applicable",
      ]}
    />

    <ServiceParagraph>
      These documents should be kept and made available to the authorities when
      they ask for them.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      RoHS Certification logo and the CE Mark
    </ServiceParagraph>

    <ServiceParagraph>
      The logo for RoHS certifies that the product has complied with the
      restriction of hazardous substances, and it can be used once the product
      has been certified.
    </ServiceParagraph>

    <ServiceParagraph>
      In addition to meeting the RoHS requirements, for products that are to be
      sold in the EU, the products must also be CE marked, which shows compliance
      with the safety, health, and environmental protection requirements of the
      EU.
    </ServiceParagraph>
  </div>
);

const CostsBenefitsSection = () => (
  <div className="flex flex-col gap-5">
    <SectionHeadingTwo>
      Cost, Timeline and Benefits of RoHS Certification
    </SectionHeadingTwo>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Understanding investment requirements and returns for RoHS compliance
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Cost of RoHS Certification in India
    </ServiceParagraph>

    <ServiceParagraph>
      The first question businesses have is pertaining to the cost of the RoHS
      certification. Considerations for RoHS Certification Cost in India:
    </ServiceParagraph>

    <ServiceList
      points={[
        "Product types or their variants",
        "Product intricacy",
        "Amount of parts",
        "Required testing methodologies",
        "Fees for laboratory services",
        "Inspections and audits",
        "Costs for documentation",
      ]}
    />

    <ServiceParagraph>
      The cost of RoHS certification varies across India, and the price range is
      between Rs. 25,000 and Rs. 1,50,000 or more, and this varies because of
      the scope and testing required.
    </ServiceParagraph>

    <ServiceParagraph>
      Best practice is to work with a certification body that has enough
      experience in the industry, as they will reduce costs for you by avoiding
      documentation mistakes that lead to re-testing.
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Timeline and Duration of RoHS Certifications
    </ServiceParagraph>

    <ServiceList
      points={[
        "Duration: Approximately 2 weeks (however, this highly depends on the complexity of the product)",
        "Duration of Validity: 5 years",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      What Are the RoHS Certification Benefits?
    </ServiceParagraph>

    <ServiceParagraph className="font-semibold text-neutral-800">
      Legal & Market Benefits
    </ServiceParagraph>

    <ServiceList
      points={[
        "Compulsory for EU exports",
        "Stops product recalls and penalties",
        "Prevents €1 million fines and 2% of annual company revenue fines",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      Business & Competition
    </ServiceParagraph>

    <ServiceList
      points={[
        "Heightens the reputation of the brand",
        "Increases the trust of customers",
        "Opens the door to more global sales",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      Social Responsibility
    </ServiceParagraph>

    <ServiceList
      points={[
        "Decreases manufacturing waste",
        "Encourages responsible and sustainable manufacturing processes",
      ]}
    />

    <ServiceParagraph className="font-semibold text-neutral-800">
      Conclusion
    </ServiceParagraph>

    <ServiceParagraph>
      Obtaining RoHS certificates is a requirement that businesses operating in
      the spheres of electrical and electronic equipment must meet. The
      advantages that RoHS compliance has, including market growth and
      environmental sustainability, far exceed the effort and expense for
      compliance.
    </ServiceParagraph>

    <ServiceParagraph>
      To obtain RoHS certification, proper documentation must be completed, and
      working with a certification body with experience is a good strategy for
      businesses to optimize compliance, minimize risk, and achieve
      sustainability.
    </ServiceParagraph>

    <ServiceParagraph>
      As the global market continues to experience tighter regulations, obtaining
      RoHS compliant certification is an investment in the future of your
      business.
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
    id: "rohs-meaning",
    label: "RoHS Meaning",
    section: <ROHSMeaningSection />,
  },
  {
    id: "necessity",
    label: "Necessity",
    section: <NecessitySection />,
  },
  {
    id: "applicability",
    label: "Applicability",
    section: <ApplicabilitySection />,
  },
  {
    id: "restricted-substances",
    label: "Restricted Substances",
    section: <RestrictedSubstancesSection />,
  },
  {
    id: "process",
    label: "Process",
    section: <ProcessSection />,
  },
  {
    id: "testing",
    label: "Testing",
    section: <TestingSection />,
  },
  {
    id: "costs-benefits",
    label: "Costs & Benefits",
    section: <CostsBenefitsSection />,
  },
];

const faqs = [
  {
    question: "What is RoHS?",
    answer:
      "RoHS stands for Restriction of Hazardous Substances. RoHS, also known as Directive 2002/95/EC, originated in the European Union and restricts the use of specific hazardous materials found in electrical and electronic products (known as EEE). All applicable products in the EU market after July 1, 2006 must pass RoHS compliance.",
  },
  {
    question: "Is RoHS mandatory in India?",
    answer:
      "Yes, RoHS compliance (Restriction of Hazardous Substances) is mandatory in India for many electronic and electrical equipment (EEE) manufacturers and importers primarily through the E-Waste (Management) Rules, which mirror the EU directive and require reducing hazardous substances like lead, mercury, and cadmium in products sold in India.",
  },
  {
    question: "What are the restricted materials mandated under RoHS?",
    answer:
      "The substances banned under RoHS are lead (Pb), mercury (Hg), cadmium (Cd), hexavalent chromium (CrVI), polybrominated biphenyls (PBB), polybrominated diphenyl ethers (PBDE), and four different phthalates (DEHP, BBP, BBP, DIBP).",
  },
  {
    question: "Why is RoHS compliance important?",
    answer:
      "The restricted materials are hazardous to the environment and pollute landfills, and are dangerous in terms of occupational exposure during manufacturing and recycling.",
  },
  {
    question: "Who issues the RoHS certificate?",
    answer:
      "Central Pollution Control Board (CPCB) shall conduct random sampling of electrical and electronic equipment placed on the market to monitor and verify the compliance of Reduction of Hazardous Substances provisions and the cost for sample and testing shall be borne by the Producer.",
  },
  {
    question: "How are products tested for RoHS compliance?",
    answer:
      "Portable RoHS analyzers, also known as X-ray fluorescence or XRF metal analyzers, are used for screening and verification of the restricted metals. With the advent of RoHS 3 and the four added phthalates, different testing is needed to ascertain levels of these compounds, which are extracted with a solvent. For more information, see RoHS Testing.",
  },
  {
    question: "Which companies are affected by the RoHS Directive?",
    answer:
      "Any business that sells or distributes applicable EEE products, sub-assemblies, components, or cables directly to EU countries, or sells to resellers, distributors or integrators that in turn sell products to EU countries, is impacted if they utilize any of the restricted materials. Since RoHS-like regulations have spread to a number of other countries, this just doesn't apply to EU countries anymore. RoHS also applies to the metal industry for any application of metal plating, anodizing, chromating or other finishes on EEE components, heatsinks, or connectors.",
  },
  {
    question: "What happens if a product is not RoHS compliant?",
    answer:
      "Suppose a product is not compliant with RoHS and placed on the European Union (EU) market. In that case, there can be legal and financial consequences for the manufacturer, importer, distributor, or any party responsible for the non-compliant product.",
  },
  {
    question: "What is the cost of RoHS certification in India?",
    answer:
      "The cost of RoHS certification varies across India, and the price range is between Rs. 25,000 and Rs. 1,50,000 or more, and this varies because of the scope and testing required. Considerations include product types, complexity, number of parts, testing methodologies, laboratory fees, inspections, and documentation costs.",
  },
  {
    question: "How long does RoHS certification take?",
    answer:
      "The duration for RoHS certification is approximately 2 weeks, however, this highly depends on the complexity of the product. The certification is valid for 5 years from the date of issue.",
  },
];

const ROHSRegistration = () => (
  <ServicePageLayout
    breadcrumbLabel="ROHS Registration Certification"
    hero={hero}
    sections={sections}
    faqs={faqs}
    languages={[]}
  />
);

export default ROHSRegistration;
