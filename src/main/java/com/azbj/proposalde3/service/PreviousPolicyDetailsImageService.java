package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PreviousPolicyDetailsImageRepository;
import com.azbj.proposalde3.model.PreviousPolicyDetailsImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Service
public class PreviousPolicyDetailsImageService {

    private static final Logger logger = LogManager.getLogger(PreviousPolicyDetailsImageService.class);

    @Autowired
    private PreviousPolicyDetailsImageRepository previousPolicyDetailsImageRepository;

    public PreviousPolicyDetailsImage getImage(String block, String item, String proposalType) {
        try {
            return previousPolicyDetailsImageRepository.findImage(block, item, proposalType);
        } catch (Exception e) {
            logger.error("Error retrieving image for block: " + block + ", item: " + item + ", proposalType: " + proposalType, e);
            throw new RuntimeException("Error retrieving image", e);
        }
    }

    public PreviousPolicyDetailsImage fetchImage(String currentBlock, String currentItem) {
        try {
            return previousPolicyDetailsImageRepository.findByBlockAndItem(currentBlock, currentItem);
        } catch (Exception e) {
            logger.error("Error fetching image for block: " + currentBlock + ", item: " + currentItem, e);
            throw new RuntimeException("Error fetching image", e);
        }
    }

    public PreviousPolicyDetailsImage loadImage(Long imageId) {
        try {
            return previousPolicyDetailsImageRepository.findById(imageId).orElseThrow(() -> new RuntimeException("Image not found"));
        } catch (Exception e) {
            logger.error("Error loading image with ID: " + imageId, e);
            throw new RuntimeException("Error loading image", e);
        }
    }
}
