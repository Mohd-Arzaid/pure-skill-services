import bisCertificationRoutes from "@/components/services/BISCertification/routes";
import bisfmRoutes from "@/components/services/BISFM/routes";
import ISIMarkRoutes from "@/components/services/ISIMark/routes";

export const englishRoutes = {
  ...bisfmRoutes.en,
  ...bisCertificationRoutes.en,
  ...ISIMarkRoutes.en,
};

export const spanishRoutes = {
  ...bisfmRoutes.es,
  ...bisCertificationRoutes.es,
};
