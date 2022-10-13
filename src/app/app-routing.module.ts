import { AdminOnlyComponent } from './admin-only/admin-only.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', 
    title: 'Home Page', 
    component: FirstComponent
  },
  { path: 'second-component',
    title: 'Second component',
    component: SecondComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['EDITOR'],
       }
    }    
  },
  { path: 'admin-only-component', 
    title: 'Admin Only Page', 
    component: AdminOnlyComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN'],
       }
    }
  },  
  { path: '', // Home page
    component: FirstComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
