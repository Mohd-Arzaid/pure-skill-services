import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-inter">
      <ul className="flex flex-col gap-4 text-xl">
        <li>
          <Link
            href="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="hover:underline"
          >
            /a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis
          </Link>
        </li>
        <li>
          <Link
            href="/what-is-bis-certificate-indian-bis"
            className="hover:underline"
          >
            /what-is-bis-certificate-indian-bis
          </Link>
        </li>
        <li>
          <Link
            href="/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio"
            className="hover:underline"
          >
            /es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio
          </Link>
        </li>
        <li>
          <Link
            href="/es/que-es-el-certificado-bis-bis-indio"
            className="hover:underline"
          >
            /es/que-es-el-certificado-bis-bis-indio
          </Link>
        </li>
      </ul>
    </div>
  );
}
