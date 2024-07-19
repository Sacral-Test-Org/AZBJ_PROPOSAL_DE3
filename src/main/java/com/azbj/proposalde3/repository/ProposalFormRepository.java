package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProposalFormRepository extends JpaRepository<ProposalForm, Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM azbj_cp_merge WHERE REQUEST_ID IN (SELECT request_id FROM azbj_cp_merge_request WHERE APPLN_NO = TO_NUMBER(:applicationNumber))")
    int deleteFromAzbjCpMerge(@Param("applicationNumber") String applicationNumber);

    @Modifying
    @Transactional
    @Query("DELETE FROM azbj_cp_merge_request WHERE APPLN_NO = TO_NUMBER(:applicationNumber)")
    int deleteFromAzbjCpMergeRequest(@Param("applicationNumber") String applicationNumber);

    @Modifying
    @Transactional
    @Query("UPDATE azbj_phub_tracker SET locking_flag = 'N', proposal_modif_date = SYSDATE, proposal_modif_user = USER WHERE application_no = NVL(TO_CHAR(:applicationNumber), :applicationNumber)")
    int updateAzbjPhubTracker(@Param("applicationNumber") String applicationNumber);

    @Query("SELECT image_path FROM image_table WHERE form_name = :formName")
    String getImagePath(@Param("formName") String formName);

    @Query("SELECT p FROM ProposalForm p")
    List<ProposalForm> findAll();

    @Modifying
    @Transactional
    @Query("INSERT INTO ProposalForm (proposalData) VALUES (:proposalData)")
    int save(@Param("proposalData") ProposalForm proposalData);

    @Query("SELECT p FROM ProposalForm p WHERE p.applicationNumber = :applicationNumber")
    ProposalForm findByApplicationNumber(@Param("applicationNumber") String applicationNumber);

    @Query("SELECT screen_value FROM inf_dnm_poplists WHERE poplist_code = 'PROPOSAL_FORM_FIELDS' AND LANGUAGE = 'US' ORDER BY SCREEN_VALUE ASC")
    List<String> getProposalFormFields();

    @Modifying
    @Transactional
    @Query("DELETE FROM ProposalForm WHERE id = :proposalRecordId")
    int deleteById(@Param("proposalRecordId") Long proposalRecordId);

    @Modifying
    @Transactional
    @Query("UPDATE ProposalForm SET recheck = true WHERE id = :proposalRecordId")
    int recheckById(@Param("proposalRecordId") Long proposalRecordId);

    @Query("SELECT a.master_policy_no FROM azbj_proposal_appln_det a WHERE a.appln_no = TO_NUMBER(:applicationNumber) AND de_flag = 'D2'")
    String findMasterPolicyNumber(@Param("applicationNumber") String applicationNumber);

    @Query("SELECT COUNT(*) FROM azbj_system_constants WHERE sys_type = 'GROUP' AND sys_code = 'DISABLE_LOAN_NUMBER' AND sys_desc = '|' || NVL(:masterPolicyNumber, '') || '|")
    int countSystemConstants(@Param("masterPolicyNumber") String masterPolicyNumber);

    @Query("SELECT fund_short_name AS FUND_ID, fund_full_name FROM AZBJ_TFV_FUND_DEFINITION a, azbj_cover_funds b WHERE a.fund_short_name = b.fund_name AND b.product_id = :productCode AND :saDateRecd >= NVL(start_date, '01-apr-2005') AND :saDateRecd <= NVL(end_date, '01-jan-3000')")
    List<FundDetails> getFundDetails(@Param("productCode") String productCode, @Param("saDateRecd") String saDateRecd);

    @Query("SELECT proposal_type FROM azbj_phub_scrutiny_prop WHERE application_no = :applicationNo")
    String findProposalTypeByApplicationNo(@Param("applicationNo") String applicationNo);

    @Query("SELECT MAX(strip_no) FROM azbj_strip_field_mapping a WHERE block_name = :blockName AND field_name = :fieldName AND proposal_type = :proposalType AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b WHERE a.proposal_type = b.proposal_type AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0)")
    int fetchMaxStripNumber(@Param("blockName") String blockName, @Param("fieldName") String fieldName, @Param("proposalType") String proposalType);

    @Query("SELECT file_name FROM azbj_strip_field_mapping WHERE strip_no = :stripNumber AND proposal_type = :proposalType")
    String getFileName(@Param("stripNumber") int stripNumber, @Param("proposalType") String proposalType);

    @Query("SELECT image_data FROM image_table WHERE current_block = :currentBlock AND current_item = :currentItem AND proposal_type = :proposalType")
    byte[] fetchImageData(@Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem, @Param("proposalType") String proposalType);

    @Modifying
    @Transactional
    @Query("INSERT INTO DE2Records (param) VALUES (:param)")
    int populateDE2Records(@Param("param") String param);

    @Query("SELECT r FROM RiderDetails r")
    List<RiderDetails> findAllRiderDetails();

    @Modifying
    @Transactional
    @Query("INSERT INTO RiderDetails (riderDetail) VALUES (:riderDetail)")
    int saveRiderDetail(@Param("riderDetail") RiderDetails riderDetail);

    @Modifying
    @Transactional
    @Query("DELETE FROM RiderDetails WHERE id = :riderDetailId")
    int deleteRiderDetailById(@Param("riderDetailId") Long riderDetailId);

    @Modifying
    @Transactional
    @Query("UPDATE RiderDetails SET auto_fill = true WHERE id = :riderDetailId")
    int populateRiderDetail(@Param("riderDetailId") Long riderDetailId);

}