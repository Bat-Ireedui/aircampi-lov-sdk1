import { Lookup, LookupValues, LookupTranslations } from "./management/lookups";
export declare class Client {
    private client_id;
    private domain;
    constructor(config: Config);
    get lookups(): Lookup;
    get lookupsValue(): LookupValues;
    get lookupsTranslations(): LookupTranslations;
}
declare type Config = {
    client_id: string;
    domain?: string;
};
export {};
