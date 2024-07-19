package com.azbj.proposalde3.service;

import com.azbj.proposalde3.util.EncryptionUtil;
import org.springframework.stereotype.Service;

@Service
public class ViewImagesService {

    private static int globalViewCounter = 0;
    private static int phViewCounter = 0;

    public String generateViewImagesURL(String policyId, boolean insuredCheck, String policyType) {
        // Increment the global counter
        globalViewCounter++;

        // Increment the PH-specific counter if conditions are met
        if (insuredCheck && "PH".equals(policyType)) {
            phViewCounter++;
        }

        // Generate the URL using the EncryptionUtil
        String encryptedUrl;
        try {
            encryptedUrl = EncryptionUtil.encrypt(policyId);
        } catch (Exception e) {
            return "Error generating URL: " + e.getMessage();
        }

        // Return the generated URL
        return encryptedUrl;
    }

    public static int getGlobalViewCounter() {
        return globalViewCounter;
    }

    public static int getPhViewCounter() {
        return phViewCounter;
    }
}