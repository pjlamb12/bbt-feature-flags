import { Component } from '@angular/core';
import { FeatureFlags, FeatureFlagsService } from '@bbt-feature-flags/feature-flags';
import { map } from 'rxjs';

@Component({
	selector: 'bbt-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	public links$ = this._flags.featureFlags$.pipe(
		map((flags: FeatureFlags) => {
			const links = [
				{
					label: 'Home',
					path: '/',
				},
			];

			if (this._flags.isFeatureEnabled('saleActiveBanner')) {
				links.push({
					label: 'Sale',
					path: '/sale',
				});
			}

			return links;
		}),
	);

	constructor(private _flags: FeatureFlagsService) {}
}
