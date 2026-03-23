import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APPS } from '../apps.config';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styles: `
    .page {
      max-width: var(--max-width-lg);
      margin: 0 auto;
      padding: 64px 24px 80px;
    }

    .hero {
      margin-bottom: 56px;
    }

    .hero h1 {
      font-size: 2.75rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin-bottom: 12px;
      color: var(--color-text);
    }

    .hero p {
      font-size: 1.125rem;
      color: var(--color-text-muted);
      max-width: 440px;
    }

    .section-label {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-text-light);
      margin-bottom: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 16px;
    }

    .card {
      display: flex;
      flex-direction: column;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 24px;
      box-shadow: var(--shadow-sm);
      transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
    }

    .card:hover {
      box-shadow: var(--shadow-md);
      border-color: var(--color-primary);
      transform: translateY(-2px);
      text-decoration: none;
    }

    .card-badge {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--color-primary);
      background: var(--color-primary-light);
      padding: 2px 8px;
      border-radius: 999px;
      align-self: flex-start;
      margin-bottom: 12px;
    }

    .card h2 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--color-text);
    }

    .card p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.6;
      flex: 1;
      margin-bottom: 20px;
    }

    .card-cta {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    footer {
      margin-top: 80px;
      padding-top: 24px;
      border-top: 1px solid var(--color-border);
      font-size: 0.8rem;
      color: var(--color-text-light);
    }
  `,
})
export class Home {
  protected apps = APPS;
}
