package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ContextRepository;
import com.azbj.proposalde3.repository.FamilyDetailsRepository;
import com.azbj.proposalde3.model.Context;
import com.azbj.proposalde3.model.FamilyDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.log4j.Logger;

@Service
public class ContextService {

    private static final Logger logger = Logger.getLogger(ContextService.class);

    @Autowired
    private ContextRepository contextRepository;

    @Autowired
    private FamilyDetailsRepository familyDetailsRepository;

    public Context determineContext() {
        try {
            return contextRepository.fetchContext();
        } catch (Exception e) {
            logger.error("Error determining context", e);
            throw new RuntimeException("Error determining context", e);
        }
    }

    public FamilyDetails getFamilyDetails(Context context) {
        try {
            return familyDetailsRepository.fetchFamilyDetails(context);
        } catch (Exception e) {
            logger.error("Error fetching family details", e);
            throw new RuntimeException("Error fetching family details", e);
        }
    }

    public Context getContext(String currentBlock, String currentItem) {
        try {
            return contextRepository.findContext(currentBlock, currentItem);
        } catch (Exception e) {
            logger.error("Error getting context", e);
            throw new RuntimeException("Error getting context", e);
        }
    }

    public void setContext(Context context) {
        try {
            contextRepository.save(context);
        } catch (Exception e) {
            logger.error("Error setting context", e);
            throw new RuntimeException("Error setting context", e);
        }
    }
}
