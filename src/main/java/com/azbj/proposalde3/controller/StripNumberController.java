package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.StripNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StripNumberController {

    @Autowired
    private StripNumberService stripNumberService;

    @GetMapping("/getStripNumber")
    public ResponseEntity<Integer> getStripNumber(@RequestParam String currentBlock, 
                                                  @RequestParam String currentItem, 
                                                  @RequestParam String proposalType) {
        try {
            int stripNumber = stripNumberService.fetchStripNumber(currentBlock, currentItem, proposalType);
            return ResponseEntity.ok(stripNumber);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
