package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.RiderCover1SARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RiderCover1SAService {

    @Autowired
    private RiderCover1SARepository riderCover1SARepository;

    public Object loadRiderCover1SAData(Object context) {
        // Extract necessary details from context
        String currentBlock = (String) context.get("currentBlock");
        String currentItem = (String) context.get("currentItem");
        String proposalType = (String) context.get("proposalType");

        // Call repository method to find max strip number
        Integer maxStripNo = riderCover1SARepository.findMaxStripNo(currentBlock, currentItem, proposalType);

        // Load data from image file based on max strip number
        Object imageData = loadImageData(maxStripNo);

        // Validate the data type
        if (!(imageData instanceof Number)) {
            throw new IllegalArgumentException("Data loaded is not a number");
        }

        return imageData;
    }

    private Object loadImageData(Integer stripNo) {
        // Logic to load data from image file based on strip number
        // This is a placeholder for actual image loading logic
        return 12345; // Example data
    }
}
