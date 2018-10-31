import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './mainteacher/student/student.component';
import { MainteacherComponent } from './mainteacher/mainteacher.component';
import { AdminComponent } from './admin/admin.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes=[
  { path: 'student', component: StudentdetailsComponent},
  { path: 'mainteacher', component: MainteacherComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
