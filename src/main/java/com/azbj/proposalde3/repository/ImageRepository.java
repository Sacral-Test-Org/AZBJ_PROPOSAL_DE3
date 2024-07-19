package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

    @Query("SELECT i FROM Image i WHERE i.fileName = :imageFileName")
    Image findImageByFileName(@Param("imageFileName") String imageFileName);

    @Query("SELECT i.path FROM Image i WHERE i.formName = :formName")
    String fetchImagePath(@Param("formName") String formName);

    @Query("SELECT i FROM Image i WHERE i.id = :imageId")
    Image findImageData(@Param("imageId") Long imageId);

    @Query("SELECT i.fileName FROM Image i WHERE i.currentBlock = :currentBlock AND i.currentItem = :currentItem")
    String getImageFileName(@Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem);

    @Query("SELECT i FROM Image i WHERE i.policyType = :policyType")
    Image findImageByPolicyType(@Param("policyType") String policyType);

    @Query("SELECT i.path FROM Image i WHERE i.applicationNumber = :applicationNumber")
    List<String> findImagePathsByApplicationNumber(@Param("applicationNumber") String applicationNumber);

    @Query("SELECT i FROM Image i WHERE i.proposalType = :proposalType AND i.numberOfPages = :numberOfPages")
    Image findImage(@Param("proposalType") String proposalType, @Param("numberOfPages") int numberOfPages);

    @Query("SELECT i FROM Image i WHERE i.proposalType = :proposalType AND i.currentBlock = :currentBlock AND i.currentItem = :currentItem")
    Image findImage(@Param("proposalType") String proposalType, @Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem);

    @Query("SELECT i FROM Image i WHERE i.id = :id")
    Image findById(@Param("id") Long id);

    @Query("SELECT i FROM Image i WHERE i.context = :context")
    Image getImage(@Param("context") Object context);

    @Query("SELECT i FROM Image i WHERE i.imageId = :imageId")
    Image findImageById(@Param("imageId") Long imageId);

    @Query("SELECT i FROM Image i WHERE i.proposalType = :proposalType AND i.currentItem = :currentItem")
    Image findImage(@Param("proposalType") String proposalType, @Param("currentItem") String currentItem);

    @Query("SELECT i.path FROM Image i WHERE i.proposalNumber = :proposalNumber AND i.imageName = :imageName")
    String getImagePath(@Param("proposalNumber") String proposalNumber, @Param("imageName") String imageName);

    @Query("SELECT i FROM Image i WHERE i.imagePath = :imagePath")
    Image downloadImage(@Param("imagePath") String imagePath);

    @Query("SELECT i FROM Image i WHERE i.currentItem = :currentItem AND i.currentBlock = :currentBlock")
    Image findImage(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock);
}
