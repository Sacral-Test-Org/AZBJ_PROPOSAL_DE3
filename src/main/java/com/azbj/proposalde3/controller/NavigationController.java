package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.NavigationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/navigation")
public class NavigationController {

    @Autowired
    private NavigationService navigationService;

    @PostMapping("/navigateToSection")
    public ResponseEntity<String> navigateToSection(@RequestParam String section) {
        navigationService.navigateToSection(section);
        return ResponseEntity.ok("Navigated to section: " + section);
    }

    @PostMapping("/navigateToField")
    public ResponseEntity<String> navigateToField(@RequestParam String field) {
        navigationService.navigateToField(field);
        return ResponseEntity.ok("Navigated to field: " + field);
    }

    @PostMapping("/navigateToPreviousItem")
    public ResponseEntity<String> navigateToPreviousItem() {
        navigationService.navigateToPreviousItem();
        return ResponseEntity.ok("Navigated to previous item");
    }

    @PostMapping("/navigateToNextItem")
    public ResponseEntity<String> navigateToNextItem() {
        navigationService.navigateToNextItem();
        return ResponseEntity.ok("Navigated to next item");
    }

    @PostMapping("/navigateToClickedItem")
    public ResponseEntity<String> navigateToClickedItem() {
        navigationService.navigateToClickedItem();
        return ResponseEntity.ok("Navigated to clicked item");
    }

    @PostMapping("/validateNextTab")
    public ResponseEntity<String> validateNextTab() {
        navigationService.validateNextTab();
        return ResponseEntity.ok("Next tab validated");
    }

    @PostMapping("/handleNextTabButton")
    public ResponseEntity<String> handleNextTabButton() {
        navigationService.navigateToNextTab();
        return ResponseEntity.ok("Handled next tab button");
    }

    @PostMapping("/validateArea")
    public ResponseEntity<String> validateArea(@RequestParam String state, @RequestParam String district, @RequestParam String pincode, @RequestParam String area) {
        navigationService.validateArea(state, district, pincode, area);
        return ResponseEntity.ok("Area validated");
    }

    @PostMapping("/validatePlace")
    public ResponseEntity<String> validatePlace(@RequestParam String addressLine3) {
        navigationService.validatePlace(addressLine3);
        return ResponseEntity.ok("Place validated");
    }

    @GetMapping("/getPennyDropStatus")
    public ResponseEntity<Boolean> getPennyDropStatus() {
        boolean status = navigationService.getPennyDropStatus();
        return ResponseEntity.ok(status);
    }

    @PostMapping("/navigateToPreviousItemWithParams")
    public ResponseEntity<String> navigateToPreviousItemWithParams(@RequestParam String currentBlock, @RequestParam String currentItem, @RequestParam String proposalType) {
        String previousItem = navigationService.getPreviousItem(currentBlock, currentItem, proposalType);
        return ResponseEntity.ok("Navigated to previous item: " + previousItem);
    }

    @PostMapping("/checkTransactionCount")
    public ResponseEntity<Integer> checkTransactionCount(@RequestParam String permReceiptNo) {
        int count = navigationService.checkTransactionCount(permReceiptNo);
        return ResponseEntity.ok(count);
    }

    @PostMapping("/promptUser")
    public ResponseEntity<String> promptUser(@RequestParam int v_ph_sign_cnt) {
        navigationService.promptUser(v_ph_sign_cnt);
        return ResponseEntity.ok("User prompted");
    }

    @PostMapping("/enableDisableTabs")
    public ResponseEntity<String> enableDisableTabs() {
        navigationService.enableDisableTabs();
        return ResponseEntity.ok("Tabs enabled/disabled");
    }

    @PostMapping("/navigateToItem")
    public ResponseEntity<String> navigateToItem(@RequestParam String itemName) {
        navigationService.navigateToItem(itemName);
        return ResponseEntity.ok("Navigated to item: " + itemName);
    }
}