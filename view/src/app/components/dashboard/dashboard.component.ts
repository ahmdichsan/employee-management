import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private menuService: MenuService,
  ) {
    this.menuService.setShowMenu(true);
  }

  ngOnInit() {
  }

}
