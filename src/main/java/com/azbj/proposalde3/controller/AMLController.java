package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.AMLService;
import com.azbj.proposalde3.model.AML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aml")
public class AMLController {

    @Autowired
    private AMLService amlService;

    @PostMapping("/save")
    public ResponseEntity<String> saveAMLInformation(@RequestBody AML amlInfo) {
        amlService.saveAMLInformation(amlInfo);
        return ResponseEntity.ok("AML information saved successfully.");
    }

    @GetMapping("/proof-description")
    public ResponseEntity<String> getProofDescription(@RequestParam String proofType) {
        String proofDescription = amlService.getProofDescription(proofType);
        return ResponseEntity.ok(proofDescription);
    }

    @GetMapping("/control-flag")
    public ResponseEntity<String> getControlFlag() {
        String controlFlag = amlService.getControlFlag();
        return ResponseEntity.ok(controlFlag);
    }

    @GetMapping("/lov-data")
    public ResponseEntity<?> fetchLOVData(@RequestParam String documentType, @RequestParam String partnerType) {
        return ResponseEntity.ok(amlService.getLOVData(documentType, partnerType));
    }

    @PostMapping("/validate-proof-type")
    public ResponseEntity<Boolean> validateProofType(@RequestParam String proofType) {
        boolean isValid = amlService.validateProofType(proofType);
        return ResponseEntity.ok(isValid);
    }
}
