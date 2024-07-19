package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.StripNumberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StripNumberService {

    @Autowired
    private StripNumberRepository stripNumberRepository;

    public Integer getStripNumber(Object context) {
        // Assuming context contains currentBlock, currentItem, and proposalType
        String currentBlock = (String) context.get("currentBlock");
        String currentItem = (String) context.get("currentItem");
        String proposalType = (String) context.get("proposalType");

        try {
            return stripNumberRepository.findStripNumber(currentBlock, currentItem, proposalType);
        } catch (Exception e) {
            // Handle exception and set strip number to null
            return null;
        }
    }

    public Integer fetchStripNumber(String currentBlock, String currentItem, String proposalType) {
        try {
            return stripNumberRepository.findStripNumber(currentBlock, currentItem, proposalType);
        } catch (Exception e) {
            // Handle exception and set strip number to null
            return null;
        }
    }
}
