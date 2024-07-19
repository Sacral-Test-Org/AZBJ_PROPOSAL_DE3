import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { MaritalStatusService } from '../services/marital-status.service';
import { CorrectValueComponent } from '../components/correct-value/correct-value.component';

@Directive({
  selector: '[appMaritalStatus]'
})
export class MaritalStatusDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private maritalStatusService: MaritalStatusService,
    private correctValueComponent: CorrectValueComponent
  ) {}

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'change', (event) => {
      this.onMaritalStatusChange(event.target.value);
    });
  }

  private onMaritalStatusChange(maritalStatus: string) {
    this.maritalStatusService.checkMaritalStatus(maritalStatus);
    this.handleFieldEnabling(maritalStatus);
    this.handleNavigation(maritalStatus);
  }

  private handleFieldEnabling(maritalStatus: string) {
    if (maritalStatus === 'M') {
      this.correctValueComponent.enableFields(['Father', 'Spouse']);
    } else if (maritalStatus === 'W') {
      this.correctValueComponent.enableFields(['Spouse']);
    } else {
      this.correctValueComponent.applyDefaultVisualAttribute();
    }
  }

  private handleNavigation(maritalStatus: string) {
    if (maritalStatus === 'M') {
      this.correctValueComponent.navigateToField('Spouse Date of Birth');
    } else if (maritalStatus === 'S') {
      this.correctValueComponent.navigateToField('PIN');
    } else {
      this.correctValueComponent.navigateToField('Spouse');
    }
  }
}