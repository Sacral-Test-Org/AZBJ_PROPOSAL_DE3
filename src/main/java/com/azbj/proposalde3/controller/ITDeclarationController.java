package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ITDeclarationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/it-declaration")
public class ITDeclarationController {

    @Autowired
    private ITDeclarationService itDeclarationService;

    @PostMapping("/submit")
    public ResponseEntity<String> submitITDeclaration(@RequestBody Map<String, String> request) {
        String applicationNumber = request.get("applicationNumber");
        String insuredPersonNumber = request.get("insuredPersonNumber");
        String contractID = request.get("contractID");
        String mandatoryStatus = request.get("mandatoryStatus");
        String passportProof = request.get("passportProof");
        String nationality = request.get("nationality");
        String ipNationality = request.get("ipNationality");
        String propertyType = request.get("propertyType");

        try {
            itDeclarationService.processITDeclaration(applicationNumber, insuredPersonNumber, contractID, mandatoryStatus, passportProof, nationality, ipNationality, propertyType);
            return new ResponseEntity<>("IT Declaration processed successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error processing IT Declaration: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
