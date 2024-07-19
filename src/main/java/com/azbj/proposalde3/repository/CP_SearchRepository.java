package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.CP_Search;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CP_SearchRepository extends JpaRepository<CP_Search, Long> {

    @Query("SELECT c FROM CP_Search c WHERE (:firstName IS NULL OR c.firstName = :firstName) AND (:lastName IS NULL OR c.lastName = :lastName) AND (:dateOfBirth IS NULL OR c.dateOfBirth = :dateOfBirth) AND (:gender IS NULL OR c.gender = :gender) AND (:fatherName IS NULL OR c.fatherName = :fatherName) AND (:spouseName IS NULL OR c.spouseName = :spouseName)")
    List<CP_Search> searchCustomerProfiles(@Param("firstName") String firstName, @Param("lastName") String lastName, @Param("dateOfBirth") String dateOfBirth, @Param("gender") String gender, @Param("fatherName") String fatherName, @Param("spouseName") String spouseName);

    @Query("SELECT c FROM CP_Search c WHERE c.partnerId = :partnerId")
    CP_Search findByPartnerId(@Param("partnerId") Long partnerId);

    @Query("UPDATE CP_Search c SET c.signatureCheck = 'NA', c.ageProofCheck = 'NA', c.addressProofCheck = 'NA' WHERE c.partnerId = :partnerId")
    void setDocumentChecksToNA(@Param("partnerId") Long partnerId);

    @Query("UPDATE CP_Search c SET c.additionalProofCheck = :status WHERE c.partnerId = :partnerId")
    void updateAdditionalProofCheckStatus(@Param("partnerId") Long partnerId, @Param("status") String status);

    @Query("DELETE FROM CP_Search c WHERE c.applicationNumber = :applicationNumber AND c.partnerType = :partnerType")
    void deleteMergeRequests(@Param("applicationNumber") Long applicationNumber, @Param("partnerType") String partnerType);

    @Query("DELETE FROM CP_Search c WHERE c.applicationNumber = :applicationNumber AND c.partnerType = :partnerType")
    void deleteMergingReasons(@Param("applicationNumber") Long applicationNumber, @Param("partnerType") String partnerType);

    @Query("UPDATE CP_Search c SET c.controlField = :controlField WHERE c.applicationNumber = :applicationNumber AND c.partnerType = :partnerType")
    void updateControlFields(@Param("applicationNumber") Long applicationNumber, @Param("partnerType") String partnerType, @Param("controlField") String controlField);

    @Query("INSERT INTO CP_Search (cpData) VALUES (:cpData)")
    void saveAndApply(@Param("cpData") CP_Search cpData);
}
