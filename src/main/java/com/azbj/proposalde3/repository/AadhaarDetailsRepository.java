package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.AadhaarDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AadhaarDetailsRepository extends JpaRepository<AadhaarDetails, Long> {

    @Query("SELECT COUNT(1) > 0 FROM AadhaarDetails WHERE aadhaarNumber = :aadharNumber")
    boolean checkAadharCard(@Param("aadharNumber") String aadharNumber);

    @Query("SELECT a FROM AadhaarDetails a WHERE a.aadhaarNumber = :aadharNumber")
    Optional<AadhaarDetails> findByAadharNumber(@Param("aadharNumber") String aadharNumber);
}
