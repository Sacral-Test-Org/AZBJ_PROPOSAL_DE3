import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerDetailsComponent } from './partner-details.component';
import { PartnerService } from '../../services/partner.service';
import { of } from 'rxjs';

class MockPartnerService {
  getPartnerDetails() {
    return of([]);
  }
}

describe('PartnerDetailsComponent', () => {
  let component: PartnerDetailsComponent;
  let fixture: ComponentFixture<PartnerDetailsComponent>;
  let partnerService: PartnerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerDetailsComponent ],
      providers: [ { provide: PartnerService, useClass: MockPartnerService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerDetailsComponent);
    component = fixture.componentInstance;
    partnerService = TestBed.inject(PartnerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch partner details', () => {
    spyOn(partnerService, 'getPartnerDetails').and.callThrough();
    component.ngOnInit();
    expect(partnerService.getPartnerDetails).toHaveBeenCalled();
  });

  it('should validate details', () => {
    spyOn(component, 'validateDetails').and.callThrough();
    component.validateDetails();
    expect(component.validateDetails).toHaveBeenCalled();
  });

  it('should exit form', () => {
    spyOn(component, 'exitForm').and.callThrough();
    component.exitForm();
    expect(component.exitForm).toHaveBeenCalled();
  });
});
