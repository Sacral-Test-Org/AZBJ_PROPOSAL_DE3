package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyDetailsImageRepository extends JpaRepository<FamilyDetailsImage, Long> {

    @Query("SELECT image FROM FamilyDetailsImage WHERE proposalType = :proposalType AND currentItem = :currentItem")
    byte[] findImage(@Param("proposalType") String proposalType, @Param("currentItem") String currentItem);
}
