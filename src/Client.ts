import { Lookup } from "./management/lookups";

export class Client {
  private client_id: string;
  private domain: string;
  constructor(config: Config) {
    this.client_id = config.client_id;
    this.domain = config.domain || "http://localhost:3003";
    fetch(`${this.domain}/lov/v1/lookups`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "client-id": this.client_id,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
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
}

type Config = {
  client_id: string;
  domain?: string;
};
