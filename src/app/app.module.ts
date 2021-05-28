import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {OptionsComponent} from './components/options/options.component';
import {FormsModule} from '@angular/forms';
import {SettingsService} from './services/settings.service';
import {HomeComponent} from './components/home/home.component';
import {BitbucketService} from './services/bitbucket.service';
import {HttpClientModule} from '@angular/common/http';
import { PullRequestComponent } from './components/pull-request-view/pull-request.component';
import { UserComponent } from './components/user/user.component';
import { PullRequestStateComponent } from './components/pull-request-state/pull-request-state.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    HomeComponent,
    PullRequestComponent,
    UserComponent,
    PullRequestStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    BitbucketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}