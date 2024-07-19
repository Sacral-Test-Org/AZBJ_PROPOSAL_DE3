package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PreviousPolicyDetailsService;
import com.azbj.proposalde3.model.PreviousPolicyDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/previous-policy")
public class PreviousPolicyDetailsController {

    @Autowired
    private PreviousPolicyDetailsService previousPolicyDetailsService;

    @DeleteMapping("/delete/{policyId}")
    public ResponseEntity<Void> deletePreviousPolicyRecord(@PathVariable String policyId) {
        previousPolicyDetailsService.deletePreviousPolicyRecord(policyId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/details")
    public ResponseEntity<PreviousPolicyDetails> getPreviousPolicyDetails() {
        PreviousPolicyDetails details = previousPolicyDetailsService.getPreviousPolicyDetails();
        return ResponseEntity.ok(details);
    }

    @PostMapping("/update")
    public ResponseEntity<Void> updatePreviousPolicyDetails(@RequestBody PreviousPolicyDetails previousPolicyDetails) {
        previousPolicyDetailsService.updatePreviousPolicyDetails(previousPolicyDetails);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(@RequestParam String block, @RequestParam String item, @RequestParam String proposalType) {
        byte[] image = previousPolicyDetailsService.getImage(block, item, proposalType);
        return ResponseEntity.ok(image);
    }

    @GetMapping("/insurance-company-info")
    public ResponseEntity<String> getPreviousInsuranceCompanyInfo(@RequestParam String currentBlock, @RequestParam String currentItem) {
        String info = previousPolicyDetailsService.fetchPreviousInsuranceCompanyInfo(currentBlock, currentItem);
        return ResponseEntity.ok(info);
    }

    @PostMapping("/insurance-company-info/update")
    public ResponseEntity<Void> updatePreviousInsuranceCompanyInfo(@RequestParam String currentBlock, @RequestParam String currentItem, @RequestParam String newValue) {
        previousPolicyDetailsService.updatePreviousInsuranceCompanyInfo(currentBlock, currentItem, newValue);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/update-status")
    public ResponseEntity<Void> updatePolicyStatus(@RequestParam String status) {
        previousPolicyDetailsService.updateStatus(status);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/navigate-next-item")
    public ResponseEntity<Void> navigateToNextItem() {
        previousPolicyDetailsService.promptUser();
        return ResponseEntity.noContent().build();
    }
}
