"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var lookups_1 = require("./management/lookups");
var Client = /** @class */ (function () {
    function Client(config) {
        this.client_id = config.client_id;
        this.domain = config.domain || "http://localhost:8536";
        fetch("http://localhost:8536/auth/v1/tenants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "client-id": this.client_id,
            },
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        });
    }
    Object.defineProperty(Client.prototype, "Lookup", {
        get: function () {
            return new lookups_1.Lookup(this.client_id, this.domain);
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
