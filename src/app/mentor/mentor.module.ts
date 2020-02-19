import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorSignUpComponent } from './mentor-sign-up/mentor-sign-up.component';
import { MentorRoutingModule } from './mentor.routing.module';
import { MentorComponent } from './mentor.component';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { MentorInformationComponent } from './mentor-information/mentor-information.component';



@NgModule({
  declarations: [
    MentorSignUpComponent,
    MentorDashboardComponent,
    MentorComponent,
    MentorInformationComponent
  ],
  imports: [
    MentorRoutingModule,
    CommonModule
  ]
})
export class MentorModule { }
