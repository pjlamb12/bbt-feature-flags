export class FeatureFlagsConfig {
	/**
	 * @type {string} The URL to the JSON file that contains the feature flags.
	 */
	jsonUrl: string;
	/**
	 * @type {boolean} If true, the feature flag will be off by default. If a feature flag is not found in the JSON object, it will be set to this value.
	 */
	defaultToFlagOff = true;

	constructor(config: any = {}) {
		this.jsonUrl = config.jsonUrl || './assets/feature-flags.json';
		this.defaultToFlagOff = !!config.defaultToFlagOff;
	}
}
