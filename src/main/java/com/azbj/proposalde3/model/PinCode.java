package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "azbj_state_district_pincode")
public class PinCode {

    @Id
    private String pinCode;
    private String state;
    private String district;

    public PinCode() {}

    public PinCode(String pinCode, String state, String district) {
        this.pinCode = pinCode;
        this.state = state;
        this.district = district;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }
}
