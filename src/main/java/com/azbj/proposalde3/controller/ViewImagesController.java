package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ViewImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ViewImagesController {

    @Autowired
    private ViewImagesService viewImagesService;

    @GetMapping("/view-images")
    public ResponseEntity<String> viewImages(@RequestParam String policyId, 
                                             @RequestParam boolean insuredCheck, 
                                             @RequestParam String policyType) {
        try {
            String url = viewImagesService.generateViewImagesURL(policyId, insuredCheck, policyType);
            return ResponseEntity.ok(url);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error generating URL: " + e.getMessage());
        }
    }
}
