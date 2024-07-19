package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.CP_SearchPHService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cpsearchph")
public class CP_SearchPHController {

    @Autowired
    private CP_SearchPHService cpSearchPHService;

    @GetMapping("/validateAgeProof")
    public ResponseEntity<String> validateAgeProof() {
        cpSearchPHService.validateAgeProof();
        return ResponseEntity.ok("Age proof validated.");
    }

    @GetMapping("/checkAllProofs")
    public ResponseEntity<String> checkAllProofs() {
        String result = cpSearchPHService.checkAllProofs();
        return ResponseEntity.ok(result);
    }

    @PostMapping("/searchPartners")
    public ResponseEntity<String> searchPartners(@RequestBody CP_SearchPH searchCriteria) {
        String result = cpSearchPHService.searchPartners(searchCriteria);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/clearFields")
    public ResponseEntity<String> clearFields() {
        cpSearchPHService.clearFields();
        return ResponseEntity.ok("Fields cleared.");
    }

    @GetMapping("/resetForm")
    public ResponseEntity<String> resetForm() {
        cpSearchPHService.resetForm();
        return ResponseEntity.ok("Form reset.");
    }
}