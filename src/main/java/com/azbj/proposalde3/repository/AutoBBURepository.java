package com.azbj.proposalde3.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AutoBBURepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String logEvent(String applicationNumber, String transactionId) {
        String sql = "INSERT INTO event_log (application_number, transaction_id, event_time) VALUES (?, ?, SYSDATE)";
        jdbcTemplate.update(sql, applicationNumber, transactionId);
        return "Event logged successfully";
    }

    public int getNextEventNumber(String contractId) {
        String sql = "SELECT NVL(MAX(event_no), 0) + 1 FROM event_log WHERE contract_id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{contractId}, Integer.class);
    }

    public String insertUWComments(int eventNumber, String contractId, String policyReference, String userComments) {
        String sql = "INSERT INTO azbj_uw_comments (event_no, contract_id, policy_no, ip_no, move_code, policy_status, user_id, comment_date, comments, userrole, opinion, flag) " +
                     "VALUES (?, ?, ?, 1, 'AZBJ_NB', 'PROPOSAL', USER, SYSDATE, SUBSTR(?, 1, 1000), 'BBU', NULL, 'N')";
        jdbcTemplate.update(sql, eventNumber, contractId, policyReference, userComments);
        return "UW Comments inserted successfully";
    }

    public String insertAutoBBULog(String applicationNumber, String policyReference, String ipCpId, String phCpId, String tasa, String bmi, String manUw, String reason, String comments) {
        String sql = "INSERT INTO azbj_qc_autobbu_log (application_no, policy_ref, ip_cp_id, ph_cp_id, tasa, bmi, man_uw, reason, user_id, log_date, comments) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?, ?, USER, SYSDATE, ?)";
        jdbcTemplate.update(sql, applicationNumber, policyReference, ipCpId, phCpId, tasa, bmi, manUw, reason, comments);
        return "Auto BBU Log inserted successfully";
    }

    public String updatePhubTracker(String applicationNumber) {
        String sql = "UPDATE azbj_phub_tracker SET proposal_status = 'PENDING_FOR_AUTO_BBU', locking_flag = 'N' WHERE application_no = ?";
        jdbcTemplate.update(sql, applicationNumber);
        return "Phub Tracker updated successfully";
    }

    public String insertAutoIssuanceGrp(String contractId, String policyReference, String applicationNumber, String productCode) {
        String sql = "INSERT INTO azbj_auto_issuance_grp (contract_id, policy_ref, user_id, create_date, schedule_flag, application_no, bbu_type, product_id) " +
                     "VALUES (?, ?, USER, SYSDATE, 'N', ?, 'AUTO', ?)";
        jdbcTemplate.update(sql, contractId, policyReference, applicationNumber, productCode);
        return "Auto Issuance Group inserted successfully";
    }
}
