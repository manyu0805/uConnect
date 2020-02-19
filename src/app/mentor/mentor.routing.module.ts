import { Routes, RouterModule } from '@angular/router';
import { MentorSignUpComponent } from './mentor-sign-up/mentor-sign-up.component';
import { NgModule } from '@angular/core';
import { MentorDashboardComponent } from './mentor-dashboard/mentor-dashboard.component';
import { MentorInformationComponent } from './mentor-information/mentor-information.component';




const routes: Routes = [
    {path: 'sign-up', component: MentorSignUpComponent},
    { path: ':id',
        children: [
            {path: 'dashboard', component: MentorDashboardComponent},
            {path: 'information', component: MentorInformationComponent},
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MentorRoutingModule { }