package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.FamilyDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FamilyDetailsRepository extends JpaRepository<FamilyDetails, Long> {

    // Fetch all family details
    List<FamilyDetails> findAll();

    // Save or update family details
    FamilyDetails save(FamilyDetails familyDetails);

    // Delete family member by ID
    void deleteById(Long familyMemberId);

    // Fetch image file name based on current item, block context, and proposal type
    @Query("SELECT image_file_name FROM azbj_strip_field_mapping a WHERE block_name = :currentBlock AND field_name = :currentItem AND proposal_type = :proposalType AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b WHERE a.proposal_type = b.proposal_type AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0)")
    String findImageFileName(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock, @Param("proposalType") String proposalType);

    // Fetch age data
    @Query("SELECT age FROM family_details WHERE id = :id")
    Integer findAge(@Param("id") Long id);

    // Save age data
    @Query("UPDATE family_details SET age = :age WHERE id = :id")
    void saveAge(@Param("age") Integer age, @Param("id") Long id);

    // Fetch pre-loaded data for health status field
    @Query("SELECT health_status FROM family_details WHERE id = :id")
    String findPreloadedData(@Param("id") Long id);

    // Find cause of death for a given member ID
    @Query("SELECT cause_of_death FROM family_details WHERE id = :memberId")
    String findCauseOfDeath(@Param("memberId") Long memberId);

    // Fetch family member details based on context
    @Query("SELECT * FROM family_details WHERE context = :context")
    List<FamilyDetails> fetchFamilyDetails(@Param("context") String context);

    // Fetch data for the 'Member Number' field
    @Query("SELECT member_number FROM family_details WHERE id = :id")
    String getMemberNumberData(@Param("id") Long id);

    // Fetch image file name based on current block and item
    @Query("SELECT image_file_name FROM azbj_strip_field_mapping WHERE block_name = :currentBlock AND field_name = :currentItem")
    String getImageFileName(@Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem);

    // Fetch previous item based on current item and block
    @Query("SELECT key_prev_item FROM azbj_new_bbu_field_map WHERE LIST_NAME = :currentItem AND LIST_BLOCK_NAME = :currentBlock")
    String findPreviousItem(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock);

    // Fetch image based on proposal type and number of pages
    @Query("SELECT image FROM images WHERE proposal_type = :proposalType AND number_of_pages = :numberOfPages")
    String findImage(@Param("proposalType") String proposalType, @Param("numberOfPages") Integer numberOfPages);

    // Fetch image data based on family member ID
    @Query("SELECT image_data FROM family_details WHERE id = :familyMemberId")
    String findImageByFamilyMemberId(@Param("familyMemberId") Long familyMemberId);

    // Fetch family details based on current item and block
    @Query("SELECT * FROM family_details WHERE current_item = :currentItem AND current_block = :currentBlock AND proposal_type = :proposalType")
    List<FamilyDetails> findFamilyDetails(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock, @Param("proposalType") String proposalType);

    // Fetch strip number based on current block and item
    @Query("SELECT MAX(strip_no) FROM azbj_strip_field_mapping WHERE block_name = :currentBlock AND field_name = :currentItem")
    Integer findStripNumber(@Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem);

    // Fetch image details based on strip number and proposal type
    @Query("SELECT image_details FROM images WHERE strip_number = :stripNumber AND proposal_type = :proposalType")
    String findImageDetails(@Param("stripNumber") Integer stripNumber, @Param("proposalType") String proposalType);

    // Fetch family member details based on current block and item
    @Query("SELECT * FROM family_details WHERE block_name = :currentBlock AND field_name = :currentItem")
    List<FamilyDetails> findFamilyMemberDetails(@Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem);

    // Add a new member
    @Query("INSERT INTO family_details (member_name, gender, dob, age, height, weight, bmi, age_proof, age_proof_id, relation, sum_assured, partner_id) VALUES (:memberName, :gender, :dob, :age, :height, :weight, :bmi, :ageProof, :ageProofId, :relation, :sumAssured, :partnerId)")
    void addMember(@Param("memberName") String memberName, @Param("gender") String gender, @Param("dob") String dob, @Param("age") Integer age, @Param("height") Integer height, @Param("weight") Integer weight, @Param("bmi") Double bmi, @Param("ageProof") String ageProof, @Param("ageProofId") String ageProofId, @Param("relation") String relation, @Param("sumAssured") Double sumAssured, @Param("partnerId") Long partnerId);

    // Delete a member by ID
    @Query("DELETE FROM family_details WHERE id = :memberId")
    void deleteMember(@Param("memberId") Long memberId);
}
