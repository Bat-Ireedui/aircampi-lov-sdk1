import { Lookup } from "./management/lookups";

export class Client {
  private client_id: string;
  private domain: string;

  constructor(config: Config) {
    this.client_id = config.client_id;
    this.domain = config.domain || "http://localhost:8536";
    fetch(`${this.domain}/lookups`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "client-id": this.client_id,
      },
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }

  get Lookup() {
    return new Lookup(this.client_id, this.domain);
  }
}

type Config = {
  client_id: string;
  domain?: string;
};
