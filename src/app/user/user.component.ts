import { Component } from '@angular/core';

interface User{
  userNanme : string
  email : string
  language : string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
  
})
export class UserComponent {
  user: User = {
    userNanme: 'your_username', // Correct the property name
    email: 'your_email@example.com',
    language: 'en'
  };
}
