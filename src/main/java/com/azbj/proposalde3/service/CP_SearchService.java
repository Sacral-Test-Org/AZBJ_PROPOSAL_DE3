package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.CP_SearchRepository;
import com.azbj.proposalde3.model.CP_Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CP_SearchService {

    @Autowired
    private CP_SearchRepository cpSearchRepository;

    public List<CP_Search> searchCustomerProfiles(CP_Search searchCriteria) {
        return cpSearchRepository.searchCustomerProfiles(searchCriteria);
    }

    public void validateCheckboxes(int imageCount, String partnerId) {
        if (imageCount == 0 && partnerId != null) {
            cpSearchRepository.setCheckboxesToNA(partnerId);
            // Prompt user to check policy details
        }
        List<CP_Search> searchResults = cpSearchRepository.findByPartnerId(partnerId);
        for (CP_Search result : searchResults) {
            if (!result.isSignatureChecked() || !result.isAgeProofChecked() || !result.isAddressProofChecked()) {
                throw new IllegalArgumentException("All required checkboxes must be selected.");
            }
        }
    }

    public void verifyDocuments(int imageCount, String partnerId) {
        if (imageCount == 0 && partnerId != null) {
            cpSearchRepository.setDocumentChecksToNA(partnerId);
        }
        List<CP_Search> searchResults = cpSearchRepository.findByPartnerId(partnerId);
        for (CP_Search result : searchResults) {
            if (!result.isSignatureChecked() || !result.isAgeProofChecked() || !result.isAddressProofChecked()) {
                throw new IllegalArgumentException("All required document checks must be 'Y'.");
            }
        }
    }

    public void validateAdditionalProofCheck(String partnerId, int globalViewImageCount) {
        if (globalViewImageCount == 0 && partnerId != null) {
            cpSearchRepository.updateAdditionalProofCheckStatus(partnerId, "NA");
        }
        List<CP_Search> searchResults = cpSearchRepository.findByPartnerId(partnerId);
        for (CP_Search result : searchResults) {
            if (!result.isSignatureChecked() || !result.isAgeProofChecked() || !result.isAdditionalProofChecked()) {
                throw new IllegalArgumentException("All required checks must be 'Y'.");
            }
        }
    }

    public boolean saveAndApplyCPMerge(String applicationNumber, String partnerType, String mergeOption) {
        cpSearchRepository.deleteMergeRequests(applicationNumber, partnerType);
        cpSearchRepository.updateControlFields(applicationNumber, partnerType, mergeOption);
        // Additional business logic for CP Merging Process
        return true;
    }

    public void resetForm() {
        // Clear form fields
        cpSearchRepository.clearFormFields();
    }

    public void deleteMergeRequests(String applicationNumber, String partnerType) {
        cpSearchRepository.deleteMergeRequests(applicationNumber, partnerType);
    }

    public void deleteMergingReasons(String applicationNumber, String partnerType) {
        cpSearchRepository.deleteMergingReasons(applicationNumber, partnerType);
    }

    public boolean saveAndApply(CP_Search cpData) {
        // Validate input data
        if (cpData == null) {
            throw new IllegalArgumentException("CP data cannot be null.");
        }
        // Perform business logic
        cpSearchRepository.saveAndApply(cpData);
        return true;
    }
}