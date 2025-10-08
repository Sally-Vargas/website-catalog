import { treatmentsDB, type TTreatment } from "../content/treatments";

export const getCollection = ({ lang }: { lang: "es" | "en" }): TTreatment[] => {
    return treatmentsDB.map(treatment => ({
        ...treatment[lang]
    }));
}