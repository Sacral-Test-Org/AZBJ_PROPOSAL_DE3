package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PolicyProposalImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyProposalImageRepository extends JpaRepository<PolicyProposalImage, Long> {

    @Query("SELECT ppi FROM PolicyProposalImage ppi WHERE ppi.stripNumber = :stripNumber")
    PolicyProposalImage fetchImageData(@Param("stripNumber") int stripNumber);
}
