import {
  ILookups,
  LookupView,
  LookupData,
  Lookups,
  LookupChange,
  ILookupValues,
  LookupValueBody,
  LookupValueDelete,
  ILookupTranslations,
  LookupValueTranslationsData,
  LookupTranslationView,
  ILookupSettings,
  LookupSettingsData,
  ILookupHealth,
  LookupHealthData,
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

export class LookupTranslations extends Base implements ILookupTranslations {
  async getLookupTranslations(lookup_code: string): Promise<Lookups> {
    return await this.request(
      `lookups/${lookup_code}/translations`,
      HttpType.Get
    );
  }

  async createLookupTranslation(
    lookup_code: string,
    body: LookupValueTranslationsData
  ): Promise<LookupTranslationView> {
    return await this.request(
      `lookups/${lookup_code}/translations`,
      HttpType.Post,
      (body = body)
    );
  }
  async getLookupByTranslation(
    lookup_code: string,
    language: string
  ): Promise<LookupTranslationView> {
    return await this.request(
      `lookups/${lookup_code}/translations/${language}`,
      HttpType.Get
    );
  }
  async updateLookupTranslation(
    lookup_code: string,
    language: string,
    body: LookupValueBody
  ): Promise<LookupTranslationView> {
    return await this.request(
      `lookups/${lookup_code}/translations/${language}`,
      HttpType.Put,
      (body = body)
    );
  }
  async deleteLookupTranslation(
    lookup_code: string,
    language: string
  ): Promise<LookupValueDelete> {
    return await this.request(
      `lookups/${lookup_code}/translations/${language}`,
      HttpType.Delete
    );
  }
  async getLookupValueTranslations(
    lookup_code: string,
    value: string
  ): Promise<Lookups> {
    return await this.request(
      `lookups/${lookup_code}/values/${value}/translations`,
      HttpType.Get
    );
  }

  async createLookupValueTranslation(
    lookup_code: string,
    value: string,
    body: LookupValueTranslationsData
  ): Promise<LookupTranslationView> {
    return await this.request(
      `lookups/${lookup_code}/values/${value}/translations`,
      HttpType.Post,
      (body = body)
    );
  }
  async getLookupByValueTranslation(
    lookup_code: string,
    value: string,
    language: string
  ): Promise<LookupTranslationView> {
    return await this.request(
      `lookups/${lookup_code}/values/${value}/translations/${language}`,
      HttpType.Get
    );
  }
  async updateLookupValueTranslation(
    lookup_code: string,
    value: string,
    language: string,
    body: LookupTranslationView
  ): Promise<LookupTranslationView> {
    return await this.request(
      `lookups/${lookup_code}/values/${value}/translations/${language}`,
      HttpType.Put,
      (body = body)
    );
  }
  async deleteLookupValueTranslation(
    lookup_code: string,
    value: string,
    language: string
  ): Promise<LookupValueDelete> {
    return await this.request(
      `lookups/${lookup_code}/values/${value}/translations/${language}`,
      HttpType.Delete
    );
  }
}

export class LookupSettings extends Base implements ILookupSettings {
  async getLookupSettings(): Promise<LookupSettingsData> {
    return await this.request(`settings`, HttpType.Get);
  }
  async updateLookupValueTranslation(
    body: LookupSettingsData
  ): Promise<LookupSettingsData> {
    return await this.request(`settings`, HttpType.Put, (body = body));
  }
}
export class LookupHealth extends Base implements ILookupHealth {
  async getLookupHealth(): Promise<LookupHealthData> {
    return await this.request(`health`, HttpType.Get);
  }
}
