import { ILookups, LookupView, LookupData, Lookups } from "./schema";
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
}
