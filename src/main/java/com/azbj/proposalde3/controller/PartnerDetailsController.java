package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PartnerDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/partner-details")
public class PartnerDetailsController {

    @Autowired
    private PartnerDetailsService partnerDetailsService;

    @PostMapping("/validate-merge")
    public ResponseEntity<String> validateMerge() {
        boolean isValid = partnerDetailsService.validateMerge();
        if (isValid) {
            return ResponseEntity.ok("Validation successful");
        } else {
            return ResponseEntity.badRequest().body("Validation failed");
        }
    }

    @PostMapping("/merge-partners")
    public ResponseEntity<String> mergePartners(@RequestParam List<String> partners) {
        boolean isMerged = partnerDetailsService.mergePartners(partners);
        if (isMerged) {
            return ResponseEntity.ok("Merging successful");
        } else {
            return ResponseEntity.badRequest().body("Merging failed");
        }
    }

    @PostMapping("/delete-records")
    public ResponseEntity<String> deleteRecords(@RequestParam String applicationNo, @RequestParam String partnerType) {
        boolean isDeleted = partnerDetailsService.deleteRecords(applicationNo, partnerType);
        if (isDeleted) {
            return ResponseEntity.ok("Deletion successful");
        } else {
            return ResponseEntity.badRequest().body("Deletion failed");
        }
    }
}
