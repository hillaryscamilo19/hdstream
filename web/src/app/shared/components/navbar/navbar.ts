import { Component } from '@angular/core';
import { Toolbar, ToolbarModule  } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ ToolbarModule,Toolbar, ButtonModule, IconFieldModule, InputIconModule, SplitButtonModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
   items: MenuItem[] | undefined;

}
