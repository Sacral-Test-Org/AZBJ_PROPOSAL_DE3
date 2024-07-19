package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.SSOFundDetailsService;
import com.azbj.proposalde3.model.SSOFundDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sso-fund-details")
public class SSOFundDetailsController {

    @Autowired
    private SSOFundDetailsService ssoFundDetailsService;

    @GetMapping("/fetch")
    public ResponseEntity<List<SSOFundDetails>> getSSOFundDetails(@RequestParam String productCode, @RequestParam String dateRange) {
        List<SSOFundDetails> fundDetails = ssoFundDetailsService.fetchSSOFundDetails(productCode, dateRange);
        return ResponseEntity.ok(fundDetails);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteSSOFunds(@RequestBody List<String> selectedFundIds) {
        ssoFundDetailsService.removeSSOFunds(selectedFundIds);
        return ResponseEntity.ok("Selected funds deleted successfully.");
    }

    @PostMapping("/update-apportionment")
    public ResponseEntity<String> updateFundDetails(@RequestParam double apportionmentValue) {
        ssoFundDetailsService.processApportionment(apportionmentValue);
        return ResponseEntity.ok("Fund details updated successfully.");
    }
}
