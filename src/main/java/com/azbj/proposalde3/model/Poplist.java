package com.azbj.proposalde3.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "inf_dnm_poplists")
public class Poplist {

    @Id
    private String poplistCode;
    private String screenValue;
    private String internalValue;

    // Getters and Setters
    public String getPoplistCode() {
        return poplistCode;
    }

    public void setPoplistCode(String poplistCode) {
        this.poplistCode = poplistCode;
    }

    public String getScreenValue() {
        return screenValue;
    }

    public void setScreenValue(String screenValue) {
        this.screenValue = screenValue;
    }

    public String getInternalValue() {
        return internalValue;
    }

    public void setInternalValue(String internalValue) {
        this.internalValue = internalValue;
    }
}