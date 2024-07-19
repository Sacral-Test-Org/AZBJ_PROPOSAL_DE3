import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadRequestService } from '../../services/upload-request.service';
import { UploadRequest } from '../../models/upload-request.model';

@Component({
  selector: 'app-upload-request',
  templateUrl: './upload-request.component.html',
  styleUrls: ['./upload-request.component.css']
})
export class UploadRequestComponent implements OnInit {
  uploadRequestForm: FormGroup;
  uploadRequest: UploadRequest;
  receivedStatusOptions = [
    { value: '5', label: '5' },
    { value: '8', label: '8' },
    { value: 'SL', label: 'No' }
  ];

  constructor(private fb: FormBuilder, private uploadRequestService: UploadRequestService) {}

  ngOnInit(): void {
    this.uploadRequestForm = this.fb.group({
      applicationNumber: [{ value: '', disabled: true }],
      requestCode: [{ value: '', disabled: true }],
      requestDescription: [{ value: '', disabled: true }],
      uploadDate: [{ value: '', disabled: true }],
      uploadUser: [{ value: '', disabled: true }],
      receivedStatus: [{ value: '', disabled: true }],
      contactNumber: [{ value: '', disabled: true }],
      passportNumber: [{ value: '', disabled: true }],
      panNumber: [{ value: '', disabled: true }],
      aadhaarNumber: [{ value: '', disabled: true }],
      illnessQuestion: [{ value: '', disabled: true }],
      policyQuestion: [{ value: '', disabled: true }]
    });

    this.uploadRequestService.getUploadRequestDetails().subscribe((data: UploadRequest) => {
      this.uploadRequest = data;
      this.uploadRequestForm.patchValue({
        applicationNumber: data.applicationNumber,
        requestCode: data.requestCode,
        requestDescription: data.requestDescription,
        uploadDate: data.uploadDate,
        uploadUser: data.uploadUser,
        receivedStatus: data.receivedStatus,
        contactNumber: data.contactNumber,
        passportNumber: data.passportNumber,
        panNumber: data.panNumber,
        aadhaarNumber: data.aadhaarNumber,
        illnessQuestion: data.illnessQuestion ? 'Yes' : 'No',
        policyQuestion: data.policyQuestion ? 'Yes' : 'No'
      });
    });
  }

  onSubmit(): void {
    const selectedStatus = this.uploadRequestForm.get('receivedStatus').value;
    this.uploadRequestService.saveReceivedStatus(selectedStatus).subscribe(response => {
      console.log('Status saved successfully');
    });
  }
}
