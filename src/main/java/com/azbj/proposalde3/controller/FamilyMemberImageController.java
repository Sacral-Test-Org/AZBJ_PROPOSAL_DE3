package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FamilyMemberImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FamilyMemberImageController {

    @Autowired
    private FamilyMemberImageService familyMemberImageService;

    @GetMapping("/getFamilyMemberImage")
    public ResponseEntity<?> getFamilyMemberImage(@RequestParam String proposalType, @RequestParam String currentItem) {
        try {
            byte[] imageData = familyMemberImageService.fetchImage(proposalType, currentItem);
            return ResponseEntity.ok().body(imageData);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching image: " + e.getMessage());
        }
    }

    @GetMapping("/getImageData")
    public ResponseEntity<?> getImageData(@RequestParam String currentItem, @RequestParam String currentBlock) {
        try {
            byte[] imageData = familyMemberImageService.getImageData(currentItem, currentBlock);
            return ResponseEntity.ok().body(imageData);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching image data: " + e.getMessage());
        }
    }
}