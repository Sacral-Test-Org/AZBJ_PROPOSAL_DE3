package com.azbj.proposalde3.model;

public class Profession {
    private String occ_code;
    private String occ_desc;

    public Profession() {}

    public Profession(String occ_code, String occ_desc) {
        this.occ_code = occ_code;
        this.occ_desc = occ_desc;
    }

    public String getOcc_code() {
        return occ_code;
    }

    public void setOcc_code(String occ_code) {
        this.occ_code = occ_code;
    }

    public String getOcc_desc() {
        return occ_desc;
    }

    public void setOcc_desc(String occ_desc) {
        this.occ_desc = occ_desc;
    }
}
