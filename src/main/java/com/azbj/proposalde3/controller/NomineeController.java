package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.NomineeService;
import com.azbj.proposalde3.model.NomineeDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/nominee")
public class NomineeController {

    @Autowired
    private NomineeService nomineeService;

    @GetMapping("/details/{applicationNo}")
    public ResponseEntity<NomineeDetails> fetchNomineeDetails(@PathVariable String applicationNo) {
        try {
            NomineeDetails nomineeDetails = nomineeService.getNomineeDetails(applicationNo);
            return ResponseEntity.ok(nomineeDetails);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
