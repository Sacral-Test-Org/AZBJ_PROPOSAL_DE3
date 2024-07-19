package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.ValidationResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ValidationResultRepository extends JpaRepository<ValidationResult, Long> {
    ValidationResult save(ValidationResult validationResult);
}