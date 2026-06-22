import bisCertificationRoutes from "@/components/services/BISCertification/routes";
import bisfmRoutes from "@/components/services/BISFM/routes";

export const englishRoutes = {
  ...bisfmRoutes.en,
  ...bisCertificationRoutes.en,
};

export const spanishRoutes = {
  ...bisfmRoutes.es,
  ...bisCertificationRoutes.es,
};
