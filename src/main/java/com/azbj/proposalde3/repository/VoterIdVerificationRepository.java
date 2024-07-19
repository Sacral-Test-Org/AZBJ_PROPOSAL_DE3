package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VoterIdVerificationRepository extends JpaRepository<InsuredPerson, Long> {

    @Query("SELECT ip.ageProof, ph.ageProof FROM InsuredPerson ip, PolicyHolder ph WHERE ip.id = :insuredPersonId AND ph.id = :policyHolderId")
    List<Object[]> fetchAgeProof(Long insuredPersonId, Long policyHolderId);
}
