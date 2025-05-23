export enum RootStackScreens {
    Splash = 'SplashScreen',
    Tab = 'TabScreen',
    NavStack = 'NavStack',
}

export type RootStackParamList = {
    [RootStackScreens.Splash]: undefined;
    [RootStackScreens.Tab]: undefined;
    [RootStackScreens.NavStack]: undefined;
};
