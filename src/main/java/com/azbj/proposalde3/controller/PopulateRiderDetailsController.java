package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PopulateRiderDetailsService;
import com.azbj.proposalde3.model.RiderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class PopulateRiderDetailsController {

    @Autowired
    private PopulateRiderDetailsService populateRiderDetailsService;

    @GetMapping("/populateRiderDetails")
    public List<RiderDetails> getRiderDetails(@RequestParam String packageCode, @RequestParam String productCode) {
        return populateRiderDetailsService.fetchRiderDetails(packageCode, productCode);
    }
}
