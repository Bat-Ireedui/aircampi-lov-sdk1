import { ILookups, LookupView, LookupData, Lookups } from "./schema";
import { Base } from ".";
export declare class Lookup extends Base implements ILookups {
    getLookups(): Promise<Lookups>;
    getLookupById(lookup_code: string): Promise<LookupView>;
    updateLookup(lookup_code: string, body: LookupData): Promise<LookupView>;
    createLookup(body: {
        code: string;
        name: string;
    } & LookupData): Promise<LookupView>;
    deleteLookup(lookup_code: string): Promise<LookupView>;
}
