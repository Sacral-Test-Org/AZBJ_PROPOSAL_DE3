package com.azbj.proposalde3.model;

import java.util.Date;

public class Control {
    // Fields for policy holder details
    private String policyHolderName;
    private String policyHolderAddress;
    private String policyHolderContact;

    // Fields for insured person details
    private String insuredPersonName;
    private String insuredPersonAddress;
    private String insuredPersonContact;

    // Fields for PAN approval details
    private Date ipPanIssuanceDate;
    private Date phPanIssuanceDate;
    private String ageProof;
    private String ageProofId;
    private Date panIssuanceDate;
    private String uwReason;
    private String supervisorComments;
    private boolean ipPanDateUnavailable;
    private boolean phPanDateUnavailable;

    // Fields for Employee ID
    private String employeeId;
    private String fscCode;
    private boolean validationResult;

    // Fields for Status field and image data
    private String statusField;
    private String imageData;

    // Fields for assignment flag and eIA
    private boolean assignmentFlag;
    private boolean eIA;

    // Fields for Aadhaar details
    private String ipAadhaar;
    private String phAadhaar;
    private String moduleName;

    // Fields for AML information
    private String documentType;
    private String requestCode;
    private String documentDescription;
    private String information;
    private String proofType;
    private String documentId;
    private Date documentDate;
    private String oldPolicyReference;
    private String proofDescription;
    private String documentRemarks;

    // Fields for Document ID validation
    private String documentIdValidation;
    private boolean validationResultDocumentId;

    // Fields for Previous Policy PAN Details
    private String previousPolicyPanDetails;

    // Fields for scrutiny number and EIA details
    private String applicationNumber;
    private String scrutinyNumber;
    private boolean eiaDetailsExists;

    // Fields for Document DE button functionality
    private String correctValueApplnNo;
    private Date correctValuePhDob;
    private int pkVarsVDocumentDeCnt;

    // Fields for passport details
    private String passportNumber;
    private Date dateOfBirth;
    private int age;
    private String gender;

    // Fields for bank account details
    private String bankAccountNumber;
    private String ifscCode;

    // Fields for driving license details
    private String drivingLicenseNumber;
    private Date drivingLicenseDob;
    private String ageProofType;

    // Fields for Voter ID verification
    private boolean voterIdVerified;
    private Object insuredPersonDetails;
    private Object policyholderDetails;

    // Fields for PAN card validation
    private String panCardNumber;
    private boolean isValidPanCard;
    private String middleName;
    private String firstName;
    private String surname;
    private Date panCardDob;
    private String validationFlag;

    // Fields for duplicate contact number details
    private String contactNumber;
    private boolean duplicateContact;

    // Fields for EIA details
    private String eiaDetails;

    // Fields for selected option
    private String selectedOption;

    // Fields for nominee details
    private String nomineeName;
    private String nomineeBirthplace;
    private Date nomineeDob;
    private String nomineeRelation;
    private String nomineeGender;

    // Fields for product code validation
    private String productCode;
    private String productType;

    // Fields for signature decision verification
    private String signatureDecision;

    // Fields for PAN validation status and messages
    private String panStatus;
    private String validationMessage;

    // Fields for Employer Name
    private int employerNameId;
    private String employerName;

    // Fields for Aadhaar validation
    private String aadharNumber;
    private String aadharDetails;

    // Fields for parameter list
    private String inceptionDate;
    private String policyRef;
    private String applicationNo;
    private String solutionConfigId;
    private String solutionName;
    private String amountInvested;
    private String contractId;
    private String solutionId;
    private String callingFrom;

    // Fields for BI report data
    private String bi;

    // Fields for azbj_aml_sip_dtls table
    private String applicationNoSip;
    private String topIndicator;
    private String actionCode;
    private String proofTypeSip;
    private String docValue;
    private Date docExpiryDate;
    private String moduleFlag;
    private String sgPremium;
    private String sgTasa;

    // Getters and Setters
    // Add getters and setters for all fields

    // Example getter and setter for policyHolderName
    public String getPolicyHolderName() {
        return policyHolderName;
    }

    public void setPolicyHolderName(String policyHolderName) {
        this.policyHolderName = policyHolderName;
    }

    // Add similar getters and setters for all other fields
}