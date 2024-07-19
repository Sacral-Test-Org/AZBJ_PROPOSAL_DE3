package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.SolutionProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solution-product")
public class SolutionProductController {

    @Autowired
    private SolutionProductService solutionProductService;

    @PostMapping("/manage")
    public ResponseEntity<?> manageSolutionProductDetails(@RequestBody Object solutionProductDetails) {
        // Logic to manage solution product details
        return ResponseEntity.ok(solutionProductDetails);
    }

    @GetMapping("/packages/{productCode}")
    public ResponseEntity<List<?>> getPackages(@PathVariable String productCode) {
        List<?> packages = solutionProductService.fetchPackages(productCode);
        return ResponseEntity.ok(packages);
    }

    @GetMapping("/package-list/{productCode}")
    public ResponseEntity<List<?>> getPackageList(@PathVariable String productCode) {
        List<?> packages = solutionProductService.fetchPackagesByProductId(productCode);
        return ResponseEntity.ok(packages);
    }

    @GetMapping("/payout-frequency")
    public ResponseEntity<?> getPayoutFrequency() {
        Object payoutFrequency = solutionProductService.fetchPayoutFrequency();
        return ResponseEntity.ok(payoutFrequency);
    }

    @PostMapping("/validate-fsc-code")
    public ResponseEntity<Boolean> validateFSCCode(@RequestBody String fscCode) {
        boolean isValid = solutionProductService.validateFSCCode(fscCode);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/sum-assured")
    public ResponseEntity<?> getSumAssured() {
        Object sumAssured = solutionProductService.fetchSumAssured();
        return ResponseEntity.ok(sumAssured);
    }

    @PostMapping("/premium-term")
    public ResponseEntity<?> setPremiumTerm(@RequestBody int premiumTerm) {
        solutionProductService.setPremiumTerm(premiumTerm);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/renewal-payment-methods")
    public ResponseEntity<List<?>> getRenewalPaymentMethods(@RequestParam int frequency, @RequestParam String fscCode) {
        List<?> paymentMethods = solutionProductService.getRenewalPaymentMethods(frequency, fscCode);
        return ResponseEntity.ok(paymentMethods);
    }

    @PostMapping("/update-benefit-term")
    public ResponseEntity<?> updateBenefitTerm(@RequestBody int benefitTerm) {
        solutionProductService.updateBenefitTerm(benefitTerm);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/calculate-update-rider-cover-amounts")
    public ResponseEntity<?> calculateAndUpdateRiderCoverAmounts() {
        solutionProductService.calculateAndUpdateRiderCoverAmounts();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/validate-product-code")
    public ResponseEntity<Boolean> validateProductCode(@RequestBody String productCode) {
        boolean isValid = solutionProductService.validateProductCode(productCode);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/payment-methods")
    public ResponseEntity<List<?>> getPaymentMethods(@RequestParam int frequency, @RequestParam String fscCode) {
        List<?> paymentMethods = solutionProductService.determinePaymentMethods(frequency, fscCode);
        return ResponseEntity.ok(paymentMethods);
    }
}