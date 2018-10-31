import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { StudentComponent } from './mainteacher/student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { TeacherComponent } from './mainteacher/teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { environment } from '../environments/environment';
import { MainteacherComponent } from './mainteacher/mainteacher.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    AdminComponent,
    MainteacherComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
