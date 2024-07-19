package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RiderCover1SARepository extends JpaRepository<RiderCover1SA, Long> {

    @Query("SELECT MAX(a.strip_no) FROM azbj_strip_field_mapping a WHERE a.block_name = :blockName AND a.field_name = :fieldName AND a.proposal_type = :proposalType AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b WHERE a.proposal_type = b.proposal_type AND INSTR(b.stripe_string, '~' || a.strip_no || '~') > 0)")
    Integer findMaxStripNo(@Param("blockName") String blockName, @Param("fieldName") String fieldName, @Param("proposalType") String proposalType);
}
