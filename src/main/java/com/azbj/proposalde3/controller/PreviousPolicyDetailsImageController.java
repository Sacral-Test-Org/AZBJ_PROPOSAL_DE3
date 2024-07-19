package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PreviousPolicyDetailsImageService;
import com.azbj.proposalde3.model.PreviousPolicyDetailsImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PreviousPolicyDetailsImageController {

    @Autowired
    private PreviousPolicyDetailsImageService previousPolicyDetailsImageService;

    @GetMapping("/getImage")
    public ResponseEntity<PreviousPolicyDetailsImage> getImage(@RequestParam String block, @RequestParam String item, @RequestParam String proposalType) {
        PreviousPolicyDetailsImage image = previousPolicyDetailsImageService.getImage(block, item, proposalType);
        return ResponseEntity.ok(image);
    }

    @GetMapping("/loadImage")
    public ResponseEntity<PreviousPolicyDetailsImage> loadImage(@RequestParam String imageId) {
        PreviousPolicyDetailsImage image = previousPolicyDetailsImageService.loadImage(imageId);
        return ResponseEntity.ok(image);
    }
}
