
import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { HostComponent } from './host/host.component'
import { TeamComponent } from './team/team.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'host',
    component: HostComponent
  },
  {
    path: 'team',
    component: TeamComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
