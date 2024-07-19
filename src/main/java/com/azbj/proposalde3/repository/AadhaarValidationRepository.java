package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.AadhaarValidation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AadhaarValidationRepository extends JpaRepository<AadhaarValidation, Long> {
    AadhaarValidation findByAadhaar(String aadhaarNumber);
}
