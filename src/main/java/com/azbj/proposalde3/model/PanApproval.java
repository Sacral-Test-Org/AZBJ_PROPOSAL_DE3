package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

@Entity
@Table(name = "PAN_APPROVAL")
public class PanApproval {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "IP_PAN_ISSUANCE_DATE")
    private String ipPanIssuanceDate;

    @Column(name = "PH_PAN_ISSUANCE_DATE")
    private String phPanIssuanceDate;

    @Column(name = "AGE_PROOF")
    private String ageProof;

    @Column(name = "AGE_PROOF_ID")
    private String ageProofId;

    @Column(name = "PAN_ISSUANCE_DATE")
    private String panIssuanceDate;

    @Column(name = "UW_REASON")
    private String uwReason;

    @Column(name = "SUPERVISOR_COMMENTS")
    private String supervisorComments;

    @Column(name = "IP_PAN_DATE_UNAVAILABLE")
    private String ipPanDateUnavailable = "N";

    @Column(name = "PH_PAN_DATE_UNAVAILABLE")
    private String phPanDateUnavailable = "N";

    @Column(name = "PAN_VALIDATE_CALLING")
    private String panValidateCalling = "N";

    @Column(name = "PAN_VALIDATE_CONTINUE")
    private String panValidateContinue = "N";

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIpPanIssuanceDate() {
        return ipPanIssuanceDate;
    }

    public void setIpPanIssuanceDate(String ipPanIssuanceDate) {
        this.ipPanIssuanceDate = ipPanIssuanceDate;
    }

    public String getPhPanIssuanceDate() {
        return phPanIssuanceDate;
    }

    public void setPhPanIssuanceDate(String phPanIssuanceDate) {
        this.phPanIssuanceDate = phPanIssuanceDate;
    }

    public String getAgeProof() {
        return ageProof;
    }

    public void setAgeProof(String ageProof) {
        this.ageProof = ageProof;
    }

    public String getAgeProofId() {
        return ageProofId;
    }

    public void setAgeProofId(String ageProofId) {
        this.ageProofId = ageProofId;
    }

    public String getPanIssuanceDate() {
        return panIssuanceDate;
    }

    public void setPanIssuanceDate(String panIssuanceDate) {
        this.panIssuanceDate = panIssuanceDate;
    }

    public String getUwReason() {
        return uwReason;
    }

    public void setUwReason(String uwReason) {
        this.uwReason = uwReason;
    }

    public String getSupervisorComments() {
        return supervisorComments;
    }

    public void setSupervisorComments(String supervisorComments) {
        this.supervisorComments = supervisorComments;
    }

    public String getIpPanDateUnavailable() {
        return ipPanDateUnavailable;
    }

    public void setIpPanDateUnavailable(String ipPanDateUnavailable) {
        this.ipPanDateUnavailable = ipPanDateUnavailable;
    }

    public String getPhPanDateUnavailable() {
        return phPanDateUnavailable;
    }

    public void setPhPanDateUnavailable(String phPanDateUnavailable) {
        this.phPanDateUnavailable = phPanDateUnavailable;
    }

    public String getPanValidateCalling() {
        return panValidateCalling;
    }

    public void setPanValidateCalling(String panValidateCalling) {
        this.panValidateCalling = panValidateCalling;
    }

    public String getPanValidateContinue() {
        return panValidateContinue;
    }

    public void setPanValidateContinue(String panValidateContinue) {
        this.panValidateContinue = panValidateContinue;
    }
}
