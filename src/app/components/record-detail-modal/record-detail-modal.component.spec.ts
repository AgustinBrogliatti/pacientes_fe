import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDetailModalComponent } from './record-detail-modal.component';

describe('RecordDetailModalComponent', () => {
  let component: RecordDetailModalComponent;
  let fixture: ComponentFixture<RecordDetailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordDetailModalComponent]
    });
    fixture = TestBed.createComponent(RecordDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
