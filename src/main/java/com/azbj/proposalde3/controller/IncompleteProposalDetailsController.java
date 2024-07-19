package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.IncompleteProposalDetailsService;
import com.azbj.proposalde3.model.IncompleteProposalDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/incomplete-proposal-details")
public class IncompleteProposalDetailsController {

    @Autowired
    private IncompleteProposalDetailsService incompleteProposalDetailsService;

    @DeleteMapping("/{recordId}")
    public ResponseEntity<String> deleteIncompleteProposalDetails(@PathVariable String recordId) {
        boolean isDeleted = incompleteProposalDetailsService.deleteIncompleteProposalDetails(recordId);
        if (isDeleted) {
            return new ResponseEntity<>("Record deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Record not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveIncompleteProposalDetails(@RequestBody IncompleteProposalDetails details) {
        boolean isSaved = incompleteProposalDetailsService.saveIncompleteDetails(details);
        if (isSaved) {
            return new ResponseEntity<>("Details saved successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to save details", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
