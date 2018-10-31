import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
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

  onDelete(form: NgForm){
    if(confirm('Are you sure you want to delete this record ?')==true)
    {
      this.studentService.deleteStudent(form.value.$key);
     this.resetForm(form);
    }
  }
}
