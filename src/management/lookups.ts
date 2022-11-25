import {
  ILookups,
  LookupView,
  LookupData,
  Lookups,
  LookupChange,
  ILookupValues,
  LookupValueBody,
} from "./schema";
import { HttpType } from "../global";
import { Base } from "./index";

export class Lookup extends Base implements ILookups {
  async getLookups(): Promise<Lookups> {
    return await this.request("lookups", HttpType.Get);
  }

  async getLookupById(lookup_code: string): Promise<LookupView> {
    return await this.request(`lookups/${lookup_code}`, HttpType.Get);
  }

  async updateLookup(
    lookup_code: string,
    body: LookupData
  ): Promise<LookupView> {
    return await this.request(
      `lookups/${lookup_code}`,
      HttpType.Put,
      (body = body)
    );
  }

  async createLookup(
    body: { code: string; name: string } & LookupData
  ): Promise<LookupView> {
    return await this.request("lookups", HttpType.Post, (body = body));
  }

  async deleteLookup(lookup_code: string): Promise<LookupView> {
    return await this.request(`lookups/${lookup_code}`, HttpType.Delete);
  }
  async changeLookupById(
    lookup_code: string,
    body: { new_code: string }
  ): Promise<LookupChange> {
    return await this.request(
      `lookups/${lookup_code}/change`,
      HttpType.Post,
      (body = body)
    );
  }
}

export class LookupValues extends Base implements ILookupValues {
  async getLookupValues(lookup_code: string): Promise<Lookups> {
    return await this.request(`lookups/${lookup_code}/values`, HttpType.Get);
  }

  async createLookupValue(
    lookup_code: string,
    body: { code: string; name: string } & LookupData
  ): Promise<LookupView> {
    return await this.request(
      `lookups/${lookup_code}/values`,
      HttpType.Post,
      (body = body)
    );
  }
  async getLookupValue(
    lookup_code: string,
    lookup_value_code: string
  ): Promise<LookupView> {
    return await this.request(
      `lookups/${lookup_code}/values/${lookup_value_code}`,
      HttpType.Get
    );
  }
  async updateLookupValue(
    lookup_code: string,
    lookup_value_code: string,
    body: LookupValueBody
  ): Promise<LookupView> {
    return await this.request(
      `lookups/${lookup_code}/values/${lookup_value_code}`,
      HttpType.Put,
      (body = body)
    );
  }
  async deleteLookupValue(
    lookup_code: string,
    lookup_value_code: string
  ): Promise<LookupView> {
    return await this.request(
      `lookups/${lookup_code}/values/${lookup_value_code}`,
      HttpType.Delete
    );
  }
  async changeLookupValue(
    lookup_code: string,
    lookup_value_code: string,
    body: { new_code: string }
  ): Promise<LookupChange> {
    return await this.request(
      `lookups/${lookup_code}/values/${lookup_value_code}/change`,
      HttpType.Post,
      (body = body)
    );
  }
}
