import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { ContentComponent } from './components/container/content/content.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { AccordionComponentComponent } from './pages/layouts/accordion-component/accordion-component.component';
import { ListsComponent } from './pages/layouts/lists/lists.component';
import { StepperComponent } from './pages/layouts/stepper/stepper.component';
import { LayoutComponent } from './pages/layouts/layout/layout.component';
import { TabsComponent } from './pages/layouts/tabs/tabs.component';
import { InputsComponent } from './pages/forms/inputs/inputs.component';
import { FormLayoutComponent } from './pages/forms/form-layout/form-layout.component';
import { ButtonsComponent } from './pages/forms/buttons/buttons.component';
import { DatepickerComponent } from './pages/forms/datepicker/datepicker.component';

const router: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path : 'layout' ,
        component : LayoutComponent,
        children : [
          { path: 'stepper', component: StepperComponent },
          { path: 'lists', component: ListsComponent },
          {path : 'accordion' , component : AccordionComponentComponent},
          {path : 'tabs' , component : TabsComponent}
        ]
      } ,
      {
        path : 'forms' ,
        component : FormsComponent ,
        children : [
          { path : 'inputs' , component : InputsComponent} ,
          {path : 'layout' , component : FormLayoutComponent},
          {path : 'buttons' , component : ButtonsComponent} ,
          { path : 'datepicker' , component : DatepickerComponent}
        ]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
