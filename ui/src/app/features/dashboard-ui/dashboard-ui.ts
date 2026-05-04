import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../user-service';

@Component({
  selector: 'app-dashboard-ui',
  imports: [],
  templateUrl: './dashboard-ui.html',
  styleUrl: './dashboard-ui.css',
})
export class DashboardUi implements OnInit{
  #_us=inject(UserService);

  ngOnInit(): void {
    this.#_us.get().subscribe((data)=>{
      console.log(".................");

    })
  }
}
