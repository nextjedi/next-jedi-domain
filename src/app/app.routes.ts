import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'life-mathematics/privacy-policy', component: PrivacyPolicy },
];
