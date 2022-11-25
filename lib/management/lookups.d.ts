import { ILookups, LookupView, LookupData, Lookups, LookupChange, ILookupValues, LookupValueBody } from "./schema";
import { Base } from "./index";
export declare class Lookup extends Base implements ILookups {
    getLookups(): Promise<Lookups>;
    getLookupById(lookup_code: string): Promise<LookupView>;
    updateLookup(lookup_code: string, body: LookupData): Promise<LookupView>;
    createLookup(body: {
        code: string;
        name: string;
    } & LookupData): Promise<LookupView>;
    deleteLookup(lookup_code: string): Promise<LookupView>;
    changeLookupById(lookup_code: string, body: {
        new_code: string;
    }): Promise<LookupChange>;
}
export declare class LookupValues extends Base implements ILookupValues {
    getLookupValues(lookup_code: string): Promise<Lookups>;
    createLookupValue(lookup_code: string, body: {
        code: string;
        name: string;
    } & LookupData): Promise<LookupView>;
    getLookupValue(lookup_code: string, lookup_value_code: string): Promise<LookupView>;
    updateLookupValue(lookup_code: string, lookup_value_code: string, body: LookupValueBody): Promise<LookupView>;
    deleteLookupValue(lookup_code: string, lookup_value_code: string): Promise<LookupView>;
    changeLookupValue(lookup_code: string, lookup_value_code: string, body: {
        new_code: string;
    }): Promise<LookupChange>;
}
