"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var lookups_1 = require("./management/lookups");
var cors = require("cors");
var Client = /** @class */ (function () {
    function Client(config) {
        this.client_id = config.client_id;
        this.domain = config.domain || "http://localhost:3003";
        cors();
        fetch("".concat(this.domain, "/lov/v1/lookups"), {
            method: "POST",
            headers: {
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "client-id": this.client_id,
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
