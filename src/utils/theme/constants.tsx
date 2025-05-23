import {Dimensions} from 'react-native';

export const appointment = {};

export const commonConstant = {
    appName: 'Festival Post',
    scrWidth: Dimensions.get('screen').width,
    scrHeight: Dimensions.get('screen').height,
    // appUser: {},
    appUser: {} as any,
    defaultProfile: {} as any,
    userTokenData: null,
    // animation Timing
    animTime100: 100,
    animTime200: 200,
    animTime300: 300,
    animTime350: 350,
    animTime400: 400,
    animTime500: 500,
    animTime700: 700,
    animTime1000: 1000,
    animTime1500: 1500,
    animDelay5500: 5500,
    dateMonthFormat: 'DD MMM',
};

export const apiStatusCode = {
    success: 200,
    successDocument: 201,
    invalidContent: 422,
    unAuthorized: 401,
    routerError: 400,
    serverError: 500,
};

export const asyncStorageKeys = {
    userToken: 'userToken',
    userData: 'userData',
    defaultProfile: 'defaultProfile',
};

export const eventListenerKeys = {
    loginListener: 'loginListener',
    logoutListener: 'logoutListener',
    Logout: 'Logout',
};

export default {
    commonConstant,
    asyncStorageKeys,
    eventListenerKeys,
    apiStatusCode,
};
