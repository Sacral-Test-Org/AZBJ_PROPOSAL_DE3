package com.azbj.proposalde3.repository;

import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class SaveApplyRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean saveAndApply(CPData cpData) {
        try {
            // Initialize necessary variables
            String applnNo = cpData.getApplnNo();
            String partnerType = cpData.getPartnerType();

            // Delete existing merge requests
            String deleteMergeRequestsQuery = "DELETE FROM azbj_cp_merge_request WHERE appln_no = ? AND partner_type = ?";
            jdbcTemplate.update(deleteMergeRequestsQuery, applnNo, partnerType);

            // If Choose Merge option is selected
            if (cpData.isChooseMerge()) {
                // Validate partner type and date of birth
                // Ensure selected CPs meet criteria for merging
                // Insert merge request
                String insertMergeRequestQuery = "INSERT INTO azbj_cp_merging (request_id, appln_no, partner_type, cp_id) VALUES (?, ?, ?, ?)";
                for (CP cp : cpData.getSelectedCPs()) {
                    jdbcTemplate.update(insertMergeRequestQuery, cp.getRequestId(), applnNo, partnerType, cp.getCpId());
                }
            }

            // If Single CP Matched option is selected
            if (cpData.isSingleCPMatched()) {
                // Ensure exactly one CP is selected
                // Update relevant fields in Correct Value section
                String updateCorrectValueQuery = "UPDATE azbj_correct_value SET field_value = ? WHERE field_name = ? AND appln_no = ?";
                for (CorrectValue cv : cpData.getCorrectValues()) {
                    jdbcTemplate.update(updateCorrectValueQuery, cv.getFieldValue(), cv.getFieldName(), applnNo);
                }
            }

            // Update Control section with appropriate flags
            String updateControlQuery = "UPDATE azbj_control SET flag_value = ? WHERE flag_name = ? AND appln_no = ?";
            for (ControlFlag cf : cpData.getControlFlags()) {
                jdbcTemplate.update(updateControlQuery, cf.getFlagValue(), cf.getFlagName(), applnNo);
            }

            // Validate RCU and navigate to appropriate item based on validation result
            // This part of the logic would depend on the specific validation rules and navigation logic

            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}

class CPData {
    private String applnNo;
    private String partnerType;
    private boolean chooseMerge;
    private boolean singleCPMatched;
    private List<CP> selectedCPs;
    private List<CorrectValue> correctValues;
    private List<ControlFlag> controlFlags;

    // Getters and setters
}

class CP {
    private String requestId;
    private String cpId;

    // Getters and setters
}

class CorrectValue {
    private String fieldValue;
    private String fieldName;

    // Getters and setters
}

class ControlFlag {
    private String flagValue;
    private String flagName;

    // Getters and setters
}
