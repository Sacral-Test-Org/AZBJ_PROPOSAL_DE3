package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.CauseOfDeathRepository;
import com.azbj.proposalde3.model.FamilyDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CauseOfDeathService {

    @Autowired
    private CauseOfDeathRepository causeOfDeathRepository;

    public FamilyDetails fetchCauseOfDeath(Long currentItemId) {
        return causeOfDeathRepository.findById(currentItemId).orElse(null);
    }

    public void updateCauseOfDeath(FamilyDetails familyDetails) {
        causeOfDeathRepository.save(familyDetails);
    }

    public byte[] getImageData(Long currentItemId) {
        FamilyDetails familyDetails = fetchCauseOfDeath(currentItemId);
        if (familyDetails != null) {
            return familyDetails.getImageData();
        }
        return null;
    }

    public void updateFamilyDetails(FamilyDetails familyDetails) {
        updateCauseOfDeath(familyDetails);
    }
}
