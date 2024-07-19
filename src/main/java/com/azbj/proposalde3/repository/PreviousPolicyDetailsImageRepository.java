package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PreviousPolicyDetailsImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreviousPolicyDetailsImageRepository extends JpaRepository<PreviousPolicyDetailsImage, Long> {

    PreviousPolicyDetailsImage findImage(String block, String item, String proposalType);

    PreviousPolicyDetailsImage findByBlockAndItem(String currentBlock, String currentItem);

    PreviousPolicyDetailsImage loadImage(Long imageId);
}
