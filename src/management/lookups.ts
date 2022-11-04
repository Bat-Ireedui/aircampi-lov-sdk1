import { ILookups, LookupView, LookupData, Lookups } from "./schema";
import { HttpType } from "../global";
import { Base } from ".";

export class Lookup extends Base implements ILookups {
  async getLookups(): Promise<Lookups> {
    return this.request("tenants", HttpType.Get);
  }

  async getLookupById(tenant_id: string): Promise<LookupView> {
    return this.request(`tenants/${tenant_id}`, HttpType.Get);
  }

  async updateLookup(tenant_id: string, body: LookupData): Promise<LookupView> {
    return this.request(`tenants/${tenant_id}`, HttpType.Put, (body = body));
  }

  async createLookup(
    body: { code: string; name: string } & LookupData
  ): Promise<LookupView> {
    return this.request("tenants", HttpType.Post, (body = body));
  }

  async deleteLookup(tenant_id: string): Promise<LookupView> {
    return this.request(`tenants/${tenant_id}`, HttpType.Delete);
  }
}
