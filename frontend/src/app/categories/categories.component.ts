import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
  showSubMenu : { [key: string]: boolean } = {
    showSettingsSubMenu: false,
    showUsersSubMenu: false
  }

  handleSubMenuClick(type : string){
    for (const [key, value] of Object.entries(this.showSubMenu)) {
      if(type !== key)
        this.showSubMenu[key] = false;
      else
        this.showSubMenu[key] = !this.showSubMenu[key];
    }
  }
}
