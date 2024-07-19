package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.SIPControlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Map;

@RestController
@RequestMapping("/api/sip-control")
public class SIPControlController {

    @Autowired
    private SIPControlService sipControlService;

    @PostMapping("/calculate-entry-age")
    public ResponseEntity<Map<String, Object>> calculateEntryAgeAndDeriveSurrogateValue(@RequestBody Map<String, String> request) {
        try {
            LocalDate insuredPersonDOB = LocalDate.parse(request.get("insuredPersonDOB"));
            LocalDate policyholderDOB = LocalDate.parse(request.get("policyholderDOB"));
            LocalDate policyDate = LocalDate.parse(request.get("policyDate"));
            String proofType = request.get("proofType");
            String fieldValue = request.get("fieldValue");

            Map<String, Object> result = sipControlService.calculateEntryAgeAndDeriveSurrogateValue(insuredPersonDOB, policyholderDOB, policyDate, proofType, fieldValue);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", "An error occurred while processing the request."));
        }
    }
}
