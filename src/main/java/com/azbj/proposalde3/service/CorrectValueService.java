package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.CorrectValueRepository;
import com.azbj.proposalde3.model.CorrectValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CorrectValueService {

    @Autowired
    private CorrectValueRepository correctValueRepository;

    public CorrectValue saveCorrectValue(CorrectValue correctValue) {
        return correctValueRepository.save(correctValue);
    }

    public Optional<CorrectValue> getCorrectValue(Long id) {
        return correctValueRepository.findById(id);
    }

    public void deleteCorrectValue(Long id) {
        correctValueRepository.deleteById(id);
    }

    public void handleScrutinyFailure(List<String> parameterList) {
        // Validate the application number
        String applicationNumber = parameterList.get(0);
        if (applicationNumber == null || applicationNumber.isEmpty()) {
            throw new IllegalArgumentException("Application number cannot be null.");
        }

        // Check user authorization
        String userId = parameterList.get(1);
        if (!userId.startsWith("UU")) {
            throw new SecurityException("Not an Authorized ID.");
        }

        // Initiate the scrutiny failure process
        // Logic to handle scrutiny failure
    }

    public List<Object[]> fetchAgents(String fscCode) {
        return correctValueRepository.findAgents(fscCode);
    }

    public List<Object[]> fetchLOVData() {
        return correctValueRepository.getLOVData();
    }

    public boolean validateDate(String backdatedPolicyDate, java.util.Date currentDate) {
        // Logic to validate the backdated policy date
        return !backdatedPolicyDate.after(currentDate.toString());
    }

    public int calculateAge(java.util.Date dateOfBirth, java.util.Date backdatedPolicyDate) {
        // Logic to calculate age
        return backdatedPolicyDate.getYear() - dateOfBirth.getYear();
    }

    public boolean validatePan(String ageProofID) {
        // Logic to validate PAN
        return ageProofID != null && ageProofID.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}");
    }

    public void saveGenderData(String gender) {
        // Logic to save gender data
        CorrectValue correctValue = new CorrectValue();
        correctValue.setGender(gender);
        correctValueRepository.save(correctValue);
    }

    public List<Object[]> getDistinctPinCodes() {
        return correctValueRepository.findDistinctPinCodes();
    }

    public List<Object[]> fetchStates() {
        return correctValueRepository.findAllStates();
    }

    public List<Object[]> fetchAddressDetails(String landmarkArea) {
        return correctValueRepository.findAddressDetails(landmarkArea);
    }

    public List<Object[]> fetchLanguages() {
        return correctValueRepository.findAll();
    }

    public void storeLanguage(String selectedLanguage) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setLanguage(selectedLanguage);
        correctValueRepository.save(correctValue);
    }

    public String getRequestStatus(String applicationNo) {
        return correctValueRepository.getRequestStatus(applicationNo);
    }

    public List<Object[]> getPlacesByDistrict(String district) {
        return correctValueRepository.findUniquePlacesByDistrict(district);
    }

    public List<Object[]> fetchValidPinCodes() {
        return correctValueRepository.findValidPinCodes();
    }

    public List<Object[]> fetchValidAreaValues(String postcode, String state, String district) {
        return correctValueRepository.findValidAreaValues(postcode, state, district);
    }

    public String getLatestRequestStatus(String applicationNo, String addressType) {
        return correctValueRepository.findLatestRequestStatus(applicationNo, addressType);
    }

    public void handlePanField(String pan) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setPan(pan);
        correctValueRepository.save(correctValue);
    }

    public List<Object[]> getProfessions(String industryCode) {
        return correctValueRepository.findProfessionsByIndustryCode(industryCode);
    }

    public List<Object[]> fetchIndustryValues() {
        return correctValueRepository.getIndustryValues();
    }

    public boolean validateIndustryDescription(String industryDescription, String appln_no) {
        int count = correctValueRepository.countRelevantRecords(appln_no);
        return count > 0 && (industryDescription.equals("CRPF") || industryDescription.equals("DEFENCE"));
    }

    public void savePEPDetails(String pepDetails) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setPepDetails(pepDetails);
        correctValueRepository.save(correctValue);
    }

    public void updatePEPDetails(String pepDetails) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setPepDetails(pepDetails);
        correctValueRepository.save(correctValue);
    }

    public List<Object[]> fetchIncomeProofTypes(String occupation) {
        return correctValueRepository.findIncomeProofTypesByOccupation(occupation);
    }

    public List<Object[]> fetchEmployerNames() {
        return correctValueRepository.findEmployerNames();
    }

    public List<Object[]> queryArea(String state, String district, String pincode, String area) {
        return correctValueRepository.queryArea(state, district, pincode, area);
    }

    public List<Object[]> queryPlace(String addressLine3, String district) {
        return correctValueRepository.queryPlace(addressLine3, district);
    }

    public List<Object[]> updateOccupationList(int age) {
        return correctValueRepository.updateOccupationList(age);
    }

    public boolean validatePAN(String panID) {
        return panID != null && panID.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}");
    }

    public boolean validateAadhaar(String aadhaarID) {
        return aadhaarID != null && aadhaarID.matches("[0-9]{12}");
    }

    public List<Object[]> getPinCodes() {
        return correctValueRepository.findDistinctPinCodes();
    }

    public List<Object[]> getStateList() {
        return correctValueRepository.fetchStateList();
    }

    public List<Object[]> getLanguages() {
        return correctValueRepository.findAll();
    }

    public void saveSelectedLanguage(String selectedLanguage) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setLanguage(selectedLanguage);
        correctValueRepository.save(correctValue);
    }

    public List<Object[]> fetchUniquePlaces(String district) {
        return correctValueRepository.findUniquePlaces(district);
    }

    public List<Object[]> fetchAreasAndPostalCodes(String postalCode, String state, String district) {
        return correctValueRepository.fetchAreasAndPostalCodes(postalCode, state, district);
    }

    public String fetchLatestRequestStatus(String applicationNo, String addressType) {
        return correctValueRepository.findLatestRequestStatus(applicationNo, addressType);
    }

    public List<Object[]> fetchAreasByStateAndDistrict(String state, String district) {
        return correctValueRepository.findAreasByStateAndDistrict(state, district);
    }

    public List<Object[]> getAddressLine3Data(String district) {
        return correctValueRepository.fetchAddressLine3Data(district);
    }

    public String getStatusMessage(String applicationNo, String addressType) {
        return correctValueRepository.fetchStatusMessage(applicationNo, addressType);
    }

    public List<Object[]> fetchProfessions(String industryCode) {
        return correctValueRepository.getProfessions(industryCode);
    }

    public boolean validateIndustryDescription(String industryDescription, String appln_no, String fsc_code, String v_inhouse_flag, String v_web_aggr) {
        int count = correctValueRepository.countRecords(appln_no, fsc_code, v_inhouse_flag, v_web_aggr);
        return count > 0 && (industryDescription.equals("CRPF") || industryDescription.equals("DEFENCE"));
    }

    public void saveSelectedValue(String selectedValue) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setSelectedValue(selectedValue);
        correctValueRepository.save(correctValue);
    }

    public void saveLoanType(String selectedLoanType) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setLoanType(selectedLoanType);
        correctValueRepository.save(correctValue);
    }

    public boolean validatePortfolioStrategy(String portfolioStrategy, String frequency, String productDefinition, String productCode, String packageCode) {
        // Logic to validate portfolio strategy
        return true;
    }

    public List<Object[]> fetchBankDetails(String ifscCode) {
        return correctValueRepository.findByIfscCode(ifscCode);
    }

    public boolean validateProductId(String productId) {
        return correctValueRepository.findProductById(productId).isPresent();
    }

    public void saveMoneyBackOption(String value) {
        CorrectValue correctValue = new CorrectValue();
        correctValue.setMoneyBackOption(value);
        correctValueRepository.save(correctValue);
    }

    public String getMoneyBackOption() {
        return correctValueRepository.findMoneyBackOption();
    }

    public List<Object[]> getSignatureConfidenceDetails(String applicationNumber) {
        return correctValueRepository.findByApplicationNumber(applicationNumber);
    }

    public boolean validateMobileNumber(String mobileNumber) {
        return mobileNumber != null && mobileNumber.matches("[0-9]{10}");
    }

    public boolean validateGMI(String gmiValue) {
        return gmiValue != null && !gmiValue.isEmpty();
    }

    public int calculateSumAssured(String gmiValue) {
        return Integer.parseInt(gmiValue) * 144;
    }

    public String fetchPreviousItem(String currentItem, String currentBlock, String proposalType) {
        return correctValueRepository.fetchPreviousItem(currentItem, currentBlock, proposalType);
    }

    public String loadFieldData(String currentItem, String currentBlock, String proposalType) {
        return correctValueRepository.loadFieldData(currentItem, currentBlock, proposalType);
    }

    public String validateChannel(String applicationNo, String enteredChannel) {
        String channel = correctValueRepository.findChannelInBatchItems(applicationNo);
        if (channel == null) {
            channel = correctValueRepository.findChannelInScrutinyPropExtn(applicationNo);
        }
        return channel.equals(enteredChannel) ? "green" : "red";
    }

    public boolean validateAadhaar(String aadhaarNumber, String otherDetails) {
        return aadhaarNumber != null && aadhaarNumber.matches("[0-9]{12}");
    }

    public boolean validateSubIdCode(String subIdCode) {
        return correctValueRepository.validateSubIdCode(subIdCode);
    }

    public List<Object[]> fetchRateDetails(String applicationNumber, String topIndicator) {
        return correctValueRepository.findRateDetails(applicationNumber, topIndicator);
    }
}