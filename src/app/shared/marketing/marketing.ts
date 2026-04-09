import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { APPS, AppConfig } from '../../apps.config';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-shared-marketing',
  imports: [RouterLink, FooterComponent],
  templateUrl: './marketing.html',
  styles: [`
    .sub-page { min-height: 100vh; display: flex; flex-direction: column; }
    .sub-content { flex: 1; padding: 64px 32px 80px; }
    .sub-inner { max-width: var(--max-width-md); margin: 0 auto; }
    .back-link {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 0.875rem; font-weight: 500; color: var(--color-text-muted);
      margin-bottom: 40px; text-decoration: none; transition: color 0.15s;
    }
    .back-link:hover { color: var(--accent); }
    .back-link .material-symbols-outlined { font-size: 18px; }
    .sub-eyebrow {
      font-size: 0.72rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.1em; color: var(--accent); margin-bottom: 8px;
    }
    h1 {
      font-family: var(--font-headline); font-size: 2.25rem; font-weight: 800;
      letter-spacing: -0.02em; color: var(--color-text); margin-bottom: 20px;
    }
    p { color: var(--color-text-muted); line-height: 1.7; }
  `],
})
export class SharedMarketing {
  private route = inject(ActivatedRoute);

  protected app: AppConfig = (() => {
    const slug = this.route.snapshot.data['appSlug'] ?? '';
    return (
      APPS.find((a) => a.slug === slug) ?? {
        slug, name: slug, description: '', category: '', icon: 'apps',
        accent: '#3525cd', accentLight: '#e2dfff', accentDark: '#1a0fa0',
        taglinePrefix: '', taglineAccent: slug, phase: 'development', features: [],
      }
    );
  })();
}
