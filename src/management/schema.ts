export interface ILookups {
  getLookups(): Promise<Lookups>;
  createLookup(
    body: { code: string; name: string } & LookupData
  ): Promise<LookupView>;
  getLookupById?(lookup_code: string): Promise<LookupView>;
  updateLookup(lookup_code: string, body: LookupData): Promise<LookupView>;
  deleteLookup(lookup_code: string): Promise<LookupView>;
  changeLookupById?(
    lookup_code: string,
    body: { new_code: string }
  ): Promise<LookupChange>;
}
export interface ILookupValues {
  getLookupValues(lookup_code: string): Promise<Lookups>;
  createLookupValue(
    lookup_code: string,
    body: { code: string; name: string } & LookupData
  ): Promise<LookupView>;
  getLookupValue?(
    lookup_code: string,
    lookup_value_code: string
  ): Promise<LookupView>;
  updateLookupValue(
    lookup_code: string,
    lookup_value_code: string,
    body: LookupValueBody
  ): Promise<LookupView>;
  deleteLookupValue(
    lookup_code: string,
    lookup_value_code: string
  ): Promise<LookupValueDelete>;
  changeLookupValue?(
    lookup_code: string,
    lookup_value_code: string,
    body: { new_code: string }
  ): Promise<LookupChange>;
}
export interface ILookupTranslations {
  getLookupTranslations(lookup_code: string): Promise<Lookups>;
  createLookupTranslation(
    lookup_code: string,
    body: LookupValueTranslationsData
  ): Promise<LookupTranslationView>;
  getLookupByTranslation?(
    lookup_code: string,
    language: string
  ): Promise<LookupTranslationView>;
  updateLookupTranslation(
    lookup_code: string,
    language: string,
    body: LookupValueBody
  ): Promise<LookupTranslationView>;
  deleteLookupTranslation(
    lookup_code: string,
    language: string
  ): Promise<LookupValueDelete>;
  getLookupValueTranslations(
    lookup_code: string,
    value: string
  ): Promise<Lookups>;
  createLookupValueTranslation(
    lookup_code: string,
    value: string,
    body: LookupValueTranslationsData
  ): Promise<LookupTranslationView>;
  getLookupByValueTranslation?(
    lookup_code: string,
    value: string,
    language: string
  ): Promise<LookupTranslationView>;
  updateLookupValueTranslation(
    lookup_code: string,
    value: string,
    language: string,
    body: LookupValueTranslationsData
  ): Promise<LookupTranslationView>;
  deleteLookupValueTranslation(
    lookup_code: string,
    value: string,
    language: string
  ): Promise<LookupValueDelete>;
}

export interface ILookupSettings {
  getLookupSettings(): Promise<LookupSettingsData>;
  updateLookupValueTranslation(
    body: LookupSettingsData
  ): Promise<LookupSettingsData>;
}
export interface ILookupHealth {
  getLookupHealth(): Promise<LookupHealthData>;
}

export type Lookups = {
  total_count?: number;
  count: number;
  has_more: boolean;
  limit: number;
  offset: number;
  items: object[];
};
export type LookupSettingsData = {
  environment: string;
};
export type LookupChange = {
  new_code: string;
};
export type LookupHealthData = {
  server_name: string;
  server_version: string;
  server_status: string;
  server_description: string;
};
export type LookupView = {
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
export type LookupTranslationView = {
  id?: string;
  label_id?: string;
  language?: string;
  name?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
};
export type LookupData = {
  code?: string;
  name?: string;
  description?: string;
  metadata?: object[];
  sequence?: number;
};

export type LookupValueTranslationsData = {
  language?: string;
  name?: string;
  description?: string;
};
export type LookupValueBody = {
  name?: string;
  description?: string;
  metadata?: object[];
  sequence?: string;
  enabled?: boolean;
};

export type LookupValueDelete = {
  code?: string;
  message?: string;
};

// export interface IUser {
//   getUsers(): Promise<Users>;
//   createUser(body: { username: string } & UserData): Promise<TenantView>;
//   updateUser?(user_id: string, body: UserData): Promise<TenantView>;
//   deleteUser?(user_id: string): Promise<TenantView>;
//   getUserById?(user_id: string): Promise<UserView>;
// }
// export type Users = {
//   count: number;
//   has_more: false;
//   limit: number;
//   offset: number;
//   items: UserView[];
// };

// export type UserView = {
//   id: string;
//   username: string;
//   email: string;
//   email_verified: boolean;
//   phone: string;
//   phone_verified: boolean;
//   nickname: string;
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   familyname: string;
//   fullname: string;
//   picture: string;
//   profile: string;
//   website: string;
//   gender: string;
//   birthday: string;
//   zoneinfo: string;
//   locale: string;
//   address: object;
//   user_metadata: object;
//   app_metadata: object;
//   is_blocked: boolean;
//   is_admin: boolean;
//   is_invited: boolean;
//   invited_at: string;
//   created_at: string;
//   updated_at: string;
// };
