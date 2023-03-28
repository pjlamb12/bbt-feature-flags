import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFlagDirective } from './directive/feature-flag.directive';
import { FeatureFlagsService } from './service/feature-flags.service';
import { FeatureFlagsConfig } from './models/feature-flags-config.class';

export function loadFeatureFlags(featureFlagsService: FeatureFlagsService) {
	return () => featureFlagsService.loadFeatureFlags();
}

@NgModule({
	imports: [CommonModule],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: loadFeatureFlags,
			deps: [FeatureFlagsService],
			multi: true,
		},
	],
	declarations: [FeatureFlagDirective],
	exports: [FeatureFlagDirective],
})
export class FeatureFlagsModule {
	static forRoot(config: FeatureFlagsConfig): ModuleWithProviders<FeatureFlagsModule> {
		return {
			ngModule: FeatureFlagsModule,
			providers: [
				{
					provide: FeatureFlagsConfig,
					useValue: config,
				},
				FeatureFlagsService,
			],
		};
	}
}
