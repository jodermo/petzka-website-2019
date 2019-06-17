import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from './page/customers/customers.component';
import { ToolsComponent } from './page/tools/tools.component';
import { LinksComponent } from './page/links/links.component';
import { ImprintComponent } from './page/imprint/imprint.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { HttpClient } from '@angular/common/http';
import { SocialMediaButtonsComponent } from './components/social-media-buttons/social-media-buttons.component';
import { SocialMediaSharingComponent } from './components/social-media-sharing/social-media-sharing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tools',
    component: ToolsComponent,
  },
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectorComponent,
    HeaderComponent,
    FooterComponent,
    CustomersComponent,
    ToolsComponent,
    LinksComponent,
    ImprintComponent,
    ContactComponent,
    HomeComponent,
    SocialMediaButtonsComponent,
    SocialMediaSharingComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
