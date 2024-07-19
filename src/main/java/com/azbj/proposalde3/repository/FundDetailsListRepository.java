package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.FundDetailsList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FundDetailsListRepository extends JpaRepository<FundDetailsList, Long> {

    @Query("SELECT a.fund_short_name AS FUND_ID, a.fund_full_name " +
            "FROM AZBJ_TFV_FUND_DEFINITION a, azbj_cover_funds b " +
            "WHERE a.fund_short_name = b.fund_name " +
            "AND b.product_id = :productCode " +
            "AND :dateRange >= NVL(start_date, '01-apr-2005') " +
            "AND :dateRange <= NVL(end_date, '01-jan-3000')")
    List<FundDetailsList> findAvailableFunds(@Param("productCode") String productCode, @Param("dateRange") String dateRange);

    @Query("SELECT MAX(strip_no) " +
            "FROM azbj_strip_field_mapping a " +
            "WHERE block_name = :currentBlock " +
            "AND field_name = :currentItem " +
            "AND proposal_type = PK_VARS.v_proposal_type " +
            "AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b " +
            "WHERE a.proposal_type = b.proposal_type " +
            "AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0)")
    Integer findImageData(@Param("currentBlock") String currentBlock, @Param("currentItem") String currentItem);
}
