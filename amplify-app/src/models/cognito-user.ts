export declare class CognitoUser {
    readonly session: string;
    readonly challengeName: string;
    readonly challengeParam: Object;
    readonly client: Object;
    readonly pool: Object;
    readonly userDataKey: string;
    readonly username: string;
    constructor(init: CognitoUser);
}