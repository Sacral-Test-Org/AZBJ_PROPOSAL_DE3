package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.FundDetailsValidation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FundDetailsValidationRepository extends JpaRepository<FundDetailsValidation, Long> {

    List<FundDetailsValidation> findAll();

    FundDetailsValidation findByFundIdAndFundName(String fundId, String fundName);

    FundDetailsValidation findFundById(String fundId);

    FundDetailsValidation findByCorrectValue(String correctValue);

    FundDetailsValidation findByCorrectFieldValue(String correctFieldValue);

    FundDetailsValidation save(FundDetailsValidation fundDetails);
}
