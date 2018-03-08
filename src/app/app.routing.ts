import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SameAccountTransferComponent } from './Transfer/same-account-transfer/same-account-transfer.component';
import { SameAccountRemovalComponent } from './Removal/same-account-removal/same-account-removal.component';
import { NotFoundComponent } from './app.notFoundComponent';

// Route Configuration
export const routes: Routes = [
    { path: '', component: SameAccountTransferComponent },
    { path: 'Removal', component: SameAccountRemovalComponent },
    {path:'**',component:NotFoundComponent}
  ];

export const Routing:ModuleWithProviders=RouterModule.forRoot(routes);

