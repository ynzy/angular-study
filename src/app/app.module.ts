import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { PrentComponent } from './components/prent/prent.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { VoterChildComponent } from './components/voter-child/voter-child.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { MissioncontrolComponent } from './components/missioncontrol/missioncontrol.component';
import { AstoronautComponent } from './components/astoronaut/astoronaut.component';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './components/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { AdService } from './services/ad.service';
import { HighlightDirective } from './directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    NameChildComponent,
    PrentComponent,
    VersionChildComponent,
    VoterChildComponent,
    CountdownTimerComponent,
    MissioncontrolComponent,
    AstoronautComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent,HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
