package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.FamilyDetailsService;
import com.azbj.proposalde3.model.FamilyDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/family-details")
public class FamilyDetailsController {

    @Autowired
    private FamilyDetailsService familyDetailsService;

    @GetMapping
    public ResponseEntity<List<FamilyDetails>> getFamilyDetails() {
        List<FamilyDetails> familyDetails = familyDetailsService.getAllFamilyDetails();
        return ResponseEntity.ok(familyDetails);
    }

    @PostMapping
    public ResponseEntity<FamilyDetails> saveFamilyDetails(@RequestBody FamilyDetails familyDetails) {
        FamilyDetails savedFamilyDetails = familyDetailsService.saveOrUpdateFamilyDetails(familyDetails);
        return ResponseEntity.ok(savedFamilyDetails);
    }

    @GetMapping("/image")
    public ResponseEntity<byte[]> getImage(@RequestParam String currentItem, @RequestParam String currentBlock, @RequestParam String proposalType) {
        byte[] imageData = familyDetailsService.fetchImage(currentItem, currentBlock, proposalType);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/age")
    public ResponseEntity<Integer> getAge() {
        int age = familyDetailsService.fetchAge();
        return ResponseEntity.ok(age);
    }

    @PostMapping("/age")
    public ResponseEntity<String> updateAge(@RequestParam int age) {
        familyDetailsService.updateAge(age);
        return ResponseEntity.ok("Age updated successfully");
    }

    @DeleteMapping("/{familyMemberId}")
    public ResponseEntity<String> deleteFamilyMember(@PathVariable Long familyMemberId) {
        familyDetailsService.deleteFamilyMemberById(familyMemberId);
        return ResponseEntity.ok("Family member deleted successfully");
    }

    @GetMapping("/preloaded-data")
    public ResponseEntity<String> getPreloadedData() {
        String preloadedData = familyDetailsService.fetchPreloadedData();
        return ResponseEntity.ok(preloadedData);
    }

    @GetMapping("/image-data")
    public ResponseEntity<byte[]> getImageData(@RequestParam String currentItem) {
        byte[] imageData = familyDetailsService.fetchImageData(currentItem);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/context")
    public ResponseEntity<String> determineContext() {
        String context = familyDetailsService.determineContext();
        return ResponseEntity.ok(context);
    }

    @GetMapping("/member-number")
    public ResponseEntity<String> getMemberNumberData() {
        String memberNumberData = familyDetailsService.getMemberNumberData();
        return ResponseEntity.ok(memberNumberData);
    }

    @GetMapping("/previous-item")
    public ResponseEntity<String> getPreviousItem(@RequestParam String currentItem, @RequestParam String currentBlock) {
        String previousItem = familyDetailsService.fetchPreviousItem(currentItem, currentBlock);
        return ResponseEntity.ok(previousItem);
    }

    @PostMapping("/add-member")
    public ResponseEntity<FamilyDetails> addFamilyMember(@RequestBody FamilyDetails familyMember) {
        FamilyDetails addedMember = familyDetailsService.addFamilyMember(familyMember);
        return ResponseEntity.ok(addedMember);
    }

    @PutMapping("/update-member")
    public ResponseEntity<FamilyDetails> updateFamilyMember(@RequestBody FamilyDetails familyMember) {
        FamilyDetails updatedMember = familyDetailsService.updateFamilyMember(familyMember);
        return ResponseEntity.ok(updatedMember);
    }

    @GetMapping("/family-members")
    public ResponseEntity<List<FamilyDetails>> getFamilyMembers() {
        List<FamilyDetails> familyMembers = familyDetailsService.getFamilyMembers();
        return ResponseEntity.ok(familyMembers);
    }

    @GetMapping("/family-member-image")
    public ResponseEntity<byte[]> getFamilyMemberImage(@RequestParam Long familyMemberId) {
        byte[] imageData = familyDetailsService.fetchFamilyMemberImage(familyMemberId);
        return ResponseEntity.ok(imageData);
    }

    @GetMapping("/strip-number")
    public ResponseEntity<Integer> getStripNumber(@RequestParam String currentBlock, @RequestParam String currentItem) {
        int stripNumber = familyDetailsService.fetchStripNumber(currentBlock, currentItem);
        return ResponseEntity.ok(stripNumber);
    }

    @GetMapping("/image-details")
    public ResponseEntity<byte[]> getImageDetails(@RequestParam int stripNumber, @RequestParam String proposalType) {
        byte[] imageDetails = familyDetailsService.fetchImageDetails(stripNumber, proposalType);
        return ResponseEntity.ok(imageDetails);
    }

    @GetMapping("/family-member-details")
    public ResponseEntity<FamilyDetails> getFamilyMemberDetails(@RequestParam String currentBlock, @RequestParam String currentItem) {
        FamilyDetails familyMemberDetails = familyDetailsService.fetchFamilyMemberDetails(currentBlock, currentItem);
        return ResponseEntity.ok(familyMemberDetails);
    }
}