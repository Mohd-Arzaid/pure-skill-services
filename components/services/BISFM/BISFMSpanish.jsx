import ServicePageLayout from "../shared/service-page-layout";

const hero = {
  headingUpper: "Certificación BIS",
  headingLower: "para fabricantes extranjeros",
  description:
    "Los fabricantes extranjeros necesitan la marca ISI para exportar a India. Cubre 600+ productos obligatorios y 20,000+ productos voluntarios.",
};

const BISFMSpanish = () => {
  return (
    <ServicePageLayout
      breadcrumbLabel="Marca BIS (Licencia ISI) para Fabricantes Extranjeros"
      lang="es"
      hero={hero}
    />
  );
};

export default BISFMSpanish;
