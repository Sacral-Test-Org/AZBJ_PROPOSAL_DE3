package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.InsuranceAmountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InsuranceAmountController {

    @Autowired
    private InsuranceAmountService insuranceAmountService;

    @GetMapping("/getStripNumber")
    public int getStripNumber(@RequestParam String blockName, @RequestParam String fieldName, @RequestParam String proposalType) {
        return insuranceAmountService.getStripNumber(blockName, fieldName, proposalType);
    }

    @GetMapping("/getFileName")
    public String getFileName(@RequestParam int stripNumber, @RequestParam String proposalType) {
        return insuranceAmountService.getFileName(stripNumber, proposalType);
    }
}
