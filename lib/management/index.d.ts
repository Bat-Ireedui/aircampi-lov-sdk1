import { HttpType } from "../global";
export declare class Base {
    private client_id;
    private domain;
    header?: object | undefined;
    constructor(client_id: string, domain: string, header?: object | undefined);
    protected request<T>(endpoint: string, type: HttpType, body?: object): Promise<T>;
}
