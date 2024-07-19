import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Context } from './context.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyDetailsContextService {
  private currentContext: Context;

  constructor(private http: HttpClient) {}

  determineContext(): Context {
    // Logic to determine the current context based on user actions and current state
    // This is a placeholder logic, replace it with actual implementation
    this.currentContext = { block: 'PH_FAMILY_DETAILS', item: 'FM_MEMBER' };
    return this.currentContext;
  }

  getFamilyDetails(context: Context): Observable<any> {
    const url = `/api/family-details?block=${context.block}&item=${context.item}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getContext(): Context {
    return this.currentContext;
  }

  setContext(context: Context): void {
    this.currentContext = context;
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
