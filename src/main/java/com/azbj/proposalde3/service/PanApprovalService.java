package com.azbj.proposalde3.service;

import com.azbj.proposalde3.model.PanApproval;
import com.azbj.proposalde3.repository.PanApprovalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PanApprovalService {

    @Autowired
    private PanApprovalRepository panApprovalRepository;

    public PanApproval approvePanDetails(PanApproval panApprovalDetails) {
        // Validate the provided details
        if (panApprovalDetails.getUwReason().isEmpty() || panApprovalDetails.getSupervisorComment().isEmpty()) {
            throw new IllegalArgumentException("UW Reason and Supervisor Comment cannot be empty");
        }
        if (containsSpecialCharacters(panApprovalDetails.getUwReason()) || containsSpecialCharacters(panApprovalDetails.getSupervisorComment())) {
            throw new IllegalArgumentException("Special characters are not allowed in Reason or Comments");
        }
        // Save the details to the database
        return panApprovalRepository.save(panApprovalDetails);
    }

    public void setPanValidationVariables() {
        // Set the variables
        String pan_validate_calling = "Y";
        String pan_validate_continue = "N";
        // These variables would typically be set in a broader application context
    }

    public String validateAndApprove(PanApproval approvalData) {
        // Validate the "UW Reason" and "Supervisor Comment" fields
        if (approvalData.getUwReason().isEmpty() || approvalData.getSupervisorComment().isEmpty()) {
            return "UW Reason and Supervisor Comment cannot be empty";
        }
        if (containsSpecialCharacters(approvalData.getUwReason()) || containsSpecialCharacters(approvalData.getSupervisorComment())) {
            return "Special characters are not allowed in Reason or Comments";
        }
        // Update the approval status in the database
        panApprovalRepository.updateApprovalStatus(approvalData);
        return "Approval status updated successfully";
    }

    private boolean containsSpecialCharacters(String input) {
        return !input.matches("^[a-zA-Z0-9 ]*$");
    }
}