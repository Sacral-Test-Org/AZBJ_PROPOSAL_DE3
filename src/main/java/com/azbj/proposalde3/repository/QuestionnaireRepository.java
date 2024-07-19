package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionnaireRepository extends JpaRepository<Questionnaire, Long> {

    @Query("SELECT q FROM Questionnaire q")
    List<Questionnaire> findAll();

    @Query("SELECT COUNT(1) FROM azbj_nbtab_activity_dtls WHERE application_no = :applicationNo AND ROWNUM = 1 AND module_flag = 'INSTAB'")
    int countOnlineActivities(@Param("applicationNo") String applicationNo);

    @Query("SELECT proposal_type, number_of_pages FROM azbj_proposals WHERE application_number = :applicationNumber")
    Object[] findProposalTypeAndPages(@Param("applicationNumber") String applicationNumber);

    @Query("SELECT image_path FROM azbj_images WHERE question_id = :questionId AND sub_question_id = :subQuestionId")
    List<String> findImages(@Param("questionId") int questionId, @Param("subQuestionId") int subQuestionId);

    @Query("SELECT q FROM Questionnaire q WHERE q.correctValue = :correctValue")
    List<Questionnaire> findByCorrectValue(@Param("correctValue") String correctValue);

    @Query("UPDATE Questionnaire q SET q.correctValue = :correctValue WHERE q.id = :id")
    void updateCorrectValue(@Param("correctValue") String correctValue, @Param("id") Long id);

    @Query("SELECT cont_id FROM azbj_batch_items WHERE application_no = :applicationNumber AND transaction_type = :transactionType AND rownum = 1")
    String fetchContractID(@Param("applicationNumber") String applicationNumber, @Param("transactionType") String transactionType);

    @Query("DELETE FROM azbj_fcf_questionnaire WHERE appln_no = :applicationNo AND de_flag = :proposalStatus AND question_id = 85 AND sub_question IN (52, 53, 54, 55, 56)")
    void deleteByCriteria(@Param("applicationNo") String applicationNo, @Param("proposalStatus") String proposalStatus);

    @Query("INSERT INTO azbj_fcf_questionnaire (contract_id, partition_no, question_id, sub_question, version, part_id, answer, description, partner_no, question_no, appln_no, member_no, de_flag) VALUES (NULL, NULL, :questionId, :subQuestion, NULL, NULL, :correctValue, :ansDesc, :memberNo, :formQuestionNo, :applicationNo, :memberNo, :proposalStatus)")
    void saveAll(@Param("questionId") int questionId, @Param("subQuestion") int subQuestion, @Param("correctValue") String correctValue, @Param("ansDesc") String ansDesc, @Param("memberNo") int memberNo, @Param("formQuestionNo") int formQuestionNo, @Param("applicationNo") String applicationNo, @Param("proposalStatus") String proposalStatus);

    @Query("SELECT COUNT(ROWNUM) FROM azbj_system_constants WHERE sys_type = 'SCB' AND sys_code = 'SCB_PAYMODE' AND :fscCode LIKE char_value || '%' AND end_date IS NULL")
    int checkSystemConstants(@Param("fscCode") String fscCode);

    @Query("SELECT COUNT(ROWNUM) FROM azbj_application_bypass_det WHERE application_no = :applicationNo AND bypass_flag = 'Y'")
    int checkApplicationBypassDetails(@Param("applicationNo") String applicationNo);

    @Query("SELECT COUNT(ROWNUM) FROM azbj_phub_scrutiny_prop WHERE application_no = :applicationNo AND UPPER(bank_refcode_bpc) LIKE '%SCBCC%'")
    int checkCardCases(@Param("applicationNo") String applicationNo);

    @Query("SELECT q FROM azbj_bbu_questions q WHERE q.frequency = :frequency")
    List<Questionnaire> findQuestions(@Param("frequency") String frequency);
}
