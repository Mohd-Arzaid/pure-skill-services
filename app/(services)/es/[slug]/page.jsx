import { spanishRoutes } from "@/lib/routes";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(spanishRoutes).map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const SlugPage = spanishRoutes[slug];

  if (!SlugPage) {
    notFound();
  }

  return <SlugPage />;
}
