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
          import('../table/table.module').then((m) => m.TableModule),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('../form/form.module').then((m) => m.FormModule),
      },
      {
        path: 'grid',
        loadChildren: () =>
          import('../grid/grid.module').then((m) => m.GridModule),
      },
      {
        path: '**',
        redirectTo: 'grid',
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
