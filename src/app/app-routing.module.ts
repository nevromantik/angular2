import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { UserContainerComponent } from './user-container/user-container/user-container.component';

const routes: Routes = [
  {path: "user", component: UserContainerComponent},
  {path: "order", component: OrderContainerComponent},
  {path: "404", component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
  { path: '', redirectTo: 'user', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
