package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.AMLRepository;
import com.azbj.proposalde3.model.AMLInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AMLService {

    @Autowired
    private AMLRepository amlRepository;

    public void saveAMLInformation(AMLInfo amlInfo) {
        amlRepository.save(amlInfo);
    }

    public String getProofDescription(String proofType) {
        return amlRepository.findProofDescriptionByType(proofType);
    }

    public String getControlFlag() {
        return amlRepository.findControlFlag();
    }

    public List<LOVData> getLOVData(String documentType, String partnerType) {
        return amlRepository.fetchLOVData(documentType, partnerType);
    }

    public boolean validateProofType(String proofType) {
        return amlRepository.validateProofType(proofType);
    }
}
