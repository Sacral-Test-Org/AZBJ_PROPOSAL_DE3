package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.CP_SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cp-search")
public class CP_SearchController {

    @Autowired
    private CP_SearchService cpSearchService;

    @PostMapping("/search")
    public ResponseEntity<?> searchCustomerProfiles(@RequestBody SearchCriteria searchCriteria) {
        return ResponseEntity.ok(cpSearchService.searchCustomerProfiles(searchCriteria));
    }

    @PostMapping("/validate-checkboxes")
    public ResponseEntity<?> validateCheckboxes(@RequestParam int imageCount, @RequestParam String partnerId) {
        return ResponseEntity.ok(cpSearchService.validateCheckboxes(imageCount, partnerId));
    }

    @PostMapping("/verify-documents")
    public ResponseEntity<?> verifyDocuments(@RequestParam int imageCount, @RequestParam String partnerId) {
        return ResponseEntity.ok(cpSearchService.verifyDocuments(imageCount, partnerId));
    }

    @PostMapping("/validate-additional-proof-check")
    public ResponseEntity<?> validateAdditionalProofCheck(@RequestParam String partnerId, @RequestParam int globalViewImageCount) {
        return ResponseEntity.ok(cpSearchService.validateAdditionalProofCheck(partnerId, globalViewImageCount));
    }

    @PostMapping("/save-and-apply-cp-merge")
    public ResponseEntity<?> saveAndApplyCPMerge(@RequestParam String applicationNumber, @RequestParam String partnerType, @RequestParam String mergeOption) {
        return ResponseEntity.ok(cpSearchService.saveAndApplyCPMerge(applicationNumber, partnerType, mergeOption));
    }

    @PostMapping("/reset-form")
    public ResponseEntity<?> resetForm() {
        cpSearchService.resetForm();
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-merge-requests")
    public ResponseEntity<?> deleteMergeRequests(@RequestParam String applicationNumber, @RequestParam String partnerType) {
        cpSearchService.deleteMergeRequests(applicationNumber, partnerType);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-merging-reasons")
    public ResponseEntity<?> deleteMergingReasons(@RequestParam String applicationNumber, @RequestParam String partnerType) {
        cpSearchService.deleteMergingReasons(applicationNumber, partnerType);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/save-and-apply")
    public ResponseEntity<?> saveAndApply(@RequestBody CPData cpData) {
        return ResponseEntity.ok(cpSearchService.saveAndApply(cpData));
    }
}

class SearchCriteria {
    private String firstName;
    private String lastName;
    private String dateOfBirth;
    private String gender;
    private String fatherName;
    private String spouseName;
    // Getters and Setters
}

class CPData {
    private String applicationNumber;
    private String partnerType;
    private String mergeOption;
    // Other fields and Getters and Setters
}