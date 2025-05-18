import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'modal';
  links: string[] = [
    'Summary',
    'Tasks',
    'KYP',
    'Settings',
    'Activity',
    'API',
    'Postback',
    'Deals',
    'Campaigns',
    'Master Commissions',
    'Rebate',
    'Affiliate Statement',
  ];

  goTo(link: string) {
    this.router.navigate([link]);
  }
}
