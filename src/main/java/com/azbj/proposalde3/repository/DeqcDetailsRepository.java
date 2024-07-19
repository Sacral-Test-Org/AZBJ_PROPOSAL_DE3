package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.DeqcDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DeqcDetailsRepository extends JpaRepository<DeqcDetails, Long> {

    @Query("SELECT COUNT(1) > 0 FROM DeqcDetails d WHERE d.applicationNo = :applicationNo AND d.topIndicator = 'Y'")
    boolean checkApplicantDetailsExist(@Param("applicationNo") String applicationNo);

    default boolean insertApplicantDetails(DeqcDetails applicantDetails) {
        try {
            save(applicantDetails);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
