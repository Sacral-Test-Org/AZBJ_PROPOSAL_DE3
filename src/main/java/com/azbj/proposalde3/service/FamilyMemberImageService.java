package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.FamilyMemberImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyMemberImageService {

    @Autowired
    private FamilyMemberImageRepository familyMemberImageRepository;

    public byte[] fetchImage(String proposalType, String currentItem) {
        // Determine the current block and item
        String currentBlock = determineCurrentBlock(currentItem);

        // Identify the correct image file name based on the proposal type and current item
        String imageFileName = identifyImageFileName(proposalType, currentItem);

        // Call getImageData method from FamilyMemberImageRepository to fetch the image data
        byte[] imageData = familyMemberImageRepository.findImageData(currentItem, currentBlock);

        // Return the image data
        return imageData;
    }

    private String determineCurrentBlock(String currentItem) {
        // Logic to determine the current block based on the current item
        // This is a placeholder implementation
        return "AZBJ_FAMILY_DETAILS";
    }

    private String identifyImageFileName(String proposalType, String currentItem) {
        // Logic to identify the correct image file name based on the proposal type and current item
        // This is a placeholder implementation
        return proposalType + "_" + currentItem + ".png";
    }

    public byte[] getImageData(String currentItem, String currentBlock) {
        // Fetch the image data from the repository based on the current item and block context
        return familyMemberImageRepository.findImageData(currentItem, currentBlock);
    }

    public byte[] fetchFamilyMemberImage(String familyMemberId) {
        // Fetch the family member image from the repository based on the family member ID
        return familyMemberImageRepository.findImageByFamilyMemberId(familyMemberId);
    }

    public byte[] fetchImage(String imageFileName) {
        // Call the repository method to fetch the image based on the image file name
        return familyMemberImageRepository.findImage(imageFileName);
    }
}
