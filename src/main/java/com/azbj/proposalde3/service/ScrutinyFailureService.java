package com.azbj.proposalde3.service;

import org.springframework.stereotype.Service;
import java.util.Map;

@Service
public class ScrutinyFailureService {

    public String handleScrutinyFailure(Map<String, String> parameterList) {
        String applicationNumber = parameterList.get("RES_appln");
        String userId = parameterList.get("userId");

        // Validate the application number
        if (applicationNumber == null || applicationNumber.isEmpty()) {
            return "Application number cannot be null.";
        }

        // Check user authorization
        if (userId == null || !userId.startsWith("UU")) {
            return "Not an Authorized ID.";
        }

        // Initiate the scrutiny failure process
        parameterList.put("RES_TYPE", "QC");

        // Call the scrutiny failure process (dummy implementation)
        // In a real scenario, this would involve more complex logic and possibly database operations
        return "Scrutiny failure process initiated for application number: " + applicationNumber;
    }
}