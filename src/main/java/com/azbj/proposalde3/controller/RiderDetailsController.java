package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.RiderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rider-details")
public class RiderDetailsController {

    @Autowired
    private RiderDetailsService riderDetailsService;

    @GetMapping("/rider-cover1-sa")
    public ResponseEntity<?> getRiderCover1SAData(@RequestParam String context) {
        Object data = riderDetailsService.loadRiderCover1SAData(context);
        return ResponseEntity.ok(data);
    }

    @GetMapping("/populate")
    public ResponseEntity<?> getRiderDetails(@RequestParam String packageCode, @RequestParam String productCode) {
        Object riderDetails = riderDetailsService.fetchRiderDetails(packageCode, productCode);
        return ResponseEntity.ok(riderDetails);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteRiderDetails(@RequestParam String riderId) {
        riderDetailsService.deleteRiderDetails(riderId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateRiderDetails(@RequestParam double sumAssured) {
        riderDetailsService.updateRiderDetails(sumAssured);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/set-premium-term")
    public ResponseEntity<?> setPremiumTerm(@RequestParam int premiumTerm) {
        riderDetailsService.setPremiumTerm(premiumTerm);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-by-cover-code")
    public ResponseEntity<?> deleteRiderDetailsByCoverCode(@RequestParam String coverCode) {
        riderDetailsService.deleteRiderDetailsByCoverCode(coverCode);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/benefit-term")
    public ResponseEntity<?> getBenefitTerm() {
        Object benefitTerm = riderDetailsService.getBenefitTerm();
        return ResponseEntity.ok(benefitTerm);
    }

    @GetMapping
    public ResponseEntity<?> getRiderDetails() {
        Object riderDetails = riderDetailsService.getRiderDetails();
        return ResponseEntity.ok(riderDetails);
    }

    @PutMapping
    public ResponseEntity<?> updateRiderDetails(@RequestBody Object riderDetails) {
        riderDetailsService.updateRiderDetails(riderDetails);
        return ResponseEntity.ok().build();
    }
}