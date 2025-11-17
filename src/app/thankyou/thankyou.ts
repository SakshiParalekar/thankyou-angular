import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  templateUrl: './thankyou.html',
  styleUrls: ['./thankyou.css']
})
export class ThankyouComponent {
  name = '';
  email = '';

  constructor(private router: Router) {}

  sendEmail() {
    const subject = encodeURIComponent('Thank You - Resume attached');
    const body = encodeURIComponent(`Hi,\n\nThank you for the opportunity.\n\nBest regards,\n${this.name}`);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
