package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.CorrectValueNavigationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CorrectValueNavigationService {

    @Autowired
    private CorrectValueNavigationRepository correctValueNavigationRepository;

    public String getPreviousItem(String currentBlock, String currentItem, String proposalType) {
        if ("CORRECT".equals(currentBlock)) {
            String previousItem = correctValueNavigationRepository.findPreviousItem(currentItem, currentBlock, proposalType);
            if (previousItem != null) {
                return previousItem;
            }
        }
        return "L_" + currentItem;
    }

    public Integer getStripNumber(String currentBlock, String currentItem, String proposalType) {
        return correctValueNavigationRepository.findStripNumber(currentBlock, currentItem, proposalType);
    }
}