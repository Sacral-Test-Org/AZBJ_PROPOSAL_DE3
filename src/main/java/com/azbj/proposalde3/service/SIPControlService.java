package com.azbj.proposalde3.service;

import com.azbj.proposalde3.util.AgeCalculationUtil;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class SIPControlService {

    public Result calculateEntryAgeAndDeriveSurrogateValue(LocalDate insuredPersonDOB, LocalDate policyholderDOB, LocalDate policyDate, String proofType, String fieldValue) {
        try {
            int insuredPersonAge = AgeCalculationUtil.calculateEntryAge(insuredPersonDOB, policyDate);
            int policyholderAge = AgeCalculationUtil.calculateEntryAge(policyholderDOB, policyDate);

            int entryAge = (insuredPersonAge < 18) ? policyholderAge : insuredPersonAge;

            String surrogateValue = AgeCalculationUtil.deriveSurrogateValue(entryAge, proofType, fieldValue);

            return new Result(entryAge, surrogateValue);
        } catch (Exception e) {
            // Handle exceptions gracefully
            return new Result("Error calculating entry age and deriving surrogate value: " + e.getMessage());
        }
    }

    public static class Result {
        private int entryAge;
        private String surrogateValue;
        private String errorMessage;

        public Result(int entryAge, String surrogateValue) {
            this.entryAge = entryAge;
            this.surrogateValue = surrogateValue;
            this.errorMessage = null;
        }

        public Result(String errorMessage) {
            this.errorMessage = errorMessage;
        }

        public int getEntryAge() {
            return entryAge;
        }

        public String getSurrogateValue() {
            return surrogateValue;
        }

        public String getErrorMessage() {
            return errorMessage;
        }
    }
}