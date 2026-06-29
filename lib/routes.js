import AuthorizedIndianRepresentativeAIRRoutes from "@/components/services/AIR/routes";
import bisCertificationRoutes from "@/components/services/BISCertification/routes";
import bisfmRoutes from "@/components/services/BISFM/routes";
import CECertificationRoutes from "@/components/services/CECertification/routes";
import ISIMarkRoutes from "@/components/services/ISIMark/routes";
import CRSRegistrationRoutes from "@/components/services/CRS Registration/routes";
import EPRServiceRoutes from "@/components/services/EPRService/routes";
import SchemeXRoutes from "@/components/services/SchemeX/routes";
import ROHSRegistrationRoutes from "@/components/services/ROHS/routes";
import PlasticWasteRoutes from "@/components/services/PlasticWaste/routes";
import EMIEMCRoutes from "@/components/services/EMIEMC/routes";
import CDSCORoutes from "@/components/services/CDSCO/routes";

export const englishRoutes = {
  ...bisfmRoutes.en,
  ...bisCertificationRoutes.en,
  ...ISIMarkRoutes.en,
  ...AuthorizedIndianRepresentativeAIRRoutes.en,
  ...CRSRegistrationRoutes.en,
  ...CECertificationRoutes.en,
  ...SchemeXRoutes.en,
  ...EPRServiceRoutes.en,
  ...ROHSRegistrationRoutes.en,
  ...PlasticWasteRoutes.en,
  ...EMIEMCRoutes.en,
  ...CDSCORoutes.en,
};

export const spanishRoutes = {
  ...bisfmRoutes.es,
  ...bisCertificationRoutes.es,
};
