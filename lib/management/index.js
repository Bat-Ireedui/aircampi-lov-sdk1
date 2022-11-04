"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
var Base = /** @class */ (function () {
    function Base(client_id, domain, header) {
        this.client_id = client_id;
        this.domain = domain;
        this.header = header;
    }
    Base.prototype.request = function (endpoint, type, body) {
        var config;
        var url = "".concat(this.domain, "/lov/v1/").concat(endpoint);
        var headers = __assign({ "Content-Type": "application/json", "client-id": this.client_id }, this.header);
        if (body) {
            config = {
                body: JSON.stringify(body),
                headers: headers,
                method: type,
            };
        }
        else {
            config = {
                headers: headers,
                method: type,
            };
        }
        return fetch(url, config).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        });
    };
    return Base;
}());
exports.Base = Base;
