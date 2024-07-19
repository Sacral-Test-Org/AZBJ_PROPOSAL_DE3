package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.SSOFundDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface SSOFundDetailsRepository extends JpaRepository<SSOFundDetails, Long> {

    @Query(value = "SELECT fund_short_name AS FUND_ID, fund_full_name, apportionment " +
            "FROM AZBJ_TFV_FUND_DEFINITION a, azbj_cover_funds b " +
            "WHERE a.fund_short_name = b.fund_name " +
            "AND b.product_id = :productCode " +
            "AND :startDate >= NVL(start_date, '01-apr-2005') " +
            "AND :endDate <= NVL(end_date, '01-jan-3000')", nativeQuery = true)
    List<SSOFundDetails> findSSOFundDetails(@Param("productCode") String productCode, 
                                            @Param("startDate") String startDate, 
                                            @Param("endDate") String endDate);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM azbj_cover_funds WHERE fund_short_name IN :selectedFundIds", nativeQuery = true)
    void deleteSSOFundsByIds(@Param("selectedFundIds") List<String> selectedFundIds);

    @Modifying
    @Transactional
    @Query(value = "UPDATE azbj_cover_funds SET apportionment = :apportionmentValue WHERE fund_short_name = :fundId", nativeQuery = true)
    void updateApportionment(@Param("fundId") String fundId, 
                             @Param("apportionmentValue") double apportionmentValue);
}
