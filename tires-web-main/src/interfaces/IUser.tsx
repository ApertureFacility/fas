export interface IUser {
    uid: string;
    email: string | null;
    emailVerified: boolean;
    displayName: string | null;
    photoURL: string | null;
    phoneNumber: string | null;
    providerId: string;
    creationTime?: string;  // Optional, can be retrieved via metadata
    lastSignInTime?: string; // Optional, can be retrieved via metadata
}