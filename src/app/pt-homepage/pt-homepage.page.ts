import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pt-homepage',
  templateUrl: './pt-homepage.page.html',
  styleUrls: ['./pt-homepage.page.scss'],
  standalone: false
})
export class PtHomepagePage implements OnInit {
  Username: string = '';
  constructor() { }

    ngOnInit() {
    // Esempio: recupero user da sessionStorage (adatta se usi un altro storage)
    const userString = sessionStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.Username = user.full_name || user.username || '';
    }
  }

}
