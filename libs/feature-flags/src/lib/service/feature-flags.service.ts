import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';
import { FeatureFlags } from '../models/feature-flag.interface';
import { FeatureFlagsConfig } from '../models/feature-flags-config.class';

@Injectable({
	providedIn: 'root',
})
export class FeatureFlagsService {
	private featureFlagsBs = new BehaviorSubject<FeatureFlags>({});
	public featureFlags$ = this.featureFlagsBs.asObservable();

	get featureFlags() {
		return this.featureFlagsBs.value;
	}

	constructor(@Optional() private config: FeatureFlagsConfig, private _http: HttpClient) {}

	loadFeatureFlags(): Observable<FeatureFlags> {
		return this._http.get<FeatureFlags>(this.config.jsonUrl).pipe(
			tap((flags: FeatureFlags) => {
				this.featureFlagsBs.next(flags);
			}),
			catchError((err: HttpErrorResponse) => {
				console.error('Error loading feature flags', err);

				return of({});
			}),
		);
	}

	isFeatureEnabled(feature: string): boolean {
		const flag = this.featureFlags[feature];

		if (flag === undefined || flag === null) {
			if (this.config.defaultToFlagOff) {
				return false;
			}

			return true;
		}

		return flag;
	}
}
