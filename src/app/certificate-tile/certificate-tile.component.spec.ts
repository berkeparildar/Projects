import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTileComponent } from './certificate-tile.component';

describe('CertificateTileComponent', () => {
  let component: CertificateTileComponent;
  let fixture: ComponentFixture<CertificateTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateTileComponent]
    });
    fixture = TestBed.createComponent(CertificateTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
