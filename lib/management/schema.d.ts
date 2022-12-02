export interface ILookups {
    getLookups(): Promise<Lookups>;
    createLookup(body: {
        code: string;
        name: string;
    } & LookupData): Promise<LookupView>;
    getLookupById?(lookup_code: string): Promise<LookupView>;
    updateLookup(lookup_code: string, body: LookupData): Promise<LookupView>;
    deleteLookup(lookup_code: string): Promise<LookupView>;
    changeLookupById?(lookup_code: string, body: {
        new_code: string;
    }): Promise<LookupChange>;
}
export interface ILookupValues {
    getLookupValues(lookup_code: string): Promise<Lookups>;
    createLookupValue(lookup_code: string, body: {
        code: string;
        name: string;
    } & LookupData): Promise<LookupView>;
    getLookupValue?(lookup_code: string, lookup_value_code: string): Promise<LookupView>;
    updateLookupValue(lookup_code: string, lookup_value_code: string, body: LookupValueBody): Promise<LookupView>;
    deleteLookupValue(lookup_code: string, lookup_value_code: string): Promise<LookupValueDelete>;
    changeLookupValue?(lookup_code: string, lookup_value_code: string, body: {
        new_code: string;
    }): Promise<LookupChange>;
}
export interface ILookupTranslations {
    getLookupTranslations(lookup_code: string): Promise<Lookups>;
    createLookupTranslation(lookup_code: string, body: LookupValueTranslationsData): Promise<LookupTranslationView>;
    getLookupByTranslation?(lookup_code: string, language: string): Promise<LookupTranslationView>;
    updateLookupTranslation(lookup_code: string, language: string, body: LookupValueBody): Promise<LookupTranslationView>;
    deleteLookupTranslation(lookup_code: string, language: string): Promise<LookupValueDelete>;
    getLookupValueTranslations(lookup_code: string, value: string): Promise<Lookups>;
    createLookupValueTranslation(lookup_code: string, value: string, body: LookupValueTranslationsData): Promise<LookupTranslationView>;
    getLookupByValueTranslation?(lookup_code: string, value: string, language: string): Promise<LookupTranslationView>;
    updateLookupValueTranslation(lookup_code: string, value: string, language: string, body: LookupValueTranslationsData): Promise<LookupTranslationView>;
    deleteLookupValueTranslation(lookup_code: string, value: string, language: string): Promise<LookupValueDelete>;
}
export interface ILookupSettings {
    getLookupSettings(): Promise<LookupSettingsData>;
    updateLookupValueTranslation(body: LookupSettingsData): Promise<LookupSettingsData>;
}
export interface ILookupHealth {
    getLookupHealth(): Promise<LookupHealthData>;
}
export declare type Lookups = {
    total_count?: number;
    count: number;
    has_more: boolean;
    limit: number;
    offset: number;
    items: object[];
};
export declare type LookupSettingsData = {
    environment: string;
};
export declare type LookupChange = {
    new_code: string;
};
export declare type LookupHealthData = {
    server_name: string;
    server_version: string;
    server_status: string;
    server_description: string;
};
export declare type LookupView = {
    id?: string;
    lookup_id?: string;
    code?: string;
    name?: string;
    description?: string;
    metadata?: object[];
    sequence?: number;
    enabled?: boolean;
    created_at?: string;
    updated_at?: string;
    aggregations?: object[];
    values?: object[];
};
export declare type LookupTranslationView = {
    id?: string;
    label_id?: string;
    language?: string;
    name?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
};
export declare type LookupData = {
    code?: string;
    name?: string;
    description?: string;
    metadata?: object[];
    sequence?: number;
};
export declare type LookupValueTranslationsData = {
    language?: string;
    name?: string;
    description?: string;
};
export declare type LookupValueBody = {
    name?: string;
    description?: string;
    metadata?: object[];
    sequence?: string;
    enabled?: boolean;
};
export declare type LookupValueDelete = {
    code?: string;
    message?: string;
};
