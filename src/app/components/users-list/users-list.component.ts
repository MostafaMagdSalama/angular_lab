import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers:[UsersService]
})
export class UsersListComponent implements OnInit {
 users:User[]=[];
 keys:string[]=['name','email','number'];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>this.users=data)
  }
   getValue(user:User , key:string) {
    return (user as any)[key];
}
deleteHandler(id:number){
this.users=this.users.filter(data=>data.id!==id)
}
updateHandler(){}
userAdded(user:User)
{
  this.users.push(user);
}
}
