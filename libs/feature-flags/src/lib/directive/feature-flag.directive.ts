import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FeatureFlagsService } from '../service/feature-flags.service';

@Directive({
	selector: '[bbtFeatureFlag]',
})
export class FeatureFlagDirective implements OnInit {
	private requiredFlag = '';
	private isHidden = true;

	@Input() set bbtFeatureFlag(val: string) {
		if (val) {
			this.requiredFlag = val;
			this.updateView();
		}
	}

	constructor(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		private _templateRef: TemplateRef<any>,
		private _viewContainer: ViewContainerRef,
		private _featureFlags: FeatureFlagsService,
	) {}

	ngOnInit() {
		this.updateView();
	}

	private updateView() {
		const validity = this.checkValidity();
		if (validity) {
			if (this.isHidden) {
				this._viewContainer.createEmbeddedView(this._templateRef);
				this.isHidden = false;
			}
		} else {
			this._viewContainer.clear();
			this.isHidden = true;
		}
	}

	private checkValidity() {
		return this.requiredFlag && this._featureFlags.isFeatureEnabled(this.requiredFlag);
	}
}
