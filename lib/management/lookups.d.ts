import { ILookups, LookupView, LookupData, Lookups } from "./schema";
import { Base } from ".";
export declare class Lookup extends Base implements ILookups {
    getLookups(): Promise<Lookups>;
    getLookupById(tenant_id: string): Promise<LookupView>;
    updateLookup(tenant_id: string, body: LookupData): Promise<LookupView>;
    createLookup(body: {
        code: string;
        name: string;
    } & LookupData): Promise<LookupView>;
    deleteLookup(tenant_id: string): Promise<LookupView>;
}
