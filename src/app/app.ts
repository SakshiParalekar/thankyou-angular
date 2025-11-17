import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou';  // correct import

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, ThankyouComponent]   // add ThankyouComponent here
})
export class AppComponent { }
