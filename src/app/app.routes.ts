import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AppPage } from './shared/app-page/app-page';
import { SharedPrivacyPolicy } from './shared/privacy-policy/privacy-policy';
import { SharedSupport } from './shared/support/support';
import { SharedMarketing } from './shared/marketing/marketing';
import { APPS } from './apps.config';

function appRoutes(slug: string): Routes {
  return [
    { path: slug, component: AppPage, data: { appSlug: slug } },
    { path: `${slug}/privacy-policy`, component: SharedPrivacyPolicy, data: { appSlug: slug } },
    { path: `${slug}/support`, component: SharedSupport, data: { appSlug: slug } },
    { path: `${slug}/marketing`, component: SharedMarketing, data: { appSlug: slug } },
  ];
}

export const routes: Routes = [
  { path: '', component: Home },
  ...APPS.flatMap(app => appRoutes(app.slug)),
];
