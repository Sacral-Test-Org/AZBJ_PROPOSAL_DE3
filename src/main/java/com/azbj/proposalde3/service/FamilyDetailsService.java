package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.FamilyDetailsRepository;
import com.azbj.proposalde3.model.FamilyDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FamilyDetailsService {

    @Autowired
    private FamilyDetailsRepository familyDetailsRepository;

    public List<FamilyDetails> getAllFamilyDetails() {
        return familyDetailsRepository.findAll();
    }

    public FamilyDetails saveOrUpdateFamilyDetails(FamilyDetails familyDetails) {
        return familyDetailsRepository.save(familyDetails);
    }

    public void deleteFamilyMemberById(Long familyMemberId) {
        familyDetailsRepository.deleteById(familyMemberId);
    }

    public String fetchImage(String currentItem, String currentBlock, String proposalType) {
        return familyDetailsRepository.findImageFileName(currentItem, currentBlock, proposalType);
    }

    public Integer fetchAge() {
        return familyDetailsRepository.findAge();
    }

    public Integer updateAge(Integer age) {
        return familyDetailsRepository.saveAge(age);
    }

    public String fetchPreloadedData() {
        return familyDetailsRepository.findPreloadedData();
    }

    public String fetchImageData(String currentItem) {
        return familyDetailsRepository.findImageData(currentItem);
    }

    public FamilyDetails getFamilyDetails(Object context) {
        return familyDetailsRepository.fetchFamilyDetails(context);
    }

    public Object determineContext() {
        // Logic to determine context
        return new Object();
    }

    public String getMemberNumberData() {
        return familyDetailsRepository.getMemberNumberData();
    }

    public String fetchPreviousItem(String currentItem, String currentBlock) {
        return familyDetailsRepository.findPreviousItem(currentItem, currentBlock);
    }

    public String fetchImage(String proposalType, Integer numberOfPages) {
        return familyDetailsRepository.findImage(proposalType, numberOfPages);
    }

    public FamilyDetails addFamilyMember(FamilyDetails familyMember) {
        return familyDetailsRepository.save(familyMember);
    }

    public FamilyDetails updateFamilyMember(FamilyDetails familyMember) {
        return familyDetailsRepository.save(familyMember);
    }

    public void deleteFamilyMember(Long familyMemberId) {
        familyDetailsRepository.deleteById(familyMemberId);
    }

    public List<FamilyDetails> getFamilyMembers() {
        return familyDetailsRepository.findAll();
    }

    public String loadImage(String currentItem) {
        // Logic to load image
        return "imageData";
    }

    public String fetchFieldData(String selectedPolicyType) {
        return familyDetailsRepository.findFieldData(selectedPolicyType);
    }

    public String fetchFamilyMemberImage(Long familyMemberId) {
        return familyDetailsRepository.findImageByFamilyMemberId(familyMemberId);
    }

    public String fetchStripNumber(String currentBlock, String currentItem) {
        return familyDetailsRepository.findStripNumber(currentBlock, currentItem);
    }

    public String fetchImageDetails(String stripNumber, String proposalType) {
        return familyDetailsRepository.findImageDetails(stripNumber, proposalType);
    }

    public FamilyDetails fetchFamilyMemberDetails(String currentBlock, String currentItem) {
        return familyDetailsRepository.findFamilyMemberDetails(currentBlock, currentItem);
    }

    public FamilyDetails addMember(FamilyDetails member) {
        return familyDetailsRepository.save(member);
    }

    public void deleteMember(Long memberId) {
        familyDetailsRepository.deleteById(memberId);
    }
}