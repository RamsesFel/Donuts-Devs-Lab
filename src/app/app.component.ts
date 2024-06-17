import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DonutsComponent,FamousPeopleComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutsDevsLab';
}
