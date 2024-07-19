package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PolicyMemberRepository;
import com.azbj.proposalde3.service.RiderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolicyMemberService {

    @Autowired
    private PolicyMemberRepository policyMemberRepository;

    @Autowired
    private RiderDetailsService riderDetailsService;

    public void assignCoverageDetails(String coverCode, double sumAssured, int age) {
        // Logic to process the coverage details assignment
        policyMemberRepository.updateCoverageDetails(coverCode, sumAssured, age);
    }

    public void updateCoverCode(String selectedRelationshipType) {
        // Logic to determine the cover code based on the selected relationship type
        policyMemberRepository.updateCoverCode(selectedRelationshipType);
    }

    public void manageSpouseDetails(String spouseDetails) {
        // Logic to add or remove spouse details in the database
        policyMemberRepository.manageSpouseDetails(spouseDetails);
    }

    public void deleteMemberById(Long memberId) {
        // Retrieve the member by memberId
        var member = policyMemberRepository.findById(memberId).orElseThrow(() -> new RuntimeException("Member not found"));
        String coverCode = member.getCoverCode();

        // Delete the member by memberId
        policyMemberRepository.deleteById(memberId);

        // Delete associated rider details by cover code
        riderDetailsService.deleteRiderDetailsByCoverCode(coverCode);

        // Update cover codes for remaining members
        policyMemberRepository.updateCoverCodesForRemainingMembers();

        // Update spouse details accordingly
        policyMemberRepository.updateSpouseDetails();
    }
}