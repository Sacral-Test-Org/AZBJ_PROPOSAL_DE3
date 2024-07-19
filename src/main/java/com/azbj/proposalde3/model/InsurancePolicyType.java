package com.azbj.proposalde3.model;

import java.util.Arrays;
import java.util.List;

public class InsurancePolicyType {
    private List<String> policyTypes = Arrays.asList("IP", "8", "10", "SL");
    private Object fieldData;

    public List<String> getPolicyTypes() {
        return policyTypes;
    }

    public Object getFieldData() {
        return fieldData;
    }

    public void setFieldData(Object fieldData) {
        this.fieldData = fieldData;
    }

    public boolean validateSelectedOption(String selectedOption) {
        return selectedOption != null && !selectedOption.isEmpty();
    }

    public void loadFieldDataFromImage(String selectedOption) {
        if (validateSelectedOption(selectedOption)) {
            // Logic to load field data from image based on selectedOption
            // This is a placeholder for actual implementation
            this.fieldData = "Loaded field data for " + selectedOption;
        }
    }

    public String displaySelectedOption(String selectedOption) {
        if (validateSelectedOption(selectedOption)) {
            // Logic to display selected option with correct visual attributes
            // This is a placeholder for actual implementation
            return "Displaying " + selectedOption + " with correct visual attributes";
        }
        return "Invalid selection";
    }
}