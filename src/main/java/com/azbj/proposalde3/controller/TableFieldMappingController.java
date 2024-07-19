package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.TableFieldMappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TableFieldMappingController {

    @Autowired
    private TableFieldMappingService tableFieldMappingService;

    @GetMapping("/manual-bbu-reasons")
    public ResponseEntity<List<String>> getManualBBUReasons() {
        List<String> reasons = tableFieldMappingService.fetchReasons();
        return ResponseEntity.ok(reasons);
    }

    @GetMapping("/referral-name-lov")
    public ResponseEntity<List<String>> getReferralNameLOV(@RequestParam String fscCode) {
        List<String> referralNames = tableFieldMappingService.fetchReferralNameLOV(fscCode);
        return ResponseEntity.ok(referralNames);
    }

    @GetMapping("/lov-data")
    public ResponseEntity<List<String>> getLOVData(@RequestParam String groupType) {
        List<String> lovData = tableFieldMappingService.fetchLOVData(groupType);
        return ResponseEntity.ok(lovData);
    }

    @GetMapping("/image-details")
    public ResponseEntity<String> getImageDetails(@RequestParam String proposalType, 
                                                  @RequestParam int numberOfPages, 
                                                  @RequestParam String formVersion, 
                                                  @RequestParam String imagePath, 
                                                  @RequestParam String fileName) {
        String imageDetails = tableFieldMappingService.fetchImageDetails(proposalType, numberOfPages, formVersion, imagePath, fileName);
        return ResponseEntity.ok(imageDetails);
    }
}
