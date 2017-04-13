import { Routes, RouterModule } from  '@angular/router';
import { GotComponent} from './got.component';

const routes:Routes = [
    {
        path: 'houses',
        component: GotComponent
    },
    {
        path:"",
        redirectTo: "/houses",
        pathMatch: 'full'
    }
]

export const routing = RouterModule.forRoot(routes);