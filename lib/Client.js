"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var lookups_1 = require("./management/lookups");
var Client = /** @class */ (function () {
    function Client(config) {
        this.client_id = config.client_id;
        this.domain = config.domain || "http://localhost:3003";
        fetch("".concat(this.domain, "/lov/v1/lookups"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "client-id": this.client_id,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
        })
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) {
            return err;
        });
    }
    Object.defineProperty(Client.prototype, "lookups", {
        get: function () {
            return new lookups_1.Lookup(this.client_id, this.domain);
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
exports.Client = Client;
