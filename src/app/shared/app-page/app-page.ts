import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { APPS, AppConfig } from '../../apps.config';
import { AppLinks } from '../app-links/app-links';

@Component({
  selector: 'app-shared-app-page',
  imports: [RouterLink, AppLinks],
  templateUrl: './app-page.html',
  styles: `
    .page {
      max-width: var(--max-width-md);
      margin: 0 auto;
      padding: 40px 24px 80px;
    }

    .back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.875rem;
      color: var(--color-text-muted);
      margin-bottom: 40px;
      transition: color 0.15s;
    }

    .back:hover {
      color: var(--color-primary);
      text-decoration: none;
    }

    .badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--color-primary);
      background: var(--color-primary-light);
      padding: 3px 10px;
      border-radius: 999px;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 2.25rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin-bottom: 12px;
      color: var(--color-text);
    }

    .description {
      font-size: 1.125rem;
      color: var(--color-text-muted);
      max-width: 480px;
      line-height: 1.7;
      margin-bottom: 40px;
    }

    .divider {
      border: none;
      border-top: 1px solid var(--color-border);
      margin-bottom: 32px;
    }
  `,
})
export class AppPage {
  private route = inject(ActivatedRoute);

  protected app: AppConfig = (() => {
    const slug = this.route.snapshot.data['appSlug'] ?? '';
    return APPS.find(a => a.slug === slug) ?? { slug, name: slug, description: '', category: '' };
  })();
}
