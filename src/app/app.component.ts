import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'perms-test';

  constructor(
    private permissionsService: NgxPermissionsService,
    private rolesService: NgxRolesService
  ) {}

  ngOnInit(): void {
    // const perm = ["EDITOR", "ADMIN"];
    const perm = ["ADMIN"];
    // const perm = ["ADMIN", "SECRET"];
    // const perm = ["EDITOR"];

    this.permissionsService.loadPermissions(perm);
  }

}





