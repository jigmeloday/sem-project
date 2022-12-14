import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminShareComponent } from './admin-share.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [{ path: '', component: FooterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminShareRoutingModule { }
