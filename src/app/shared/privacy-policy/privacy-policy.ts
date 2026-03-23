import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { APPS, AppConfig } from '../../apps.config';

@Component({
  selector: 'app-shared-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
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

    .app-label {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      margin-bottom: 8px;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 4px;
    }

    .updated {
      font-size: 0.875rem;
      color: var(--color-text-light);
      margin-bottom: 40px;
    }

    h2 {
      font-size: 1rem;
      font-weight: 600;
      margin-top: 28px;
      margin-bottom: 8px;
      color: var(--color-text);
    }

    p {
      color: var(--color-text-muted);
      line-height: 1.7;
    }
  `,
})
export class SharedPrivacyPolicy {
  private route = inject(ActivatedRoute);

  protected app: AppConfig = (() => {
    const slug = this.route.snapshot.data['appSlug'] ?? '';
    return APPS.find(a => a.slug === slug) ?? { slug, name: slug, description: '', category: '' };
  })();
}
