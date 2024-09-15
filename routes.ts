/**
 * An array of routes that are accessable to the Public
 * These routes don't require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /seettings
 * @type {string[]}
 */
export const authRoutes = ["/authentication/login", "/authentication/signup"];

/**
 * The prefix for API authentication
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
// export const settingsRoute = ["/settings"];
