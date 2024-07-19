package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PolicyMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/policy-member")
public class PolicyMemberController {

    @Autowired
    private PolicyMemberService policyMemberService;

    @PostMapping("/assign-coverage-details")
    public void assignCoverageDetails(@RequestParam String coverCode, @RequestParam double sumAssured, @RequestParam int age) {
        policyMemberService.assignCoverageDetails(coverCode, sumAssured, age);
    }

    @PostMapping("/update-cover-code")
    public void updateCoverCode(@RequestParam String selectedRelationshipType) {
        policyMemberService.updateCoverCode(selectedRelationshipType);
    }

    @PostMapping("/manage-spouse-details")
    public void manageSpouseDetails(@RequestParam String spouseDetails) {
        policyMemberService.manageSpouseDetails(spouseDetails);
    }

    @DeleteMapping("/delete-member/{memberId}")
    public void deleteMember(@PathVariable Long memberId) {
        policyMemberService.deleteMemberById(memberId);
    }
}
