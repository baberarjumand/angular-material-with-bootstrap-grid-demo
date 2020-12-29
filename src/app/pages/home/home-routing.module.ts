import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'table',
        loadChildren: () =>
          import('../../../app/pages/table/table.module').then(
            (m) => m.TableModule
          ),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('../../../app/pages/form/form.module').then(
            (m) => m.FormModule
          ),
      },
      {
        path: '**',
        redirectTo: 'table',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
