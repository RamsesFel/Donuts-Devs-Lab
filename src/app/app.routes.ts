import { Routes } from '@angular/router';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';
import { DonutsComponent } from './components/donuts/donuts.component';


export const routes: Routes = [
        { path: 'FamousPeopleComponent', component: FamousPeopleComponent },
        { path: 'DonutsComponent', component: DonutsComponent }
];
