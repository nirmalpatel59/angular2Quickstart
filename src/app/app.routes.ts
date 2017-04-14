import { Routes, RouterModule } from  '@angular/router';
import { GotComponent} from './got.component';
import { GotDetailsComponent } from './got.details.component';

const routes:Routes = [
    {
        path: 'houses',
        component: GotComponent
    },
    {
        path: 'houses/:id',
        component: GotDetailsComponent
    },
    {
        path:"",
        redirectTo: "/houses",
        pathMatch: 'full'
    }
]

export const routing = RouterModule.forRoot(routes);