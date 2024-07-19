package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PreviousPolicyDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreviousPolicyDetailsRepository extends JpaRepository<PreviousPolicyDetails, String> {

    void deleteById(String policyId);

    List<PreviousPolicyDetails> findAll();

    PreviousPolicyDetails save(PreviousPolicyDetails previousPolicyDetails);

    @Query("SELECT image FROM PreviousPolicyDetails WHERE block = :block AND item = :item AND proposalType = :proposalType")
    String findImage(@Param("block") String block, @Param("item") String item, @Param("proposalType") String proposalType);

    @Query("SELECT p FROM PreviousPolicyDetails p WHERE p.block = :currentBlock AND p.item = :currentItem")
    List<PreviousPolicyDetails> findByBlockAndItem(@Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem);

    @Modifying
    @Query("UPDATE PreviousPolicyDetails p SET p.status = :status WHERE p.id = :id")
    void updateStatus(@Param("status") String status, @Param("id") String id);
}
