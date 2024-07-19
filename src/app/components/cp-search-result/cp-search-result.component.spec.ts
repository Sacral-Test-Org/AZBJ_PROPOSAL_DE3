import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CP_SearchResultComponent } from './cp-search-result.component';
import { CP_SearchResultService } from './cp-search-result.service';
import { PolicyDetailsService } from '../policy-details/policy-details.service';
import { of } from 'rxjs';

class MockCP_SearchResultService {
  getSearchResults() {
    return of([]);
  }
}

class MockPolicyDetailsService {
  getPolicyDetails() {
    return of({});
  }
}

describe('CP_SearchResultComponent', () => {
  let component: CP_SearchResultComponent;
  let fixture: ComponentFixture<CP_SearchResultComponent>;
  let searchResultService: CP_SearchResultService;
  let policyDetailsService: PolicyDetailsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CP_SearchResultComponent],
      providers: [
        { provide: CP_SearchResultService, useClass: MockCP_SearchResultService },
        { provide: PolicyDetailsService, useClass: MockPolicyDetailsService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CP_SearchResultComponent);
    component = fixture.componentInstance;
    searchResultService = TestBed.inject(CP_SearchResultService);
    policyDetailsService = TestBed.inject(PolicyDetailsService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch search results', () => {
    const searchResultsSpy = spyOn(searchResultService, 'getSearchResults').and.callThrough();
    component.ngOnInit();
    expect(searchResultsSpy).toHaveBeenCalled();
    expect(component.searchResults).toEqual([]);
  });

  it('should select a record', () => {
    const record = { partnerId: '123' };
    component.selectRecord(record);
    expect(component.selectedRecord).toEqual(record);
  });

  it('should view policy details', () => {
    const record = { partnerId: '123' };
    const policyDetailsSpy = spyOn(policyDetailsService, 'getPolicyDetails').and.callThrough();
    component.viewPolicyDetails(record);
    expect(policyDetailsSpy).toHaveBeenCalledWith(record.partnerId);
  });
});
