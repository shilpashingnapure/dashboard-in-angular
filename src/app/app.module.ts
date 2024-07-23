import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/container/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { ContentComponent } from './components/container/content/content.component';
import { NavbarComponent } from './components/container/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsComponent } from './pages/forms/forms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { StepperComponent } from './pages/layouts/stepper/stepper.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ListsComponent } from './pages/layouts/lists/lists.component';
import { AccordionComponentComponent } from './pages/layouts/accordion-component/accordion-component.component';
import { TabsComponent } from './pages/layouts/tabs/tabs.component';
import { LayoutComponent } from './pages/layouts/layout/layout.component';

import { MatTabsModule } from '@angular/material/tabs';
import { InputsComponent } from './pages/forms/inputs/inputs.component';
import { MatSelectModule } from '@angular/material/select';
import { FormLayoutComponent } from './pages/forms/form-layout/form-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsComponent } from './pages/forms/buttons/buttons.component';
import { DatepickerComponent } from './pages/forms/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    ContentComponent,
    NavbarComponent,
    FormsComponent,
    DashboardComponent,
    AccordionComponent,
    StepperComponent,
    ListsComponent,
    AccordionComponentComponent,
    TabsComponent,
    LayoutComponent,
    InputsComponent,
    FormLayoutComponent,
    ButtonsComponent,
    DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatBadgeModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        showError: true,
        displayDefaultIndicatorType: false,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
