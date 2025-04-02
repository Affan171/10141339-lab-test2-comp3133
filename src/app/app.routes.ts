import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

export const routes: Routes = [
    {path: '', component: MissionlistComponent},
    {path:'detail/:id' , component:DetailComponent}
];
