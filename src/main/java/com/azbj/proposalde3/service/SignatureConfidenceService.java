package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.SignatureConfidenceRepository;
import com.azbj.proposalde3.util.EncryptionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignatureConfidenceService {

    @Autowired
    private SignatureConfidenceRepository signatureConfidenceRepository;

    @Autowired
    private EncryptionUtil encryptionUtil;

    public String generateSecureURL(String applicationNumber) {
        // Generate the URL using the application number
        String url = "https://example.com/document?appNo=" + applicationNumber;
        // Encrypt the URL using the azbj_encrypt_dms_link function from EncryptionUtil
        return encryptionUtil.azbj_encrypt_dms_link(url);
    }

    public List<SignatureConfidence> getSignatureConfidenceDetails(String applicationNumber) {
        // Call the repository method to retrieve signature confidence details for the given application number
        return signatureConfidenceRepository.findByApplicationNumber(applicationNumber);
    }
}
