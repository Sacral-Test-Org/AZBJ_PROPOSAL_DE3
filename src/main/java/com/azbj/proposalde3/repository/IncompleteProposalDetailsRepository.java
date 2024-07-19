package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.IncompleteProposalDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncompleteProposalDetailsRepository extends JpaRepository<IncompleteProposalDetails, String> {

    // Method to delete a record by ID
    void deleteById(String recordId);

    // Method to save incomplete proposal details
    <S extends IncompleteProposalDetails> S save(S entity);
}
