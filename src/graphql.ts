
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAddressInput {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    userId: string;
}

export class UpdateAddressInput {
    id: string;
    street?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    country?: Nullable<string>;
    zipCode?: Nullable<string>;
    userId?: Nullable<string>;
}

export class CreateOAuthAccountInput {
    provider: string;
    providerAccountId: string;
    userId: string;
}

export class UpdateOAuthAccountInput {
    id: string;
    provider?: Nullable<string>;
    providerAccountId?: Nullable<string>;
    userId?: Nullable<string>;
}

export class CreateOTPInput {
    code: string;
    expiry: DateTime;
    email: string;
}

export class UpdateOTPInput {
    id: string;
    code?: Nullable<string>;
    expiry?: Nullable<DateTime>;
    email?: Nullable<string>;
}

export class CreateSessionInput {
    sessionToken: string;
    userId: string;
    expires: DateTime;
}

export class UpdateSessionInput {
    id: string;
    sessionToken?: Nullable<string>;
    userId?: Nullable<string>;
    expires?: Nullable<DateTime>;
}

export class CreateSocialsInput {
    facebook?: Nullable<string>;
    twitter?: Nullable<string>;
    instagram?: Nullable<string>;
    linkedin?: Nullable<string>;
    userId: string;
}

export class UpdateSocialsInput {
    id: string;
    facebook?: Nullable<string>;
    twitter?: Nullable<string>;
    instagram?: Nullable<string>;
    linkedin?: Nullable<string>;
    userId?: Nullable<string>;
}

export class CreateUserInput {
    fullname: string;
    email: string;
    password: string;
    phone?: Nullable<string>;
    image?: Nullable<string>;
    userName?: Nullable<string>;
}

export class UpdateUserInput {
    id: string;
    fullname?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    phone?: Nullable<string>;
    loginAttempt?: Nullable<number>;
    blocked?: Nullable<boolean>;
    refreshToken?: Nullable<string>;
    image?: Nullable<string>;
    userName?: Nullable<string>;
    isActive?: Nullable<boolean>;
}

export class Address {
    id: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    userId: string;
    user: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export abstract class IQuery {
    abstract getAddress(id: string): Nullable<Address> | Promise<Nullable<Address>>;

    abstract getAddresses(): Address[] | Promise<Address[]>;

    abstract getOAuthAccount(id: string): Nullable<OAuthAccount> | Promise<Nullable<OAuthAccount>>;

    abstract getAllOAuthAccounts(): OAuthAccount[] | Promise<OAuthAccount[]>;

    abstract getOTP(id: string): Nullable<OTP> | Promise<Nullable<OTP>>;

    abstract getOTPs(): OTP[] | Promise<OTP[]>;

    abstract getSession(id: string): Nullable<Session> | Promise<Nullable<Session>>;

    abstract getAllSessions(): Session[] | Promise<Session[]>;

    abstract getSocials(id: string): Nullable<Socials> | Promise<Nullable<Socials>>;

    abstract getAllSocials(): Socials[] | Promise<Socials[]>;

    abstract getUser(id: string): Nullable<User> | Promise<Nullable<User>>;

    abstract getUsers(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createAddress(data: CreateAddressInput): Address | Promise<Address>;

    abstract updateAddress(id: string, data: UpdateAddressInput): Address | Promise<Address>;

    abstract deleteAddress(id: string): Address | Promise<Address>;

    abstract createOAuthAccount(data: CreateOAuthAccountInput): OAuthAccount | Promise<OAuthAccount>;

    abstract updateOAuthAccount(id: string, data: UpdateOAuthAccountInput): OAuthAccount | Promise<OAuthAccount>;

    abstract deleteOAuthAccount(id: string): OAuthAccount | Promise<OAuthAccount>;

    abstract createOTP(data: CreateOTPInput): OTP | Promise<OTP>;

    abstract updateOTP(id: string, data: UpdateOTPInput): OTP | Promise<OTP>;

    abstract deleteOTP(id: string): OTP | Promise<OTP>;

    abstract createSession(data: CreateSessionInput): Session | Promise<Session>;

    abstract updateSession(id: string, data: UpdateSessionInput): Session | Promise<Session>;

    abstract deleteSession(id: string): Session | Promise<Session>;

    abstract createSocials(data: CreateSocialsInput): Socials | Promise<Socials>;

    abstract updateSocials(id: string, data: UpdateSocialsInput): Socials | Promise<Socials>;

    abstract deleteSocials(id: string): Socials | Promise<Socials>;

    abstract createUser(data: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: string, data: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(id: string): User | Promise<User>;
}

export class OAuthAccount {
    id: string;
    provider: string;
    providerAccountId: string;
    userId: string;
    user: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class OTP {
    id: string;
    code: string;
    expiry: DateTime;
    email: string;
    user: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Session {
    id: string;
    sessionToken: string;
    userId: string;
    user: User;
    expires: DateTime;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Socials {
    id: string;
    facebook?: Nullable<string>;
    twitter?: Nullable<string>;
    instagram?: Nullable<string>;
    linkedin?: Nullable<string>;
    userId: string;
    user: User;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class User {
    id: string;
    fullname: string;
    email: string;
    password: string;
    phone?: Nullable<string>;
    loginAttempt: number;
    blocked: boolean;
    refreshToken?: Nullable<string>;
    otp: OTP[];
    image?: Nullable<string>;
    userName?: Nullable<string>;
    isActive: boolean;
    address: Address[];
    socials?: Nullable<Socials>;
    oauthAccounts: OAuthAccount[];
    sessions: Session[];
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
