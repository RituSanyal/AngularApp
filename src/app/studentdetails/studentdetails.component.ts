import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  student : Student;
  studlist :Student[];
  ngOnInit() {
  }

 onSubmit(form: NgForm){
   var list= this.studentService.getData();
   list.snapshotChanges().subscribe(item=>{
     this.studlist=[];
     item.forEach(element=>{
       var stud = element.payload.toJSON();
       this.studlist.push(stud as Student);
      
     });

   });
 
    this.studlist.forEach(stud=>{
      if(stud.id == form.value)
        {
          this.student.id= stud.id;
          this.student.name= stud.name;
          this.student.subject= stud.subject;
          this.student.test= stud.test;

        }

    });

  }

   
 
 } 

