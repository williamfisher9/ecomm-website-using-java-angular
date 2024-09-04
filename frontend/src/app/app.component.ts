import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CategoriesComponent } from "./categories/categories.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CategoriesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}
