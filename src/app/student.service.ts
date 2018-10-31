import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: AngularFireList<any>;
  selectedStudent: Student = new Student();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.studentList= this.firebase.list('students');
    return this.studentList;
  }

  insertStudent(student: Student){
  this.studentList.push({
    name: student.name,
    id: student.id,
    subject: student.subject,
    test: student.test

  });
}

updateStudent(stud: Student){

  this.studentList.update(stud.$key,{
    name: stud.name,
    id: stud.id,
    subject: stud.subject,
    test: stud.test

  })

}


deleteStudent(key : string)
{
 this.studentList.remove(key);
}

}
