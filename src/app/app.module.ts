import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ProjectComponent } from './project/project.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { BlogComponent } from './blog/blog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { ExploreComponent } from './explore/explore.component';
import { RegisterComponent } from './register/register.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ProjectComponent,
    AchievementsComponent,
    BlogComponent,
    SidenavComponent,
    ContentComponent,
    ExploreComponent,
    RegisterComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
