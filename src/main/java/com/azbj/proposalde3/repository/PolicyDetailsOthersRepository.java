package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.azbj.proposalde3.model.PolicyDetailsOthers;

@Repository
public interface PolicyDetailsOthersRepository extends JpaRepository<PolicyDetailsOthers, Long> {

    @Query("SELECT COUNT(*) FROM GlobalViewImage WHERE window = 'IP' AND policyReference IS NOT NULL")
    int getGlobalViewImageCountForIP();

    @Query("SELECT COUNT(*) FROM GlobalViewImage WHERE window = 'PH' AND policyReference IS NOT NULL")
    int getGlobalViewImageCountForPH();

    @Query("SELECT insuredCheck FROM InsuredCheck WHERE window = 'PH'")
    int getInsuredCheckForPH();
}
