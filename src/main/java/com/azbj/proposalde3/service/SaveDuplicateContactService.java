package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.SaveDuplicateContactRepository;
import com.azbj.proposalde3.model.ControlModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveDuplicateContactService {

    @Autowired
    private SaveDuplicateContactRepository saveDuplicateContactRepository;

    public boolean saveDuplicateContactDetails(ControlModel controlModel) {
        try {
            // Validate the input data
            if (controlModel == null || controlModel.getContact() == null) {
                throw new IllegalArgumentException("Invalid input data");
            }

            // Call the repository method to save duplicate contact number details
            boolean isSaved = saveDuplicateContactRepository.saveDuplicateContactDetails(controlModel);

            if (!isSaved) {
                throw new RuntimeException("Failed to save duplicate contact details");
            }

            // Check the v_grp_product variable
            if ("Y".equals(controlModel.getVGrpProduct())) {
                // Save group details
                boolean isGroupSaved = saveDuplicateContactRepository.saveGroupDetails(controlModel);
                if (!isGroupSaved) {
                    throw new RuntimeException("Failed to save group details");
                }
            } else {
                // Save non-group details
                boolean isNonGroupSaved = saveDuplicateContactRepository.saveNonGroupDetails(controlModel);
                if (!isNonGroupSaved) {
                    throw new RuntimeException("Failed to save non-group details");
                }
            }

            return true;
        } catch (Exception e) {
            // Log the error and return false
            System.err.println("Error: " + e.getMessage());
            return false;
        }
    }
}
