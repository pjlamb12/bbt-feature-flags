import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { FeatureFlagsService } from '../service/feature-flags.service';

export function FeatureFlagGuard(flagName: string, redirectRoute: string): CanMatchFn {
	return () => {
		const featureFlagsService: FeatureFlagsService = inject(FeatureFlagsService);
		const router: Router = inject(Router);
		const isFlagEnabled = featureFlagsService.isFeatureEnabled(flagName);
		return isFlagEnabled || router.createUrlTree([redirectRoute]);
	};
}
