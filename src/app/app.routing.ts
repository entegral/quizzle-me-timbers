<<<<<<< HEAD
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
=======
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { HostComponent } from './host/host.component'
import { TeamComponent } from './team/team.component';
>>>>>>> alex/daniel

const appRoutes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: AppComponent
=======
    component: HomeComponent
  },
  {
    path: 'host',
    component: HostComponent
  },
  {
    path: 'team',
    component: TeamComponent
>>>>>>> alex/daniel
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
