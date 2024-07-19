package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.AdditionalProofCheck;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface AdditionalProofCheckRepository extends CrudRepository<AdditionalProofCheck, Long> {

    @Transactional
    @Modifying
    @Query("UPDATE AdditionalProofCheck a SET a.status = :status WHERE a.partnerId = :partnerId")
    int updateAdditionalProofCheckStatus(@Param("partnerId") Long partnerId, @Param("status") String status);
}
