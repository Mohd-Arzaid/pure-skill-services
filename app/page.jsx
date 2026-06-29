import Link from "next/link";

const links = [
  {
    name: "BISFM",
    href: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
  },
  {
    name: "BISCertification",
    href: "/what-is-bis-certificate-indian-bis",
  },
  {
    name: "ISIMark",
    href: "/a-guide-to-bis-certification-indian-bis",
  },
  {
    name: "Authorized Indian Representative (AIR)",
    href: "/authorized-indian-representative",
  },
  {
    name: "BIS CRS Registration",
    href: "/what-is-crs-bis-or-crs-registration",
  },
  {
    name: "CE Mark Certification",
    href: "/ce-certification",
  },
  {
    name: "Scheme X",
    href: "/indian-bis-certification-under-scheme-x",
  },
  {
    name: "EPR Registration",
    href: "/a-guide-on-how-to-obtain-epr-certificate",
  },
  {
    name: "ROHS Registration",
    href: "/restriction-of-hazardous-substance-rohs-certificate",
  },
  {
    name: "Plastic Waste Management",
    href: "/epr-certificate-for-plastic-waste-management-pwm",
  },
  {
    name: "EMI/EMC Certification",
    href: "/emi-emc-certification",
  },
  {
    name: "CDSCO Registration Certificate",
    href: "/cdsco-registration-certification",
  }

];

function ServiceLink({ name, href }) {
  return (
    <li>
      <span className="mr-2 font-medium">{name} -</span>
      <Link
        href={href}
        className="text-blue-600  hover:text-blue-900"
      >
        {href}
      </Link>
    </li>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-inter">
      <ul className="flex flex-col gap-4 text-xl">
        {links.map((link) => (
          <ServiceLink key={link.href} {...link} />
        ))}
      </ul>
    </div>
  );
}
