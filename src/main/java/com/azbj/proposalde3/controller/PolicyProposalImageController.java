package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PolicyProposalImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PolicyProposalImageController {

    @Autowired
    private PolicyProposalImageService policyProposalImageService;

    @GetMapping("/getImageData")
    public ResponseEntity<byte[]> getImageData(@RequestParam("stripNumber") int stripNumber) {
        byte[] imageData = policyProposalImageService.fetchImageData(stripNumber);
        return ResponseEntity.ok().body(imageData);
    }
}
