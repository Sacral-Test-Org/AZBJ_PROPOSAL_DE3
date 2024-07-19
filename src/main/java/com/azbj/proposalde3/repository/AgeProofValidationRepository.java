package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.azbj.proposalde3.model.AgeProofValidation;

@Repository
public interface AgeProofValidationRepository extends JpaRepository<AgeProofValidation, Long> {

    // Add methods for age proof validation data interactions if necessary
    // Example method to find by partner ID
    AgeProofValidation findByPartnerId(Long partnerId);

}