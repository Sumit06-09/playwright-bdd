import * as userData from '../testdata/user.data.json';

export class DataManager {
    private data: any;

    constructor(userKey: string) {
        // Access the 'users' object from the JSON
        this.data = (userData as any).users[userKey];
        
        if (!this.data) {
            throw new Error(`❌ Test Data Error: User key '${userKey}' not found in user.data.json`);
        }
    }

    // Getters for clean access in Step Definitions
    get username() { return this.data.username; }
    get password() { return this.data.password; }
    get firstName() { return this.data.firstName; }
    get lastName() { return this.data.lastName; }
    get zip() { return this.data.zip; }
    get expectedStatus() { return this.data.expectedDbStatus; }
}