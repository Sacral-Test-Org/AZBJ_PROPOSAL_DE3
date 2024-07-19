package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FundDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fund-details")
public class FundDetailsController {

    @Autowired
    private FundDetailsService fundDetailsService;

    @GetMapping("/apportionment-percentages")
    public ResponseEntity<List<Integer>> getApportionmentPercentages() {
        List<Integer> percentages = fundDetailsService.getApportionmentPercentages();
        return ResponseEntity.ok(percentages);
    }

    @PostMapping("/perform-actions")
    public ResponseEntity<Void> performActionsBasedOnTotal(@RequestParam int totalPercentage) {
        fundDetailsService.performActionsBasedOnTotal(totalPercentage);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-fund/{fundId}")
    public ResponseEntity<Void> deleteFundById(@PathVariable String fundId) {
        fundDetailsService.deleteFundById(fundId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/funds")
    public ResponseEntity<List<String>> getFunds() {
        List<String> funds = fundDetailsService.getFunds();
        return ResponseEntity.ok(funds);
    }

    @PutMapping("/update-fund")
    public ResponseEntity<Void> updateFund(@RequestParam String fundId, @RequestParam int apportionmentPercentage) {
        fundDetailsService.updateFund(fundId, apportionmentPercentage);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/available-funds")
    public ResponseEntity<List<String>> getAvailableFunds(@RequestParam String productCode, @RequestParam String saDateRecd) {
        List<String> availableFunds = fundDetailsService.fetchAvailableFunds(productCode, saDateRecd);
        return ResponseEntity.ok(availableFunds);
    }

    @PostMapping("/validate-apportionment")
    public ResponseEntity<Boolean> validateApportionment(@RequestParam int percentage) {
        boolean isValid = fundDetailsService.validateApportionment(percentage);
        return ResponseEntity.ok(isValid);
    }

    @GetMapping("/image-data")
    public ResponseEntity<String> getImageData(@RequestParam String currentBlock, @RequestParam String currentItem, @RequestParam String proposalType) {
        String imageData = fundDetailsService.fetchImageData(currentBlock, currentItem, proposalType);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/fund-details")
    public ResponseEntity<List<String>> getFundDetails() {
        List<String> fundDetails = fundDetailsService.getFundDetails();
        return ResponseEntity.ok(fundDetails);
    }

    @PostMapping("/insert-fund-details")
    public ResponseEntity<Void> insertFundDetails(@RequestBody String fundDetails) {
        fundDetailsService.insertFundDetails(fundDetails);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update-fund-details")
    public ResponseEntity<Void> updateFundDetails(@RequestBody String fundDetails) {
        fundDetailsService.updateFundDetails(fundDetails);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/reset-fund-details")
    public ResponseEntity<Void> resetFundDetails() {
        fundDetailsService.resetFundDetails();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/navigate-next-item")
    public ResponseEntity<Void> navigateToNextItem() {
        fundDetailsService.navigateToNextItem();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/validate-correct-value")
    public ResponseEntity<Boolean> validateCorrectValue(@RequestParam String correctValue) {
        boolean isValid = fundDetailsService.validateCorrectValue(correctValue);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/update-fund-details-correct")
    public ResponseEntity<Void> updateFundDetails(@RequestParam String correctFieldValue, @RequestParam String fundList1, @RequestParam String fundList2) {
        fundDetailsService.updateFundDetails(correctFieldValue, fundList1, fundList2);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete-fund-records")
    public ResponseEntity<Void> deleteFundRecords() {
        fundDetailsService.deleteFundRecords();
        return ResponseEntity.ok().build();
    }

    @GetMapping("/fund-lov")
    public ResponseEntity<List<String>> getFundLOV(@RequestParam String productCode, @RequestParam String coverCode) {
        List<String> fundLOV = fundDetailsService.fetchFundLOV(productCode, coverCode);
        return ResponseEntity.ok(fundLOV);
    }

    @GetMapping("/fund-names")
    public ResponseEntity<List<String>> getFundNames(@RequestParam String productCode, @RequestParam String coverCode) {
        List<String> fundNames = fundDetailsService.fetchFundNames(productCode, coverCode);
        return ResponseEntity.ok(fundNames);
    }

    @GetMapping("/fund-list")
    public ResponseEntity<List<String>> getFundList() {
        List<String> fundList = fundDetailsService.getFundList();
        return ResponseEntity.ok(fundList);
    }

    @PostMapping("/save-apportionment")
    public ResponseEntity<Void> saveApportionment(@RequestParam String fundId, @RequestParam int percentage) {
        fundDetailsService.saveApportionment(fundId, percentage);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/solution-product-details")
    public ResponseEntity<String> manageSolutionProductDetails(@RequestParam String solutionProductDetails) {
        String updatedDetails = fundDetailsService.manageSolutionProductDetails(solutionProductDetails);
        return ResponseEntity.ok(updatedDetails);
    }

    @GetMapping("/fund-details-by-block-item")
    public ResponseEntity<String> getFundDetails(@RequestParam String currentBlock, @RequestParam String currentItem) {
        String fundDetails = fundDetailsService.fetchFundDetails(currentBlock, currentItem);
        return ResponseEntity.ok(fundDetails);
    }

    @GetMapping("/fund-details-by-params")
    public ResponseEntity<String> getFundDetails(@RequestParam String portfolioStrategy, @RequestParam String productDefinition, @RequestParam String productCode, @RequestParam String frequency, @RequestParam String packageCode) {
        String fundDetails = fundDetailsService.fetchFundDetails(portfolioStrategy, productDefinition, productCode, frequency, packageCode);
        return ResponseEntity.ok(fundDetails);
    }

    @PostMapping("/validate-apportionment-percentage")
    public ResponseEntity<Boolean> validateApportionmentPercentage(@RequestParam int percentage) {
        boolean isValid = fundDetailsService.validateApportionmentPercentage(percentage);
        return ResponseEntity.ok(isValid);
    }

    @PostMapping("/navigate-based-on-apportionment")
    public ResponseEntity<Void> navigateBasedOnApportionment(@RequestParam int totalPercentage) {
        fundDetailsService.navigateToBlock(totalPercentage);
        return ResponseEntity.ok().build();
    }
}