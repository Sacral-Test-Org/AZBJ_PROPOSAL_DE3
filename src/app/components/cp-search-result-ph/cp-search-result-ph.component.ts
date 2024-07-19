import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-cp-search-result-ph',
  templateUrl: './cp-search-result-ph.component.html',
  styleUrls: ['./cp-search-result-ph.component.css']
})
export class CpSearchResultPhComponent {
  cpSearchResults: any[] = [];

  constructor(private router: Router, private http: HttpClient, private logger: NGXLogger) {}

  handleMergeFlag() {
    this.logger.debug('Starting handleMergeFlag method');
    for (let record of this.cpSearchResults) {
      if (record.checked) {
        record.mergeFlag = 'Y';
        this.logger.info('CP merging details for PH captured successfully');
        alert('CP merging details for PH captured successfully');
        break;
      }
    }
    this.router.navigate(['/cp-search-result-ph']);
  }
}
