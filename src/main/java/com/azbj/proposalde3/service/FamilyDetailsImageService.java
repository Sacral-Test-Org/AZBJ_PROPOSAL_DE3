package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.FamilyDetailsImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Service
public class FamilyDetailsImageService {

    private static final Logger logger = LogManager.getLogger(FamilyDetailsImageService.class);

    @Autowired
    private FamilyDetailsImageRepository familyDetailsImageRepository;

    public String fetchImage(String proposalType, String currentItem) {
        try {
            return familyDetailsImageRepository.findImage(proposalType, currentItem);
        } catch (Exception e) {
            logger.error("Error fetching image for proposalType: " + proposalType + ", currentItem: " + currentItem, e);
            throw new RuntimeException("Error fetching image", e);
        }
    }
}
