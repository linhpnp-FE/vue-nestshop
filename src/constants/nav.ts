// src/constants/nav.ts
type RouteObject = {
    name: string;
    params?: any;
    query?: any;
};

export type NavItem = { name: string; to: string | RouteObject; };

export const MAIN_NAV: NavItem[] = [
    { name: 'index', to: { name: 'index' } },
    { name: 'shop', to: { name: 'shop' } },
];

export const SECONDARY_NAV: NavItem[] = [
    { name: 'shop', to: { name: 'shop' } },
];