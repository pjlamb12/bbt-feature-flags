import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './lib.routes';
import { HomeComponent } from './home/home.component';
import { SalePageComponent } from './sale-page/sale-page.component';
import { FeatureFlagsModule } from '@bbt-feature-flags/feature-flags';

@NgModule({
	imports: [CommonModule, RouterModule.forChild(homeRoutes), FeatureFlagsModule],
	declarations: [HomeComponent, SalePageComponent],
})
export class HomeModule {}
