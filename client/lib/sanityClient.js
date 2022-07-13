import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "68u832bl",
  dataset: "production",
  apiVersion: "v1",
  token:
    "sk5Xns0OafAOmZvY6ZJ1CS0LQZjIBOK2pDB3TlaFtkHu7kN7MySzkulAiSiryJcZJvlGP1vH0FGU3M6N7x52AA7NLlKha3bNYxRhkhbOyGDlP2GPGpj3b8a0SXJqxotdRqCnAXFeuuUjd0b5uoeojp2CsECS2w8YQEImSDnvABwtDDNC5ViJ",
  useCdn: false,
});
