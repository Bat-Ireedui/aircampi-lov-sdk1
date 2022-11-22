import { Lookup } from "./management/lookups";
export declare class Client {
    private client_id;
    private domain;
    constructor(config: Config);
    get lookups(): Lookup;
}
declare type Config = {
    client_id: string;
    domain?: string;
};
export {};
