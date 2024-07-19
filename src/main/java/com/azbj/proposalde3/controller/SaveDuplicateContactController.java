package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.SaveDuplicateContactService;
import com.azbj.proposalde3.model.ControlModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/duplicate-contact")
public class SaveDuplicateContactController {

    @Autowired
    private SaveDuplicateContactService saveDuplicateContactService;

    @PostMapping("/save")
    public ResponseEntity<String> saveDuplicateContactDetails(@RequestBody ControlModel controlModel) {
        try {
            saveDuplicateContactService.saveDuplicateContactDetails(controlModel);
            return new ResponseEntity<>("Duplicate contact details saved successfully.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error saving duplicate contact details: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
