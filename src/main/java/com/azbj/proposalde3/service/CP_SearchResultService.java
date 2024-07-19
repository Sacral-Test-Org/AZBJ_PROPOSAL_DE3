package com.azbj.proposalde3.service;

import com.azbj.proposalde3.model.CP_SearchResult;
import com.azbj.proposalde3.repository.CP_SearchResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CP_SearchResultService {

    @Autowired
    private CP_SearchResultRepository cpSearchResultRepository;

    public CP_SearchResult getPolicyDetails(Long partnerId) {
        return cpSearchResultRepository.findPolicyDetailsByPartnerId(partnerId);
    }

    public List<CP_SearchResult> searchCustomerProfiles(String firstName, String lastName, String dateOfBirth, String gender, String fatherName, String spouseName) {
        return cpSearchResultRepository.searchCustomerProfiles(firstName, lastName, dateOfBirth, gender, fatherName, spouseName);
    }

    public CP_SearchResult updateCustomerProfile(CP_SearchResult updateFields) {
        return cpSearchResultRepository.updateCustomerProfile(updateFields);
    }

    public CP_SearchResult fetchPolicyDetails(Long partnerId) {
        return cpSearchResultRepository.findPolicyDetailsByPartnerId(partnerId);
    }

    public void resetToChkField(String option) {
        List<CP_SearchResult> searchResults = cpSearchResultRepository.findAll();
        for (CP_SearchResult result : searchResults) {
            result.setToChk(0);
        }
        cpSearchResultRepository.saveAll(searchResults);
    }
}
