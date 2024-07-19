package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FundDetailsListService;
import com.azbj.proposalde3.model.FundDetailsList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FundDetailsListController {

    @Autowired
    private FundDetailsListService fundDetailsListService;

    @GetMapping("/availableFunds")
    public List<FundDetailsList> getAvailableFunds(@RequestParam String productCode, @RequestParam String dateRange) {
        return fundDetailsListService.getAvailableFunds(productCode, dateRange);
    }

    @GetMapping("/imageData")
    public byte[] getImageData(@RequestParam String currentBlock, @RequestParam String currentItem) {
        return fundDetailsListService.fetchImageData(currentBlock, currentItem);
    }
}
