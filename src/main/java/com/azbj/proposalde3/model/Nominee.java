package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "azbj_multiple_nominee_dtls")
public class Nominee {

    @Id
    @Column(name = "application_no")
    private String applicationNo;

    @Column(name = "nominee_name")
    private String nomineeName;

    @Column(name = "nominee_birthplace")
    private String nomineeBirthplace;

    @Column(name = "nominee_dob")
    private Date nomineeDob;

    @Column(name = "nominee_relation")
    private String nomineeRelation;

    @Column(name = "nominee_gender")
    private String nomineeGender;

    // Getters and Setters

    public String getApplicationNo() {
        return applicationNo;
    }

    public void setApplicationNo(String applicationNo) {
        this.applicationNo = applicationNo;
    }

    public String getNomineeName() {
        return nomineeName;
    }

    public void setNomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
    }

    public String getNomineeBirthplace() {
        return nomineeBirthplace;
    }

    public void setNomineeBirthplace(String nomineeBirthplace) {
        this.nomineeBirthplace = nomineeBirthplace;
    }

    public Date getNomineeDob() {
        return nomineeDob;
    }

    public void setNomineeDob(Date nomineeDob) {
        this.nomineeDob = nomineeDob;
    }

    public String getNomineeRelation() {
        return nomineeRelation;
    }

    public void setNomineeRelation(String nomineeRelation) {
        this.nomineeRelation = nomineeRelation;
    }

    public String getNomineeGender() {
        return nomineeGender;
    }

    public void setNomineeGender(String nomineeGender) {
        this.nomineeGender = nomineeGender;
    }
}
