import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AssessmentsComponent } from './assessments/assessments.component';
import { OrganizationComponent } from './organization/organization.component';
import { VulnerabilityComponent } from './vulnerability/vulnerability.component';
import { VulnFormComponent } from './vuln-form/vuln-form.component';
import { OrgFormComponent } from './org-form/org-form.component';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { FooterComponent } from './footer/footer.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OrganizationComponent,
    AssessmentsComponent,
    VulnerabilityComponent,
    OrgFormComponent,
    AssetFormComponent,
    VulnFormComponent,
    FooterComponent,
    AssessmentFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [AppService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
