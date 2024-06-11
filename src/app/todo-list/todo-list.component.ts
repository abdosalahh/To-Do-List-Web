import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tsakArray = [{taskName:'HCI' , taskDescription:'Humman Comp Interaction' , dueDate:'4/6/2002' , isDone : false , isEdit : false}];

  onSubmit(form: NgForm)
  {
      console.log(form);
      this.tsakArray.push
      ({
        taskName: form.controls['taskName'].value,
        taskDescription: form.controls['taskDescription'].value,
        dueDate: form.controls['dueDate'].value,
        isDone: false,
        isEdit: false
      })
      form.reset();
  }
  
  onDelete(index: number)
  {
    console.log(index);
    this.tsakArray.splice(index, 1);
  }

  onCheck(index: number)
  {
    console.log(this.tsakArray);
    this.tsakArray[index].isDone = !this.tsakArray[index].isDone;
  }

  onEdit(index: number)
  {
     this.tsakArray[index].isEdit = true;
  }

  onUpdate(index: number, taskName: string, taskDescription: string, dueDate: string)
  {
     this.tsakArray[index].taskName = taskName;
     this.tsakArray[index].taskDescription = taskDescription;
     this.tsakArray[index].dueDate = dueDate;
     this.tsakArray[index].isEdit = false;
  }
}
