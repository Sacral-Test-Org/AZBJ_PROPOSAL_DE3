package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.StatusImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/status-image")
public class StatusImageController {

    @Autowired
    private StatusImageService statusImageService;

    @GetMapping("/load")
    public ResponseEntity<String> loadImage() {
        try {
            String imageData = statusImageService.loadImage();
            return new ResponseEntity<>(imageData, HttpStatus.OK);
        } catch (Exception e) {
            // Log the error details
            return new ResponseEntity<>("Failed to load image", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
