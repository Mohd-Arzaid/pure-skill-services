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
