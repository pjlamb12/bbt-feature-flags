import { Route } from '@angular/router';
import { FeatureFlagGuard } from '@bbt-feature-flags/feature-flags';
import { HomeComponent } from './home/home.component';
import { SalePageComponent } from './sale-page/sale-page.component';

export const homeRoutes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'sale', component: SalePageComponent, canActivate: [FeatureFlagGuard('saleActiveRoute', '/')] },
];
