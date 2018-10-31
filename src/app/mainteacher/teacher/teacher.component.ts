import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../student.model';
import { StudentService } from '../../student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

 
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    if(form.value.$key==null)
   this.studentService.insertStudent(form.value);
   else
     this.studentService.updateStudent(form.value);
   this.resetForm(form);
  }

  resetForm(form? : NgForm){
    if(form!= null)
    form.reset();
    this.studentService.selectedStudent= {
      $key: null,
      name: '',
      id: 0,
      subject: '',
      test: ''
    }

  }
}
