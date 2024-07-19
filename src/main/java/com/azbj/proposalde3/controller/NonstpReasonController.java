package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.NonstpReasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/nonstp-reason")
public class NonstpReasonController {

    @Autowired
    private NonstpReasonService nonstpReasonService;

    @PostMapping("/clear")
    public void clearNonstpReason() {
        nonstpReasonService.clearNonstpReason();
    }

    @PostMapping("/save")
    public void saveNonstpReason(@RequestBody String nonstpReason) {
        nonstpReasonService.saveNonstpReason(nonstpReason);
    }

    @PostMapping("/update-scrutiny-partner-form")
    public void updateScrutinyPartnerForm(@RequestBody ScrutinyPartnerFormRequest request) {
        nonstpReasonService.updateScrutinyPartnerForm(request.getApplicationNumber(), request.getPreviousPolicyDetails());
    }

    public static class ScrutinyPartnerFormRequest {
        private String applicationNumber;
        private Object previousPolicyDetails;

        public String getApplicationNumber() {
            return applicationNumber;
        }

        public void setApplicationNumber(String applicationNumber) {
            this.applicationNumber = applicationNumber;
        }

        public Object getPreviousPolicyDetails() {
            return previousPolicyDetails;
        }

        public void setPreviousPolicyDetails(Object previousPolicyDetails) {
            this.previousPolicyDetails = previousPolicyDetails;
        }
    }
}
