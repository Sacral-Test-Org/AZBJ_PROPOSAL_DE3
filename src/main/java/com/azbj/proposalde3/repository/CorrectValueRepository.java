package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.CorrectValue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CorrectValueRepository extends JpaRepository<CorrectValue, Long> {

    CorrectValue save(CorrectValue correctValue);

    CorrectValue findById(Long id);

    void deleteById(Long id);

    @Query("SELECT reference_code code, DECODE(c.partner_type, 'P', c.first_name || ' ' || c.middle_name || ' ' || c.surname, c.institution_name) name FROM dmt_agents a, azbj_agents_ext b, cp_partners c WHERE a.int_id = b.int_id AND a.cust_part_unique_code = c.partner_ref AND recruited_by = :fscCode UNION ALL SELECT 'NOSUBCODE', 'NOSUBCODE' FROM dual")
    List<Object[]> findAgents(@Param("fscCode") String fscCode);

    @Query("SELECT branch_code, branch_name FROM azbj_syn_bank_branches WHERE br_type = (CASE WHEN :fscCode LIKE '522%' THEN 'B' ELSE SUBSTR(:fscCode, 1, 3) END)")
    List<Object[]> getLOVData(@Param("fscCode") String fscCode);

    @Query("SELECT DISTINCT pincode, state, district FROM azbj_state_district_pincode")
    List<Object[]> findDistinctPinCodes();

    @Query("SELECT state_name, scode FROM azbj_states ORDER BY state_name")
    List<Object[]> findAllStates();

    @Query("SELECT DISTINCT Area, PINCODE FROM azbj_state_district_pincode WHERE UPPER(STATE) = UPPER(:state) AND UPPER(DISTRICT) = UPPER(:district) AND PINCODE = NVL(:postcode, PINCODE) ORDER BY PINCODE, Area")
    List<Object[]> findAddressDetails(@Param("state") String state, @Param("district") String district, @Param("postcode") String postcode);

    @Query("SELECT LANGUAGE_NAME, LANGUAGE_ID FROM azbj_comm_language ORDER BY language_id")
    List<Object[]> findAllLanguages();

    @Query("SELECT 'The Area Free Text for ' || area_free_text || ' Status is ' || DECODE(request_status, 'A', 'Approved', 'P', 'Pending', 'R', 'Rejected') FROM azbj_area_pincode_request WHERE application_no = :applicationNo AND address_type = 'IP' AND area_free_text IS NOT NULL AND REQUEST_DATE = (SELECT MAX(REQUEST_DATE) FROM azbj_area_pincode_request WHERE application_no = :applicationNo AND address_type = 'IP' AND area_free_text IS NOT NULL)")
    String getRequestStatus(@Param("applicationNo") String applicationNo);

    @Query("SELECT UNIQUE state, district, place FROM azbj_urban_rural_data WHERE UPPER(district) = UPPER(:district) UNION SELECT null, null, 'NOT FOUND' FROM dual ORDER BY place")
    List<Object[]> findUniquePlacesByDistrict(@Param("district") String district);

    @Query("SELECT DISTINCT Area, PINCODE FROM azbj_state_district_pincode WHERE UPPER(STATE) = UPPER(:state) AND UPPER(DISTRICT) = UPPER(:district) AND PINCODE = NVL(:postcode, PINCODE) ORDER BY PINCODE, Area")
    List<Object[]> findValidAreaValues(@Param("state") String state, @Param("district") String district, @Param("postcode") String postcode);

    @Query("SELECT 'The Area Free Text for ' || area_free_text || ' Status is ' || DECODE(request_status, 'A', 'Approved', 'P', 'Pending', 'R', 'Rejected') FROM azbj_area_pincode_request WHERE application_no = :applicationNo AND address_type = :addressType AND area_free_text IS NOT NULL AND REQUEST_DATE = (SELECT MAX(REQUEST_DATE) FROM azbj_area_pincode_request WHERE application_no = :applicationNo AND address_type = :addressType AND area_free_text IS NOT NULL)")
    String findLatestRequestStatus(@Param("applicationNo") String applicationNo, @Param("addressType") String addressType);

    @Query("SELECT a.occ_code, a.occ_desc FROM azbj_occupation a, azbj_ind_occ_link b WHERE a.occ_code = b.occ_code AND b.ind_code = TO_NUMBER(:industryCode) AND end_date IS NULL ORDER BY a.occ_desc")
    List<Object[]> findProfessionsByIndustryCode(@Param("industryCode") String industryCode);

    @Query("SELECT ind_code, ind_desc FROM azbj_industry WHERE end_date IS NULL ORDER BY 2")
    List<Object[]> getIndustryValues();

    @Query("SELECT COUNT(1) FROM azbj_strip_questionnaire_det WHERE appln_no = :appln_no AND question_id = 85 AND sub_question IN (52, 53, 54, 55, 56)")
    int countRelevantRecords(@Param("appln_no") String appln_no);

    @Query("SELECT online_rate, staff_rate, hpmu_rate, income_factor, auto_pay_rate, loyality_factor, wmm_rate, awg_total_perc FROM AZBJ_ANNUITY_PROD_DET WHERE appln_no = :applicationNo AND top_indicator = 'Y'")
    List<Object[]> findRateDetails(@Param("applicationNo") String applicationNo);

    @Query("SELECT BANK_NAME, BANK_BRANCH, BANK_MICR FROM azbj_bank_ifsc_detail WHERE BANK_IFSC = :ifscCode")
    List<Object[]> findByIfscCode(@Param("ifscCode") String ifscCode);

    @Query("SELECT COUNT(*) FROM azbj_package_master WHERE product_id = :productId")
    int findProductById(@Param("productId") String productId);

    @Query("SELECT SIGNATURENAME, TotalConf FROM balic.ng_asv_results WHERE APPLICATIONNO = :applicationNumber")
    List<Object[]> findByApplicationNumber(@Param("applicationNumber") String applicationNumber);

    @Query("SELECT key_prev_item FROM azbj_new_bbu_field_map_gr WHERE LIST_NAME = :currentItem AND LIST_BLOCK_NAME = :currentBlock AND proposal_type = :proposalType")
    String fetchPreviousItem(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock, @Param("proposalType") String proposalType);

    @Query("SELECT MAX(strip_no) FROM azbj_strip_field_mapping a WHERE block_name = :currentBlock AND field_name = :currentItem AND proposal_type = :proposalType AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b WHERE a.proposal_type = b.proposal_type AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0)")
    int loadFieldData(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock, @Param("proposalType") String proposalType);

    @Query("SELECT channel FROM azbj_batch_items WHERE application_no = :applicationNo AND transaction_type = 'FRP' AND NVL(PRINT, 'X') <> 'C'")
    String findChannelInBatchItems(@Param("applicationNo") String applicationNo);

    @Query("SELECT channel FROM azbj_phub_scrutiny_prop_extn WHERE application_no = :applicationNo")
    String findChannelInScrutinyPropExtn(@Param("applicationNo") String applicationNo);

    @Query("SELECT COUNT(*) FROM azbj_v_agents WHERE reference_code = UPPER(:subIdCode) AND agent_status NOT IN ('T', 'TE')")
    int validateSubIdCode(@Param("subIdCode") String subIdCode);

    @Query("SELECT full_name FROM azbj_v_agents WHERE reference_code = UPPER(:subIdCode) AND agent_status NOT IN ('T', 'TE')")
    String getAgentFullName(@Param("subIdCode") String subIdCode);

    @Query("SELECT channel_code FROM azbj_v_agents WHERE reference_code = UPPER(:fscCode)")
    String getChannelCode(@Param("fscCode") String fscCode);

    @Query("SELECT ROWNUM AS rn, UPPER(vertical_id) display_val, UPPER(vertical_id) internal_val FROM azbj_sub_id_mapping WHERE channel_code = :channelCode AND sub_id_code = SUBSTR(UPPER(:subIdCode), 3, 2)")
    List<Object[]> getChannelList(@Param("channelCode") String channelCode, @Param("subIdCode") String subIdCode);

    @Query("SELECT sub_id FROM azbj_batch_items WHERE application_no = :applicationNo AND transaction_type = 'FRP' AND NVL(PRINT, 'X') <> 'C'")
    String getSubIdFromBatchItems(@Param("applicationNo") String applicationNo);

    @Query("SELECT sub_id_code FROM azbj_phub_scrutiny_prop_extn WHERE application_no = :applicationNo")
    String getSubIdFromScrutinyPropExtn(@Param("applicationNo") String applicationNo);

    @Query("SELECT online_rate, staff_rate, hpmu_rate, income_factor, auto_pay_rate, loyality_factor, wmm_rate, awg_total_perc FROM AZBJ_ANNUITY_PROD_DET WHERE appln_no = :applicationNo AND top_indicator = 'Y'")
    List<Object[]> findRateDetails(@Param("applicationNo") String applicationNo);
}
