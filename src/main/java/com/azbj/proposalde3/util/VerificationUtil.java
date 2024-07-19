package com.azbj.proposalde3.util;

public class VerificationUtil {

    public static class NationalityFlags {
        private String nationalityFlag;
        private String ipNationalityFlag;

        public NationalityFlags(String nationalityFlag, String ipNationalityFlag) {
            this.nationalityFlag = nationalityFlag;
            this.ipNationalityFlag = ipNationalityFlag;
        }

        public String getNationalityFlag() {
            return nationalityFlag;
        }

        public String getIpNationalityFlag() {
            return ipNationalityFlag;
        }
    }

    public static NationalityFlags determineNationalityFlags(String userNationality) {
        String nationalityFlag;
        String ipNationalityFlag;

        if (userNationality.equalsIgnoreCase("Indian")) {
            nationalityFlag = "IN";
            ipNationalityFlag = "IN";
        } else if (userNationality.equalsIgnoreCase("NRI")) {
            nationalityFlag = "NRI";
            ipNationalityFlag = "NRI";
        } else if (userNationality.equalsIgnoreCase("Foreign")) {
            nationalityFlag = "FR";
            ipNationalityFlag = "FR";
        } else {
            nationalityFlag = "OT";
            ipNationalityFlag = "OT";
        }

        return new NationalityFlags(nationalityFlag, ipNationalityFlag);
    }
}
