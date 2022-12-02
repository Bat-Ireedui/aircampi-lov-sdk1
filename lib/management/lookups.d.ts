import { ILookups, LookupView, LookupData, Lookups, LookupChange, ILookupValues, LookupValueBody, LookupValueDelete, ILookupTranslations, LookupValueTranslationsData, LookupTranslationView, ILookupSettings, LookupSettingsData, ILookupHealth, LookupHealthData } from "./schema";
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
export declare class LookupTranslations extends Base implements ILookupTranslations {
    getLookupTranslations(lookup_code: string): Promise<Lookups>;
    createLookupTranslation(lookup_code: string, body: LookupValueTranslationsData): Promise<LookupTranslationView>;
    getLookupByTranslation(lookup_code: string, language: string): Promise<LookupTranslationView>;
    updateLookupTranslation(lookup_code: string, language: string, body: LookupValueBody): Promise<LookupTranslationView>;
    deleteLookupTranslation(lookup_code: string, language: string): Promise<LookupValueDelete>;
    getLookupValueTranslations(lookup_code: string, value: string): Promise<Lookups>;
    createLookupValueTranslation(lookup_code: string, value: string, body: LookupValueTranslationsData): Promise<LookupTranslationView>;
    getLookupByValueTranslation(lookup_code: string, value: string, language: string): Promise<LookupTranslationView>;
    updateLookupValueTranslation(lookup_code: string, value: string, language: string, body: LookupTranslationView): Promise<LookupTranslationView>;
    deleteLookupValueTranslation(lookup_code: string, value: string, language: string): Promise<LookupValueDelete>;
}
export declare class LookupSettings extends Base implements ILookupSettings {
    getLookupSettings(): Promise<LookupSettingsData>;
    updateLookupValueTranslation(body: LookupSettingsData): Promise<LookupSettingsData>;
}
export declare class LookupHealth extends Base implements ILookupHealth {
    getLookupHealth(): Promise<LookupHealthData>;
}
