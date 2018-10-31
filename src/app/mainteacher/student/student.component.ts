import { Component, OnInit } from '@angular/core';
import { Student } from '../../student.model';
import { StudentService } from '../../student.service';
import { element } from 'protractor';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentlist: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  var list = this.studentService.getData();
  list.snapshotChanges().subscribe(item=>{
   this.studentlist=[];
   item.forEach(element=>{
     var details= element.payload.toJSON();
     details['$key']=element.key;
     this.studentlist.push(details as Student);

   });

  });

  }

  onItemClick(stud: Student){

    this.studentService.selectedStudent= Object.assign({},stud);
  }


}
