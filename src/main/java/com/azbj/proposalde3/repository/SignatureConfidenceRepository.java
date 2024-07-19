package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.SignatureConfidence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SignatureConfidenceRepository extends JpaRepository<SignatureConfidence, Long> {

    @Query("SELECT sc FROM SignatureConfidence sc WHERE sc.applicationNumber = :applicationNumber")
    List<SignatureConfidence> findByApplicationNumber(@Param("applicationNumber") String applicationNumber);
}
