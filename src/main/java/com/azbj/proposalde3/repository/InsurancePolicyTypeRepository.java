package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.InsurancePolicyType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InsurancePolicyTypeRepository extends JpaRepository<InsurancePolicyType, Long> {

    @Query("SELECT fieldData FROM azbj_strip_field_mapping a WHERE a.block_name = :blockName AND a.field_name = :fieldName AND a.proposal_type = :proposalType AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b WHERE a.proposal_type = b.proposal_type AND INSTR(b.stripe_string, '~' || a.strip_no || '~') > 0)")
    String findFieldData(@Param("blockName") String blockName, @Param("fieldName") String fieldName, @Param("proposalType") String proposalType);
}
