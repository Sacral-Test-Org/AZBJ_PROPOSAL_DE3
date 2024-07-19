package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.CauseOfDeathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CauseOfDeathController {

    @Autowired
    private CauseOfDeathService causeOfDeathService;

    @GetMapping("/causeOfDeath")
    public ResponseEntity<String> getCauseOfDeath() {
        String causeOfDeath = causeOfDeathService.fetchCauseOfDeath();
        return ResponseEntity.ok(causeOfDeath);
    }

    @PostMapping("/causeOfDeath")
    public ResponseEntity<String> updateCauseOfDeath(@RequestBody String causeOfDeath) {
        causeOfDeathService.updateCauseOfDeath(causeOfDeath);
        return ResponseEntity.ok("Cause of Death updated successfully");
    }

    @GetMapping("/imageData")
    public ResponseEntity<byte[]> getImageData(@RequestParam String currentItemId) {
        byte[] imageData = causeOfDeathService.getImageData(currentItemId);
        return ResponseEntity.ok(imageData);
    }

    @PostMapping("/updateFamilyDetails")
    public ResponseEntity<String> updateFamilyDetails(@RequestBody String familyDetails) {
        causeOfDeathService.updateFamilyDetails(familyDetails);
        return ResponseEntity.ok("Family details updated successfully");
    }
}
