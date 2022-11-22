import { Lookup } from "./management/lookups";

export class Client {
  private client_id: string;
  private domain: string;
  constructor(config: Config) {
    this.client_id = config.client_id;
    this.domain = config.domain || "http://localhost:3003";
    const cors = require("cors");
    fetch(`${this.domain}/lov/v1/lookups`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "client-id": this.client_id,
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        return err;
      });
    cors();
  }

  get lookups() {
    return new Lookup(this.client_id, this.domain);
  }
}

type Config = {
  client_id: string;
  domain?: string;
};
