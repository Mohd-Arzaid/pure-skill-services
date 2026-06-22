import { englishRoutes } from "@/lib/routes";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(englishRoutes).map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const SlugPage = englishRoutes[slug];

  if (!SlugPage) {
    notFound();
  }

  return <SlugPage />;
}
