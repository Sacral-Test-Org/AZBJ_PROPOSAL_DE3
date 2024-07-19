package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FundDetailsValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fund-details")
public class FundDetailsValidationController {

    @Autowired
    private FundDetailsValidationService fundDetailsValidationService;

    @PostMapping("/validate-apportionment")
    public ResponseEntity<String> validateApportionment(@RequestParam double percentage) {
        String validationResult = fundDetailsValidationService.validateApportionment(percentage);
        return ResponseEntity.ok(validationResult);
    }

    @GetMapping("/sum-apportionment")
    public ResponseEntity<Double> sumApportionmentPercentages() {
        double totalPercentage = fundDetailsValidationService.sumApportionmentPercentages();
        return ResponseEntity.ok(totalPercentage);
    }

    @PostMapping("/perform-actions")
    public ResponseEntity<String> performActionsBasedOnTotal(@RequestParam double totalPercentage) {
        String result = fundDetailsValidationService.performActionsBasedOnTotal(totalPercentage);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/validate-fund-id")
    public ResponseEntity<String> validateFundId(@RequestParam String fundId) {
        String validationResult = fundDetailsValidationService.validateFundId(fundId);
        return ResponseEntity.ok(validationResult);
    }

    @PostMapping("/validate-correct-value")
    public ResponseEntity<String> validateCorrectValue(@RequestParam int correctValue) {
        String validationResult = fundDetailsValidationService.validateCorrectValue(correctValue);
        return ResponseEntity.ok(validationResult);
    }

    @PostMapping("/update-fund-details")
    public ResponseEntity<String> updateFundDetails(@RequestBody Object fundDetails) {
        String updateResult = fundDetailsValidationService.updateFundDetails(fundDetails);
        return ResponseEntity.ok(updateResult);
    }

    @PostMapping("/validate-fund-details")
    public ResponseEntity<String> validateFundDetails(@RequestParam int correctFieldValue, @RequestParam String fundList1, @RequestParam String fundList2) {
        String validationResult = fundDetailsValidationService.validateFundDetails(correctFieldValue, fundList1, fundList2);
        return ResponseEntity.ok(validationResult);
    }
}
