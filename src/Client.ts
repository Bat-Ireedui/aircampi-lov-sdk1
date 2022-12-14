import { Lookup, LookupValues, LookupTranslations } from "./management/lookups";

export class Client {
  private client_id: string;
  private domain: string;
  constructor(config: Config) {
    this.client_id = config.client_id;
    this.domain = config.domain || "http://localhost:3004";

    fetch(`${this.domain}/lov/v1/lookups`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "client-id": this.client_id,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return err;
      });
  }

  get lookups() {
    return new Lookup(this.client_id, this.domain);
  }
  get lookupsValue() {
    return new LookupValues(this.client_id, this.domain);
  }
  get lookupsTranslations() {
    return new LookupTranslations(this.client_id, this.domain);
  }
}

type Config = {
  client_id: string;
  domain?: string;
};
