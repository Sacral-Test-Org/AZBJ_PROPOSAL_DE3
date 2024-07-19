package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.InsuranceAmount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InsuranceAmountRepository extends JpaRepository<InsuranceAmount, Long> {

    @Query("SELECT MAX(a.stripNo) FROM AzbjStripFieldMapping a WHERE a.blockName = :blockName AND a.fieldName = :fieldName AND a.proposalType = :proposalType AND EXISTS (SELECT 1 FROM AzbjProposalStripes b WHERE a.proposalType = b.proposalType AND INSTR(b.stripeString, '~' || a.stripNo || '~') > 0)")
    Integer getStripNumber(@Param("blockName") String blockName, @Param("fieldName") String fieldName, @Param("proposalType") String proposalType);

    @Query("SELECT b.fileName FROM AzbjProposalStripes b WHERE b.stripNo = :stripNumber AND b.proposalType = :proposalType")
    String getFileName(@Param("stripNumber") Integer stripNumber, @Param("proposalType") String proposalType);
}
