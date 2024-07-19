package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.FundDetailsImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FundDetailsImageRepository extends JpaRepository<FundDetailsImage, Long> {

    @Query("SELECT f FROM FundDetailsImage f WHERE f.blockName = :currentBlock AND f.fieldName = :currentItem AND f.proposalType = :proposalType")
    FundDetailsImage getImageData(@Param("currentBlock") String currentBlock, 
                                  @Param("currentItem") String currentItem, 
                                  @Param("proposalType") String proposalType);
}
