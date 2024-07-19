package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class DeqcDetails {

    @Id
    @Column(name = "application_no")
    private String applicationNo;

    @Column(name = "policy_no")
    private String policyNo;

    @Column(name = "module_flag")
    private String moduleFlag;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "fthr_hus_name")
    private String fthrHusName;

    @Column(name = "gender")
    private String gender;

    @Column(name = "dob")
    private String dob;

    @Column(name = "dob_proof")
    private String dobProof;

    @Column(name = "id_proof")
    private String idProof;

    @Column(name = "pan_card_no")
    private String panCardNo;

    @Column(name = "perm_addr_1")
    private String permAddr1;

    @Column(name = "perm_addr_2")
    private String permAddr2;

    @Column(name = "perm_addr_3")
    private String permAddr3;

    @Column(name = "perm_addr_area")
    private String permAddrArea;

    @Column(name = "perm_city")
    private String permCity;

    @Column(name = "perm_pin")
    private String permPin;

    @Column(name = "perm_state")
    private String permState;

    @Column(name = "perm_county")
    private String permCounty;

    @Column(name = "perm_add_proof")
    private String permAddProof;

    @Column(name = "corr_addr_1")
    private String corrAddr1;

    @Column(name = "corr_addr_2")
    private String corrAddr2;

    @Column(name = "corr_addr_3")
    private String corrAddr3;

    @Column(name = "corr_addr_area")
    private String corrAddrArea;

    @Column(name = "corr_city")
    private String corrCity;

    @Column(name = "corr_pin")
    private String corrPin;

    @Column(name = "corr_state")
    private String corrState;

    @Column(name = "corr_county")
    private String corrCounty;

    @Column(name = "corr_add_proof")
    private String corrAddProof;

    @Column(name = "appl_tele_no")
    private String applTeleNo;

    @Column(name = "appl_alt_tel_no")
    private String applAltTelNo;

    @Column(name = "appl_mob_no")
    private String applMobNo;

    @Column(name = "appl_email_id")
    private String applEmailId;

    @Column(name = "bank_acc_type")
    private String bankAccType;

    @Column(name = "bank_acc_no")
    private String bankAccNo;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "branch_name")
    private String branchName;

    @Column(name = "micr_code")
    private String micrCode;

    @Column(name = "ifsc_code")
    private String ifscCode;

    @Column(name = "uid_no")
    private String uidNo;

    @Column(name = "top_indicator")
    private String topIndicator;

    @Column(name = "create_user")
    private String createUser;

    @Column(name = "agent_code")
    private String agentCode;

    // Getters and Setters

    public String getApplicationNo() {
        return applicationNo;
    }

    public void setApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
    }

    public String getPolicyNo() {
        return policyNo;
    }

    public void setPolicyNo(String policyNo) {
        this.policyNo = policyNo;
    }

    public String getModuleFlag() {
        return moduleFlag;
    }

    public void setModuleFlag(String moduleFlag) {
        this.moduleFlag = moduleFlag;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFthrHusName() {
        return fthrHusName;
    }

    public void setFthrHusName(String fthrHusName) {
        this.fthrHusName = fthrHusName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getDobProof() {
        return dobProof;
    }

    public void setDobProof(String dobProof) {
        this.dobProof = dobProof;
    }

    public String getIdProof() {
        return idProof;
    }

    public void setIdProof(String idProof) {
        this.idProof = idProof;
    }

    public String getPanCardNo() {
        return panCardNo;
    }

    public void setPanCardNo(String panCardNo) {
        this.panCardNo = panCardNo;
    }

    public String getPermAddr1() {
        return permAddr1;
    }

    public void setPermAddr1(String permAddr1) {
        this.permAddr1 = permAddr1;
    }

    public String getPermAddr2() {
        return permAddr2;
    }

    public void setPermAddr2(String permAddr2) {
        this.permAddr2 = permAddr2;
    }

    public String getPermAddr3() {
        return permAddr3;
    }

    public void setPermAddr3(String permAddr3) {
        this.permAddr3 = permAddr3;
    }

    public String getPermAddrArea() {
        return permAddrArea;
    }

    public void setPermAddrArea(String permAddrArea) {
        this.permAddrArea = permAddrArea;
    }

    public String getPermCity() {
        return permCity;
    }

    public void setPermCity(String permCity) {
        this.permCity = permCity;
    }

    public String getPermPin() {
        return permPin;
    }

    public void setPermPin(String permPin) {
        this.permPin = permPin;
    }

    public String getPermState() {
        return permState;
    }

    public void setPermState(String permState) {
        this.permState = permState;
    }

    public String getPermCounty() {
        return permCounty;
    }

    public void setPermCounty(String permCounty) {
        this.permCounty = permCounty;
    }

    public String getPermAddProof() {
        return permAddProof;
    }

    public void setPermAddProof(String permAddProof) {
        this.permAddProof = permAddProof;
    }

    public String getCorrAddr1() {
        return corrAddr1;
    }

    public void setCorrAddr1(String corrAddr1) {
        this.corrAddr1 = corrAddr1;
    }

    public String getCorrAddr2() {
        return corrAddr2;
    }

    public void setCorrAddr2(String corrAddr2) {
        this.corrAddr2 = corrAddr2;
    }

    public String getCorrAddr3() {
        return corrAddr3;
    }

    public void setCorrAddr3(String corrAddr3) {
        this.corrAddr3 = corrAddr3;
    }

    public String getCorrAddrArea() {
        return corrAddrArea;
    }

    public void setCorrAddrArea(String corrAddrArea) {
        this.corrAddrArea = corrAddrArea;
    }

    public String getCorrCity() {
        return corrCity;
    }

    public void setCorrCity(String corrCity) {
        this.corrCity = corrCity;
    }

    public String getCorrPin() {
        return corrPin;
    }

    public void setCorrPin(String corrPin) {
        this.corrPin = corrPin;
    }

    public String getCorrState() {
        return corrState;
    }

    public void setCorrState(String corrState) {
        this.corrState = corrState;
    }

    public String getCorrCounty() {
        return corrCounty;
    }

    public void setCorrCounty(String corrCounty) {
        this.corrCounty = corrCounty;
    }

    public String getCorrAddProof() {
        return corrAddProof;
    }

    public void setCorrAddProof(String corrAddProof) {
        this.corrAddProof = corrAddProof;
    }

    public String getApplTeleNo() {
        return applTeleNo;
    }

    public void setApplTeleNo(String applTeleNo) {
        this.applTeleNo = applTeleNo;
    }

    public String getApplAltTelNo() {
        return applAltTelNo;
    }

    public void setApplAltTelNo(String applAltTelNo) {
        this.applAltTelNo = applAltTelNo;
    }

    public String getApplMobNo() {
        return applMobNo;
    }

    public void setApplMobNo(String applMobNo) {
        this.applMobNo = applMobNo;
    }

    public String getApplEmailId() {
        return applEmailId;
    }

    public void setApplEmailId(String applEmailId) {
        this.applEmailId = applEmailId;
    }

    public String getBankAccType() {
        return bankAccType;
    }

    public void setBankAccType(String bankAccType) {
        this.bankAccType = bankAccType;
    }

    public String getBankAccNo() {
        return bankAccNo;
    }

    public void setBankAccNo(String bankAccNo) {
        this.bankAccNo = bankAccNo;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getMicrCode() {
        return micrCode;
    }

    public void setMicrCode(String micrCode) {
        this.micrCode = micrCode;
    }

    public String getIfscCode() {
        return ifscCode;
    }

    public void setIfscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }

    public String getUidNo() {
        return uidNo;
    }

    public void setUidNo(String uidNo) {
        this.uidNo = uidNo;
    }

    public String getTopIndicator() {
        return topIndicator;
    }

    public void setTopIndicator(String topIndicator) {
        this.topIndicator = topIndicator;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public String getAgentCode() {
        return agentCode;
    }

    public void setAgentCode(String agentCode) {
        this.agentCode = agentCode;
    }
}
