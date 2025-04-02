import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = '101413399-lab-test2-comp3133';
}
