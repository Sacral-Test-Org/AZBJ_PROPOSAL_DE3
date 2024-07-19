package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.MembershipDetailsService;
import com.azbj.proposalde3.model.MembershipDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MembershipDetailsController {

    @Autowired
    private MembershipDetailsService membershipDetailsService;

    @GetMapping("/membership-details")
    public ResponseEntity<MembershipDetails> getMembershipDetails(@RequestParam String applicationNumber, @RequestParam String proposalType) {
        try {
            MembershipDetails membershipDetails = membershipDetailsService.fetchMembershipDetails(applicationNumber, proposalType);
            return ResponseEntity.ok(membershipDetails);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
