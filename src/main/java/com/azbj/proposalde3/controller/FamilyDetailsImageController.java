package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FamilyDetailsImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@RestController
@RequestMapping("/api/family-details")
public class FamilyDetailsImageController {

    private static final Logger logger = LogManager.getLogger(FamilyDetailsImageController.class);

    @Autowired
    private FamilyDetailsImageService familyDetailsImageService;

    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(@RequestParam String proposalType, @RequestParam String currentItem) {
        try {
            byte[] image = familyDetailsImageService.fetchImage(proposalType, currentItem);
            return ResponseEntity.ok().body(image);
        } catch (Exception e) {
            logger.error("Error fetching image for proposalType: {} and currentItem: {}", proposalType, currentItem, e);
            return ResponseEntity.status(500).build();
        }
    }
}
