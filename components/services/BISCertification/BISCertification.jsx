import Link from "next/link";
import { Check } from "lucide-react";
import {
  SectionHeadingThree,
  SectionHeadingTwo,
  ServiceImage,
  ServiceList,
  ServiceParagraph,
  ServiceTable,
} from "../shared/service-content";
import ServicePageLayout from "../shared/service-page-layout";

const FMCS_PAGE =
  "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis";

const schemeLinkClass = "text-[#1A8781] hover:underline font-medium";

const SchemeCallout = ({ children }) => (
  <div className="border-l-4 border-[#1A8781] bg-[#B9DEEB]/30 px-4 py-3 rounded-r-lg">
    <p className="font-inter text-sm md:text-base text-neutral-600">{children}</p>
  </div>
);

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
  const schemeIndexItems = [
    {
      content: (
        <Link href={FMCS_PAGE} className={schemeLinkClass}>
          FMCS – Foreign Manufacturers Certification Scheme
        </Link>
      ),
    },
    {
      content: (
        <Link href="#" className={schemeLinkClass}>
          ISI Mark Scheme (Domestic Manufacturers)
        </Link>
      ),
    },
    {
      content: (
        <Link href="#" className={schemeLinkClass}>
          Scheme X under Indian BIS
        </Link>
      ),
    },
    {
      content: (
        <Link href="#" className={schemeLinkClass}>
          CRS – Compulsory Registration Scheme
        </Link>
      ),
    },
    { content: "Hallmarking Scheme (Jewellery & Precious Metals)" },
    { content: "Eco Mark Certification" },
    { content: "Management Systems Certification Scheme (MSCS)" },
    { content: "LRS (Lab Recognition Scheme)" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>BIS Certification Schemes</SectionHeadingTwo>

      <ServiceParagraph>
        BIS has numerous certification schemes designed for varied industries and
        product types. Each is designed to address the particular needs of the
        industry and the product.
      </ServiceParagraph>

      <ul className="flex flex-col gap-5">
        {schemeIndexItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-neutral-100 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-6 min-h-6 mt-0.5">
              <Check size={12} className="text-neutral-800" />
            </div>
            <p className="font-inter text-sm md:text-base text-neutral-600 text-left max-w-full flex-1">
              {item.content}
            </p>
          </li>
        ))}
      </ul>

      <SectionHeadingThree>
        ISI Mark Scheme (Domestic Manufacturers)
      </SectionHeadingThree>

      <ServiceParagraph>
        A BIS license is a prerequisite for Indian manufacturers to ensure legal
        sales. The Bureau of Indian Standards (BIS) issues this to certify
        quality, safety, and performance. The process includes factory audits,
        product testing, and compliance checks. Once passed, manufacturers can use
        the ISI mark.
      </ServiceParagraph>

      <ServiceParagraph>
        Obtaining a certificate is essential for market access across industries
        like electronics, steel, cement, and plastic. It notes benefits like
        participating in government contracts and warns of repercussions for
        non-compliance, such as legal fines, product recalls, or sales bans.
      </ServiceParagraph>

      <ServiceParagraph>
        The ISI mark is the most prestigious. It requires testing at
        BIS-recognized facilities and site inspections. Supplying products like
        cement, LPG cylinders, electrical cables, and packaged drinking water
        without the ISI mark is an offense.
      </ServiceParagraph>

      <SchemeCallout>
        Get complete details about BIS certification for Indian manufacturers,
        Click:{" "}
        <Link href="#" className={schemeLinkClass}>
          ISI Mark Certification Scheme
        </Link>
      </SchemeCallout>

      <SectionHeadingThree>
        FMCS – Foreign Manufacturers Certification Scheme
      </SectionHeadingThree>

      <ServiceParagraph>
        FMCS is a scheme for foreign companies wishing to enter the Indian
        market. It guarantees safety, quality, and performance assurance for
        products manufactured abroad according to Indian standards. Foreign
        companies must acquire a BIS certificate or license to use the ISI mark,
        which involves factory evaluation and rigorous product sample testing.
      </ServiceParagraph>

      <ServiceParagraph>
        A foreign manufacturer is required to appoint an Authorized Indian
        Representative (AIR), who is responsible for communication and
        coordination, as the first point of contact with the Bureau of Indian
        Standards (BIS) for the scheme. It includes the filing of an
        application, in depth compliance evaluation, and the assumption of all
        necessary obligations to achieve compliance within the deadlines. As a
        result of following the FMCS guidelines, foreign companies are able to
        enter the Indian market, as well as acquire goodwill with the customers.
        Any product with an ISI mark shows a high level of quality, safety, and
        reliability assurance in India.
      </ServiceParagraph>

      <ServiceParagraph>
        No foreign products which fall under the regulated categories are allowed
        to enter India without the FMCS certification.
      </ServiceParagraph>

      <SchemeCallout>
        Get complete details about BIS certification for foreign manufacturers,
        Click:{" "}
        <Link href={FMCS_PAGE} className={schemeLinkClass}>
          FMCS – Foreign Manufacturers Certification Scheme
        </Link>
      </SchemeCallout>

      <SectionHeadingThree>
        Scheme X (Omnibus Technical Regulation)
      </SectionHeadingThree>

      <ServiceParagraph>
        Scheme X, or the Omnibus Technical Regulation, is another BIS
        certification Scheme designed by the Bureau of Indian Standards to help
        simplify the compliance procedures of industries in mechanical and
        electrical domains. Unlike the other certification schemes, Scheme X
        focuses on reducing documentation, assessments, and approvals while
        ensuring that products adhere to the Indian Standards. The products with
        the standard mark are of exceptional quality and safety and can be sold
        after undergoing type testing, factory inspections, and simple
        certification of mandatory requirements.
      </ServiceParagraph>

      <ServiceParagraph>
        The scheme X covers heavy machinery and electrical equipment safety
        guidelines for products such as pumps, cranes, transformers, machine
        tools and other heavy engineering products. These are the most pertinent
        industries and all where reliability and safety is a necessity. Scheme
        X is convenient as it shortens the time and costs of the complex BIS
        certification. It aims to streamline the compliance process in order to
        facilitate quicker clearance for marketing and enhanced reputation without
        compromising the quality and safety standards. The enduring and
        traditional reputation of the Bureau of Indian Standards enables easier
        international trade, indispensable for companies to meet compliance
        requirements and boost competitiveness.
      </ServiceParagraph>

      <ServiceParagraph>
        BIS Scheme X is mandatory to access the Indian heavy machine industry.
        This new scheme is important for improved market competition, innovation
        and compliance to regulations which are streamlined through this
        simplified yet robust structure.
      </ServiceParagraph>

      <SchemeCallout>
        Get complete details about BIS Scheme X Certification, Click:{" "}
        <Link href="#" className={schemeLinkClass}>
          Scheme X (Omnibus Technical Regulation)
        </Link>
      </SchemeCallout>

      <SectionHeadingThree>
        Compulsory Registration Scheme (CRS)
      </SectionHeadingThree>

      <ServiceParagraph>
        The Bureau of Indian Standards (BIS) has developed a BIS certification
        program called the Compulsory Registration Scheme (CRS) aimed at
        regulating IT and electronic products in India. It focuses on assessing
        the safety and quality of high-risk products like LED lights, mobile
        phones, laptops, power banks, and other consumer electronics against
        Indian Standards. CRS, in contrast to the ISI scheme, does not issue an
        ISI mark, but certified products, in compliance with the scheme, bear a
        CRS mark with a unique registration number. All electronics and IT
        products need to be tested in the BIS-recognized laboratories and
        formally registered with BIS CRS, used to ensure compliance before they
        can be sold or imported into India.
      </ServiceParagraph>

      <ServiceParagraph>
        This scheme is essential for protecting Indian consumers from unsafe,
        substandard, or counterfeit electronics, particularly in the case of the
        rapidly growing digital market. Both Indian and foreign manufacturers
        need to acquire CRS certification. The foreign companies must appoint an
        Authorized Indian Representative AIR to ensure compliance. The BIS
        continually updates the list of products covered under the CRS to include
        new products and technologies and emerging safety issues. For
        manufacturers, obtaining BIS registration under CRS is an added advantage
        since it helps in regulatory compliance and it also increases
        customer&apos;s trust, company&apos;s reputation, and market access in the
        electronics industry in India.
      </ServiceParagraph>

      <SchemeCallout>
        Get complete details about BIS CRS Certification, Click:{" "}
        <Link href="#" className={schemeLinkClass}>
          Compulsory Registration Scheme (CRS)
        </Link>
      </SchemeCallout>

      <SectionHeadingThree>Hallmarking Scheme</SectionHeadingThree>

      <ServiceParagraph>
        In India, hallmarking of gold and silver jewellery is compulsory under
        the Hallmarking Scheme and regulated by the Bureau of Indian Standards
        (BIS) which guarantees the purity and genuineness of the jewellery.
        Precious Metal articles are tested at BIS approved Assaying and
        Hallmarking Centres (AHC) and are then stamped with hallmark signs. This
        process is only completed if the articles fulfill the Indian Standards
        laid out at the start. Jewelers must first acquire a BIS license which
        allows them to sell hallmarked jewellery. This is the only way to do so
        legally. The jeweler is obliged to undergo and complete product testing,
        BIS audits, and continuous compliance monitoring to sell hallmarked
        jewellery. The process, in the end, protects the consumer and ensures
        the purity, weight and quality and limits malpractice as well as fraud in
        the jewellery market.
      </ServiceParagraph>

      <ServiceParagraph>
        For Indian consumers, gold and silver are not just ornaments but also
        major investments, which makes trust and transparency essential. The
        hallmarking jewelry is a mark of assurance for the common citizen in the
        country that every piece of jewelry for sale has gone through extensive
        testing against various national benchmarks and fair trading practices.
        Jewelers can showcase their credibility and market reputation by
        hallmarking jewelry. The inability to comply with the rules set brings
        punishment which can include suspension of license. For hallmarking under
        BIS, it serves as a fulfillment of principle-based and legal
        obligations. This not only increases consumer satisfaction but also
        enhances the Indian jewellery market as a whole. This is also the case
        for smaller retailers as well as larger scale manufacturers.
      </ServiceParagraph>

      <SectionHeadingThree>Eco Mark Certification</SectionHeadingThree>

      <ServiceParagraph>
        The Eco Mark is an innovation-centered recognition scheme created by the
        Bureau of Indian Standards (BIS) aimed at the promotion of eco-friendly
        goods. Unlike the traditional certification which concerns itself
        prominently with safety and quality parameters, the Eco Mark is awarded
        to goods which conform to Indian Standards and which show at least some
        reduced level of the adverse environmental impact during any one or more
        of the various stages of the life cycle of the goods. Eco Mark
        certification is awarded only after considerable testing and the proving
        of criteria - compliance which includes emission levels, non-toxicity, the
        rate of biodegrade, capacity to recycle and overall interactions with
        the system. Eco Mark, just like the ISI mark, is an emblem of assurance
        from the government which has been granted the status of a certification
        mark, albeit with more pronounced goals of environmental sustainability.
      </ServiceParagraph>

      <ServiceParagraph>
        The BIS licence with Eco Mark certifies that a company engages in
        responsible manufacturing and cares about the environment. It ensures
        compliance with the law and creates a competitive advantage with
        protective consumers and sustainability-oriented businesses. Eco Mark
        helps for the industry to trust and adopt green practices and for the
        consumers to trust that the products they buy are safe and environmentally
        responsible. Eco Mark supports India&apos;s vision for enhanced quality
        protection with environmental protection under BIS.
      </ServiceParagraph>

      <SectionHeadingThree>
        Management Systems Certification Scheme (MSCS)
      </SectionHeadingThree>

      <ServiceParagraph>
        The Management Systems Certification Scheme (MSCS) initiated by the Bureau
        of Indian Standards (BIS) is a stepwise procedure which evaluates and
        recognizes concerned firms for the implementation of internationally
        accepted and recognized management systems. MSCS framework consists of
        ISO Standards like ISO 9001 Quality Management, ISO 14001 Environment
        Management, ISO 45001 Occupational Health and Safety Management System
        and others. MSCS certifies the firm for the legal operations,
        consistency, and continuous improvement of the operations. Certified
        firms go through numerous assessments and audits which helps them build
        trust among the customers, regulators, and stakeholders which strengthens
        the guarantee of safety, quality, and sustainability.
      </ServiceParagraph>

      <ServiceParagraph>
        BIS is the national standards body of India and is the certifying body
        for the enhancement of the organization&apos;s reputation and credibility
        domestically and outside India. MSCS besides fostering accountability
        through periodic supervision and recertification also frees up a
        business to actively support public led programs like Make in India and
        Atmanirbhar Bharat. Besides legal obligation, the scheme also helps in
        cultivating a culture of integrity, efficiency and fair trading. MSCS
        encourages the trade and investment by the certified companies and BIS
        plays a crucial part in the development of the quality ecosystem of the
        country.
      </ServiceParagraph>

      <SectionHeadingThree>LRS – Lab Recognition Scheme</SectionHeadingThree>

      <ServiceParagraph>
        Under the Bureau of Indian Standards (BIS), the Lab Recognition Scheme
        (LRS) is an integral part of a system that guarantees the dependability
        and overall competency of laboratories that test and certify products for
        BIS approval. Such labs are critically appraised on diverse attributes
        which include technical knowledge, quality of the workforce,
        infrastructure, and the overall competency and satisfaction of the lab
        with the ISO/IEC 17025 standard. These labs, once approved, are permitted
        to perform testing on the product for which conformity assessment is done
        as part of various BIS certification programs such as the ISI Mark
        Scheme and the Compulsory Registration Scheme (CRS). It is clear that for
        manufacturers, in particular for importers and exporters, the reports
        obtained from an LRS approved lab are a critical requirement to achieve a
        BIS certificate that is a legal requirement for certain products.
      </ServiceParagraph>

      <ServiceParagraph>
        The LRS is empowering India&apos;s assurance systems by maintaining
        equity in testing outcomes and ensuring that all outcomes are consistent
        and globally benchmarked, while accrediting only reliable and sound
        laboratories. To uphold integrity and transparency, BIS performs regular
        audits, proficiency tests, and surveillance of recognized schematic labs.
        Recognition of this certification enables BIS to improve trust from
        consumers while making the certification process more efficient for
        industries, as only safe, compliant, and high-quality products will be
        offered in the Indian market. For organizations that aim to receive BIS
        certification, collaboration with LRS-approved labs is the most essential
        to achieve compliance and market access.
      </ServiceParagraph>

      <SectionHeadingThree>
        Products That Require BIS Certification
      </SectionHeadingThree>

      <ServiceParagraph>
        BIS certification applies to a wide variety of products. Examples
        include:
      </ServiceParagraph>

      <ServiceList
        points={[
          "Electrical & Electronics – LED lights, mobile phones, adapters, laptops.",
          "Construction Materials – Cement, steel bars, structural products.",
          "Consumer Goods – Packaged drinking water, cooking gas cylinders.",
          "Jewelry & Precious Metals – Gold and silver articles under hallmarking.",
          "Industrial Equipment – Pumps, transformers, machine tools.",
        ]}
      />

      <ServiceParagraph>
        The list continues to grow as new risks and technologies emerge.
      </ServiceParagraph>

      <SectionHeadingThree>Benefits of BIS Certification</SectionHeadingThree>

      <ServiceParagraph>
        For companies, the BIS certificate offers much more than mere compliance
        with the law.
      </ServiceParagraph>

      <ServiceList
        points={[
          "Legal compliance: no fines, no bans, no seizure.",
          "Market access: needed for selling regulated products in India.",
          "Consumer trust: builds with the well-recognized ISI mark as a sign of proof.",
          "Competitive advantage: as certified companies easily differentiate from uncertified competitors.",
          "Export facilitation: many international buyers understand and appreciate BIS certification.",
          "Participation in Tenders: many government projects award contracts for goods which are BIS certified.",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  const processSteps = [
    {
      title: "Identify the Applicable Standard",
      description:
        "Determine the relevant Indian Standard (IS) that applies to the product.",
    },
    {
      title: "Establish Testing Facilities",
      description:
        "Set up an in-house laboratory that meets the requirements of the applicable standard.",
    },
    {
      title: "Create a BIS Portal Account",
      description:
        "Indian manufacturers must register on the BIS online portal to initiate the application.",
    },
    {
      title: "Product Testing",
      description:
        "Get the product tested according to the applicable Indian Standard Specifications (ISS).",
    },
    {
      title: "Application Submission",
      description:
        "File the BIS application along with the test report and required documents.",
    },
    {
      title: "Query Resolution",
      description:
        "Respond to any clarification or queries raised by BIS officials.",
    },
    {
      title: "Factory Inspection",
      description:
        "A BIS officer visits the manufacturing facility to verify compliance and inspect the production process.",
    },
    {
      title: "Sample Verification",
      description:
        "During the inspection, samples are tested in the in-house lab and sealed for re-verification by the BIS officer.",
    },
    {
      title: "Audit Completion",
      description:
        "Once the inspection and verification activities are completed, the audit is finalized.",
    },
    {
      title: "Grant of Licence",
      description:
        "If all requirements are met, BIS grants the certification licence to the manufacturer.",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        Procedure for Obtaining BIS Certification
      </SectionHeadingTwo>

      <ServiceParagraph>
        The process for securing a BIS certificate for both Indian and foreign
        manufacturers generally follows these steps:
      </ServiceParagraph>

      <ul className="flex flex-col gap-5">
        {processSteps.map((step, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-neutral-100 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-6 min-h-6 mt-0.5">
              <Check size={12} className="text-neutral-800" />
            </div>
            <p className="font-inter text-sm md:text-base text-neutral-600 text-left max-w-full flex-1">
              <span className="font-semibold text-neutral-800">
                {step.title}:
              </span>{" "}
              {step.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>
        Documents Required for BIS Certification
      </SectionHeadingTwo>

      <ServiceParagraph>
        A strong documentation package ensures smooth processing. Key
        requirements include:
      </ServiceParagraph>

      <ServiceList
        points={[
          "Business license or company registration documents.",
          "Manufacturing process flow chart.",
          "List of machinery and equipment.",
          "Product details and technical specifications.",
          "Test reports from BIS-recognized labs.",
          "Quality control manual.",
          "Trademark certificate.",
        ]}
      />

      <SectionHeadingThree>For foreign manufacturers:</SectionHeadingThree>

      <ServiceList
        points={[
          "Appointment of an Authorized Indian Representative (AIR).",
          "Proof of representation and identity documents.",
        ]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeadingTwo>BIS Certification Cost</SectionHeadingTwo>

      <ServiceTable
        className="mt-2"
        headers={["COST COMPONENT", "DETAILS"]}
        rows={[
          [
            "Application Fee",
            "One-time, non-refundable fee depending on product type",
          ],
          [
            "Testing Charges",
            "Based on complexity; paid to BIS-recognized labs",
          ],
          [
            "Annual License Fee",
            "Paid annually to maintain BIS license",
          ],
          [
            "Inspection/Factory Audit Charges",
            "Charged if BIS officials visit factory (domestic or international travel extra)",
          ],
          [
            "Consultancy Charges (if applicable)",
            "Optional, for end-to-end compliance help from consultants",
          ],
        ]}
      />

      <SectionHeadingThree>
        BIS Certification Cost and Licence Fees
      </SectionHeadingThree>

      <ServiceParagraph>
        The cost of obtaining BIS certification varies depending on several
        factors, including the product category, the applicable Indian Standard
        (IS), and whether the manufacturer is based in India or overseas.
      </ServiceParagraph>

      <SectionHeadingThree>
        Fee Structure for BIS Registration (CRS)
      </SectionHeadingThree>

      <ServiceList
        points={[
          "Government Fee: ₹53,000 + 18% GST per test report. An additional ₹20,000 is charged for each extra test report submitted within the same application.",
          "Testing Charges: Applicable as per laboratory rates, which vary depending on the product and testing facility.",
        ]}
      />

      <ServiceParagraph>
        Note: Companies registered under the MSME Act may be eligible for certain
        concessions on government fees.
      </ServiceParagraph>

      <SectionHeadingThree>
        Fee Structure for BIS Licence (ISI Certification)
      </SectionHeadingThree>

      <ServiceList
        points={[
          "Application Fee: ₹1,000",
          "Licence Fee: ₹1,000",
          "Audit Charges: ₹7,000 per man-day for factory inspection",
          "Testing Charges: Based on the product and testing laboratory",
          "Minimum Marking Fee: Varies according to the product category.",
        ]}
      />

      <ServiceParagraph>
        For foreign manufacturers, additional charges apply under the Foreign
        Manufacturers Certification Scheme (FMCS). The exact cost structure
        depends on the specific case and applicable requirements.
      </ServiceParagraph>
    </div>
  );
};

const AIRSection = () => {
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

const ConclusionSection = () => {
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
  // {
  //   id: "faqs",
  //   label: "FAQS",
  //   section: <FAQSection />,
  // },
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
