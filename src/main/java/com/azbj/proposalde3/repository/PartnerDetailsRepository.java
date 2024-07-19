package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.azbj.proposalde3.model.PartnerDetails;

@Repository
public interface PartnerDetailsRepository extends JpaRepository<PartnerDetails, Long> {

    @Modifying
    @Transactional
    @Query("DELETE FROM azbj_cp_merging_reason WHERE application_no = :applicationNo AND PARTNER_TYPE = :partnerType")
    int deleteRecords(@Param("applicationNo") String applicationNo, @Param("partnerType") String partnerType);

    @Modifying
    @Transactional
    @Query("MERGE INTO PartnerDetails p USING (SELECT :partners AS partners) s ON (p.id = s.id) WHEN MATCHED THEN UPDATE SET p.details = s.details WHEN NOT MATCHED THEN INSERT (id, details) VALUES (s.id, s.details)")
    int mergePartners(@Param("partners") List<PartnerDetails> partners);
}
