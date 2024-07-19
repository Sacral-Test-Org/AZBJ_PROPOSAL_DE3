package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.SaveApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/save-apply")
public class SaveApplyController {

    @Autowired
    private SaveApplyService saveApplyService;

    @PostMapping
    public ResponseEntity<String> saveAndApply(@RequestBody String cpData) {
        try {
            saveApplyService.saveAndApply(cpData);
            return ResponseEntity.ok("CP data saved and applied successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error saving and applying CP data: " + e.getMessage());
        }
    }
}
