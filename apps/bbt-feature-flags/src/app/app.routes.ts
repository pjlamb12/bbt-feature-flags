import { Route } from '@angular/router';

export const appRoutes: Route[] = [
	{ path: '', loadChildren: () => import('@bbt-feature-flags/home').then((m) => m.HomeModule) },
];
