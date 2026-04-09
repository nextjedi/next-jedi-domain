import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

export interface WaitlistData {
  name: string;
  email: string;
  app?: string;
  platform?: string;
  feature: string;
}

export interface IdeaData {
  description: string;
}

export interface SupportData {
  name: string;
  email: string;
  app: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class AuroraService {
  // Replace with your deployed Google Apps Script URL after setup
  private readonly SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxa2zlgCIqwQD7GoEsLF08qJYXCdIZmTFfBc8jOwVMx4CkiJhZmddP2-ts--HRSaLsUDQ/exec';

  submitWaitlist(data: WaitlistData): Observable<void> {
    return from(
      fetch(this.SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'waitlist', ...data }),
      }).then(() => undefined)
    );
  }

  submitIdea(data: IdeaData): Observable<void> {
    return from(
      fetch(this.SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'idea', ...data }),
      }).then(() => undefined)
    );
  }

  submitSupport(data: SupportData): Observable<void> {
    return from(
      fetch(this.SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'support', ...data }),
      }).then(() => undefined)
    );
  }
}
