package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.CP_SearchPH;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CP_SearchPHRepository extends JpaRepository<CP_SearchPH, Long> {

    @Query("SELECT c FROM CP_SearchPH c WHERE c.dateOfBirth = :dateOfBirth AND c.gender = :gender AND (c.firstName = :firstName OR c.lastName = :lastName)")
    List<CP_SearchPH> findPartners(@Param("dateOfBirth") String dateOfBirth, @Param("gender") String gender, @Param("firstName") String firstName, @Param("lastName") String lastName);

    @Query("DELETE FROM CP_SearchPH c WHERE c.applicationNo = :applicationNo AND c.partnerType = :partnerType")
    void clearFields(@Param("applicationNo") Long applicationNo, @Param("partnerType") String partnerType);

    @Query("DELETE FROM CP_SearchPH c WHERE c.applicationNo = :applicationNo AND c.partnerType = :partnerType")
    void resetForm(@Param("applicationNo") Long applicationNo, @Param("partnerType") String partnerType);

    @Query("SELECT c FROM CP_SearchPH c WHERE c.globalViewImageCount = 0 AND c.partnerId IS NOT NULL")
    List<CP_SearchPH> validateAgeProofCheck();
}
