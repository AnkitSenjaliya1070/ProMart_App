export enum TabNavigationScreens {
    Home = 'Home',
    Categories = 'Categories',
    Offers = 'Offers',
    Wishlist = 'Wishlist',
    Cart = 'Cart',
}

export type TabNavigationParamList = {
    [TabNavigationScreens.Home]: undefined;
    [TabNavigationScreens.Categories]: undefined;
    [TabNavigationScreens.Offers]: undefined;
    [TabNavigationScreens.Wishlist]: undefined;
    [TabNavigationScreens.Cart]: undefined;
};
