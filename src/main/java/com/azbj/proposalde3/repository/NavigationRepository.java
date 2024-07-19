package com.azbj.proposalde3.repository;

import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class NavigationRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String fetchMasterPolicyNumber(String applicationNumber) {
        String sql = "SELECT a.master_policy_no FROM azbj_proposal_appln_det a WHERE a.appln_no = TO_NUMBER(?) AND de_flag = 'D2'";
        return jdbcTemplate.queryForObject(sql, new Object[]{applicationNumber}, String.class);
    }

    public int countSystemConstants(String masterPolicyNumber) {
        String sql = "SELECT COUNT(*) FROM azbj_system_constants WHERE sys_type = 'GROUP' AND sys_code = 'DISABLE_LOAN_NUMBER' AND sys_desc LIKE '%|' || NVL(?, ?) || '|%'";
        return jdbcTemplate.queryForObject(sql, new Object[]{masterPolicyNumber, masterPolicyNumber}, Integer.class);
    }

    public String findSection(String section) {
        String sql = "SELECT section_details FROM azbj_sections WHERE section_name = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{section}, String.class);
    }

    public String findField(String field) {
        String sql = "SELECT field_details FROM azbj_fields WHERE field_name = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{field}, String.class);
    }

    public String getPreviousItem(String currentItem, String currentBlock, String proposalType) {
        String sql = "SELECT key_prev_item FROM azbj_new_bbu_field_map_gr WHERE LIST_NAME = ? AND LIST_BLOCK_NAME = ? AND proposal_type = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{currentItem, currentBlock, proposalType}, String.class);
    }

    public String getNextItem(String currentItem, String currentBlock, String proposalType) {
        String sql = "SELECT key_next_item FROM azbj_new_bbu_field_map_gr WHERE LIST_NAME = ? AND LIST_BLOCK_NAME = ? AND proposal_type = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{currentItem, currentBlock, proposalType}, String.class);
    }

    public String getClickedItem(String currentItem, String currentBlock, String proposalType) {
        String sql = "SELECT clicked_item FROM azbj_new_bbu_field_map_gr WHERE LIST_NAME = ? AND LIST_BLOCK_NAME = ? AND proposal_type = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{currentItem, currentBlock, proposalType}, String.class);
    }

    public int checkAgentBypassStatus(String agentCode) {
        String sql = "SELECT COUNT(1) FROM azbj_sign_bypass_agents WHERE agent_code = ? AND by_pass_flag = 'Y'";
        return jdbcTemplate.queryForObject(sql, new Object[]{agentCode}, Integer.class);
    }

    public boolean checkProductGroup(String productCode) {
        String sql = "SELECT azbj_pk_nb_general.group_product(?) FROM dual";
        return jdbcTemplate.queryForObject(sql, new Object[]{productCode}, Boolean.class);
    }

    public String querySourceField(String applicationNumber) {
        String sql = "SELECT source FROM AZBJ_NACH_REGISTRATION_DET WHERE appln_no = TO_CHAR(?)";
        return jdbcTemplate.queryForObject(sql, new Object[]{applicationNumber}, String.class);
    }

    public boolean checkAreaExistence(String state, String district, String pincode, String area) {
        String sql = "SELECT DISTINCT Area FROM azbj_state_district_pincode WHERE UPPER(STATE) = UPPER(?) AND UPPER(DISTRICT) = UPPER(?) AND pincode = NVL(?, pincode) AND UPPER(area) = UPPER(?)";
        return jdbcTemplate.queryForObject(sql, new Object[]{state, district, pincode, area}, Boolean.class);
    }

    public boolean checkPlaceExistence(String addressLine3) {
        String sql = "SELECT UNIQUE place FROM azbj_urban_rural_data WHERE UPPER(place) = UPPER(?)";
        return jdbcTemplate.queryForObject(sql, new Object[]{addressLine3}, Boolean.class);
    }

    public boolean getPennyDropStatus(String applicationNumber) {
        String sql = "SELECT penny_drop_status FROM azbj_penny_drop WHERE appln_no = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{applicationNumber}, Boolean.class);
    }

    public String findPreviousItem(String currentItem, String currentBlock, String proposalType) {
        String sql = "SELECT key_prev_item FROM azbj_new_bbu_field_map_gr WHERE LIST_NAME = ? AND LIST_BLOCK_NAME = ? AND proposal_type = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{currentItem, currentBlock, proposalType}, String.class);
    }

    public String fetchPreviousItem(String currentItem, String currentBlock) {
        String sql = "SELECT key_prev_item FROM azbj_new_bbu_field_map_gr WHERE LIST_NAME = ? AND LIST_BLOCK_NAME = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{currentItem, currentBlock}, String.class);
    }

    public int fetchStripNumber(String currentBlock, String currentItem, String proposalType) {
        String sql = "SELECT MAX(strip_no) FROM azbj_strip_field_mapping a WHERE block_name = ? AND field_name = ? AND proposal_type = ? AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b WHERE a.proposal_type = b.proposal_type AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0)";
        return jdbcTemplate.queryForObject(sql, new Object[]{currentBlock, currentItem, proposalType}, Integer.class);
    }

    public int checkTransactionCount(String permReceiptNo) {
        String sql = "SELECT count(1) FROM azbj_batch_items a, azbj_cashier_coll b WHERE a.cashier_batch_id = b.cashier_batch_id AND a.collection_no = b.collection_no AND a.transaction_type IN ('FRP', 'APR') AND NVL(a.PRINT, 'X') <> 'C' AND (a.perm_receipt_no = ? OR a.frp_receipt_no = ?) AND pay_mode IN ('CHQ', 'BCHQ', 'WCHQ')";
        return jdbcTemplate.queryForObject(sql, new Object[]{permReceiptNo, permReceiptNo}, Integer.class);
    }
}