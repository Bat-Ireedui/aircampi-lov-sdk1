"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookupHealth = exports.LookupSettings = exports.LookupTranslations = exports.LookupValues = exports.Lookup = void 0;
var global_1 = require("../global");
var index_1 = require("./index");
var Lookup = /** @class */ (function (_super) {
    __extends(Lookup, _super);
    function Lookup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lookup.prototype.getLookups = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups", global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Lookup.prototype.getLookupById = function (lookup_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code), global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Lookup.prototype.updateLookup = function (lookup_code, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code), global_1.HttpType.Put, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Lookup.prototype.createLookup = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups", global_1.HttpType.Post, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Lookup.prototype.deleteLookup = function (lookup_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code), global_1.HttpType.Delete)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Lookup.prototype.changeLookupById = function (lookup_code, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/change"), global_1.HttpType.Post, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Lookup;
}(index_1.Base));
exports.Lookup = Lookup;
var LookupValues = /** @class */ (function (_super) {
    __extends(LookupValues, _super);
    function LookupValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LookupValues.prototype.getLookupValues = function (lookup_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values"), global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupValues.prototype.createLookupValue = function (lookup_code, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values"), global_1.HttpType.Post, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupValues.prototype.getLookupValue = function (lookup_code, lookup_value_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(lookup_value_code), global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupValues.prototype.updateLookupValue = function (lookup_code, lookup_value_code, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(lookup_value_code), global_1.HttpType.Put, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupValues.prototype.deleteLookupValue = function (lookup_code, lookup_value_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(lookup_value_code), global_1.HttpType.Delete)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupValues.prototype.changeLookupValue = function (lookup_code, lookup_value_code, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(lookup_value_code, "/change"), global_1.HttpType.Post, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LookupValues;
}(index_1.Base));
exports.LookupValues = LookupValues;
var LookupTranslations = /** @class */ (function (_super) {
    __extends(LookupTranslations, _super);
    function LookupTranslations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LookupTranslations.prototype.getLookupTranslations = function (lookup_code) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/translations"), global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.createLookupTranslation = function (lookup_code, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/translations"), global_1.HttpType.Post, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.getLookupByTranslation = function (lookup_code, language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/translations/").concat(language), global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.updateLookupTranslation = function (lookup_code, language, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/translations/").concat(language), global_1.HttpType.Put, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.deleteLookupTranslation = function (lookup_code, language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/translations/").concat(language), global_1.HttpType.Delete)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.getLookupValueTranslations = function (lookup_code, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(value, "/translations"), global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.createLookupValueTranslation = function (lookup_code, value, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(value, "/translations"), global_1.HttpType.Post, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.getLookupByValueTranslation = function (lookup_code, value, language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(value, "/translations/").concat(language), global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.updateLookupValueTranslation = function (lookup_code, value, language, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(value, "/translations/").concat(language), global_1.HttpType.Put, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupTranslations.prototype.deleteLookupValueTranslation = function (lookup_code, value, language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("lookups/".concat(lookup_code, "/values/").concat(value, "/translations/").concat(language), global_1.HttpType.Delete)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LookupTranslations;
}(index_1.Base));
exports.LookupTranslations = LookupTranslations;
var LookupSettings = /** @class */ (function (_super) {
    __extends(LookupSettings, _super);
    function LookupSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LookupSettings.prototype.getLookupSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("settings", global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LookupSettings.prototype.updateLookupValueTranslation = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("settings", global_1.HttpType.Put, (body = body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LookupSettings;
}(index_1.Base));
exports.LookupSettings = LookupSettings;
var LookupHealth = /** @class */ (function (_super) {
    __extends(LookupHealth, _super);
    function LookupHealth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LookupHealth.prototype.getLookupHealth = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("health", global_1.HttpType.Get)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LookupHealth;
}(index_1.Base));
exports.LookupHealth = LookupHealth;
