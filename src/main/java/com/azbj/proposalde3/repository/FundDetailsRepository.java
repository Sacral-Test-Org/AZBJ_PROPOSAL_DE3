package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.FundDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FundDetailsRepository extends JpaRepository<FundDetails, String> {

    // Fetch all fund details
    List<FundDetails> findAll();

    // Save fund details
    <S extends FundDetails> S save(S entity);

    // Delete fund by ID
    void deleteById(String fundId);

    // Fetch available funds based on product code and date received
    List<FundDetails> findAvailableFunds(String productCode, String saDateRecd);

    // Fetch fund details by fund ID
    FundDetails findFundById(String fundId);

    // Fetch fund details for the LOV
    List<FundDetails> findFunds(String productCode, String coverCode);

    // Fetch image data based on current block and item
    Object getImageData(String currentBlock, String currentItem, String proposalType);

    // Delete fund records based on validation flag
    void deleteByValidationFlag();

    // Reset fund details
    void resetFundDetails();

    // Navigate to the next item
    void navigateToNextItem();
}