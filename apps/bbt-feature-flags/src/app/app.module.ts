import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureFlagsModule } from '@bbt-feature-flags/feature-flags';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent, NxWelcomeComponent, NavbarComponent, FooterComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
		FeatureFlagsModule.forRoot({ defaultToFlagOff: true, jsonUrl: 'assets/feature-flags.json' }),	
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
