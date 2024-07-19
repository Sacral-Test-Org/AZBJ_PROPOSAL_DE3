package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FundDetailsImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FundDetailsImageController {

    @Autowired
    private FundDetailsImageService fundDetailsImageService;

    @GetMapping("/getImageData")
    public ResponseEntity<?> getImageData(@RequestParam String currentBlock, 
                                          @RequestParam String currentItem, 
                                          @RequestParam String proposalType) {
        try {
            String imageData = fundDetailsImageService.fetchImageData(currentBlock, currentItem, proposalType);
            return ResponseEntity.ok(imageData);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching image data: " + e.getMessage());
        }
    }
}
