package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageController {

    @Autowired
    private ImageService imageService;

    @GetMapping("/getImage")
    public ResponseEntity<byte[]> getImage(@RequestParam String imageFileName) {
        byte[] imageData = imageService.getImage(imageFileName);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getAgeFromImage")
    public ResponseEntity<Integer> getAgeFromImage(@RequestParam byte[] imageData) {
        int age = imageService.fetchAgeFromImage(imageData);
        return ResponseEntity.ok(age);
    }

    @GetMapping("/fetchImagePath")
    public ResponseEntity<String> fetchImagePath(@RequestParam String formName) {
        String imagePath = imageService.getImagePath(formName);
        return ResponseEntity.ok(imagePath);
    }

    @GetMapping("/getImageData")
    public ResponseEntity<byte[]> getImageData(@RequestParam String imageId) {
        byte[] imageData = imageService.fetchImageData(imageId);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getImageByContext")
    public ResponseEntity<byte[]> getImageByContext(@RequestParam String currentBlock, @RequestParam String currentItem) {
        byte[] imageData = imageService.fetchImage(currentBlock, currentItem);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getImageByPolicyType")
    public ResponseEntity<byte[]> getImageByPolicyType(@RequestParam String policyType) {
        byte[] imageData = imageService.getImage(policyType);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getImageByProposal")
    public ResponseEntity<byte[]> getImageByProposal(@RequestParam String proposalType, @RequestParam int numberOfPages) {
        byte[] imageData = imageService.fetchImage(proposalType, numberOfPages);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getImageByDetails")
    public ResponseEntity<byte[]> getImageByDetails(@RequestParam String proposalType, @RequestParam String currentBlock, @RequestParam String currentItem) {
        byte[] imageData = imageService.fetchImage(proposalType, currentBlock, currentItem);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getImageById")
    public ResponseEntity<byte[]> getImageById(@RequestParam String imageId) {
        byte[] imageData = imageService.fetchImageById(imageId);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getImageByProposalType")
    public ResponseEntity<byte[]> getImageByProposalType(@RequestParam String proposalType, @RequestParam String currentItem) {
        byte[] imageData = imageService.fetchImage(proposalType, currentItem);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/getImagePath")
    public ResponseEntity<String> getImagePath(@RequestParam String proposalNumber, @RequestParam String imageName) {
        String imagePath = imageService.getImagePath(proposalNumber, imageName);
        return ResponseEntity.ok(imagePath);
    }

    @GetMapping("/downloadImage")
    public ResponseEntity<String> downloadImage(@RequestParam String imagePath) {
        String localPath = imageService.downloadImage(imagePath);
        return ResponseEntity.ok(localPath);
    }

    @GetMapping("/getImageByItemAndBlock")
    public ResponseEntity<byte[]> getImageByItemAndBlock(@RequestParam String currentItem, @RequestParam String currentBlock) {
        byte[] imageData = imageService.getImage(currentItem, currentBlock);
        return ResponseEntity.ok(imageData);
    }
}