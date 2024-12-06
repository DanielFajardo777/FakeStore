import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private service: ServiceService){}

  change(event: Event){
    const inputValue = (event.target as HTMLInputElement).value;
    this.service.setData(inputValue)
  }
}
