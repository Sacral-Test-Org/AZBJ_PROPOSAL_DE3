package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.FamilyMemberImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyMemberImageRepository extends JpaRepository<FamilyMemberImage, Long> {

    @Query("SELECT fmi FROM FamilyMemberImage fmi WHERE fmi.proposalType = :proposalType AND fmi.currentItem = :currentItem")
    FamilyMemberImage getImageData(@Param("proposalType") String proposalType, @Param("currentItem") String currentItem);

    @Query("SELECT fmi FROM FamilyMemberImage fmi WHERE fmi.currentItem = :currentItem AND fmi.currentBlock = :currentBlock")
    FamilyMemberImage findImageData(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock);

    @Query("SELECT fmi FROM FamilyMemberImage fmi WHERE fmi.familyMemberId = :familyMemberId")
    FamilyMemberImage findImageByFamilyMemberId(@Param("familyMemberId") Long familyMemberId);

    @Query("SELECT fmi FROM FamilyMemberImage fmi WHERE fmi.imageFileName = :imageFileName")
    FamilyMemberImage findImage(@Param("imageFileName") String imageFileName);
}
