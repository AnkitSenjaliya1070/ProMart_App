import baseLocal from "../locales/baseLocalization";

export const localize = (localizeStr: string) => baseLocal.t(localizeStr);


export const debugLog = (message: string, params: Record<string, any>) => {
    console.log(message, params);
};