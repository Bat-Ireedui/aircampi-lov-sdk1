export interface ILookups {
  getLookups(): Promise<Lookups>;
  createLookup(
    body: { code: string; name: string } & LookupData
  ): Promise<LookupView>;
  getLookupById?(lookup_code: string): Promise<LookupView>;
  updateLookup(lookup_code: string, body: LookupData): Promise<LookupView>;
  deleteLookup(lookup_code: string): Promise<LookupView>;
  changeLookupById?(
    body: { new_code: string },
    lookup_code: string
  ): Promise<LookupView>;
}

export type Lookups = {
  total_count?: number;
  count: number;
  has_more: boolean;
  limit: number;
  offset: number;
  items: object[];
};

export type LookupView = {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  metadata?: object[];
  enabled?: boolean;
  created_at?: string;
  updated_at?: string;
  aggregations?: object[];
  values?: object[];
};

export type LookupData = {
  code?: string;
  name?: string;
  description?: string;
  metadata?: object[];
};

export type UserData = {
  username?: string;
  email?: string;
  email_verified?: boolean;
  phone?: string;
  phone_verified?: boolean;
  nickname?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  familyname?: string;
  fullname?: string;
  picture?: string;
  profile?: string;
  website?: string;
  gender?: string;
  birthday?: string;
  zoneinfo?: string;
  locale?: string;
  address?: object;
  user_metadata?: object;
  app_metadata?: object;
  invited_at?: string;
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
