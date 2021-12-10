import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { TrailerAdminComponent } from './components/trailer-admin/trailer-admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import {TrailerListComponent} from './components/trailer-list/trailer-list.component';
import{ TrailerPreviewComponent } from './components/trailer-preview/trailer-preview.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/trailer',
    pathMatch: 'full'
  },
  {
    path:'trailer',
    component: TrailerAdminComponent
    //Colocar el AuthGuard, insertar el list de trailers 
  },
  {
      path: 'signup',
      component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path:'trailerlist',
    component: TrailerListComponent 
  },{
    path:'trailerlist/:id',
    component: TrailerPreviewComponent
  }
  // {
  //   path: 'course',
  //   component: CourseComponent
  // },
  // {
  //   path: 'private',
  //   component: PrivateCourseComponent,
  //   canActivate:[AuthGuard]
  // },
  // {
  //   path: 'private-list',
  //   component: PrivateListCourseComponent,
  //   canActivate:[AuthGuard]
  // },

  // {
  //   path: 'view/:id',
  //   component: ViewComponent,
  //   canActivate:[AuthGuard]
  // },

  // {
  //   path: 'private/edit/:id',
  //   component: EditComponent,
  //   canActivate:[AuthGuard]
  // },
  // {
  //   path: 'course/edit/:id',
  //   component: PreviewComponent
  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // },
  // {
  //   path:'signin',
  //   component:SigninComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
