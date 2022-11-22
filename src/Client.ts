import { Lookup } from "./management/lookups";
const cors = require("cors");

export class Client {
  private client_id: string;
  private domain: string;
  constructor(config: Config) {
    this.client_id = config.client_id;
    this.domain = config.domain || "http://localhost:3003";
    cors();
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
}

type Config = {
  client_id: string;
  domain?: string;
};
