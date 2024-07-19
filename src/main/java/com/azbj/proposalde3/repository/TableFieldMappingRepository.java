package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.TableFieldMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TableFieldMappingRepository extends JpaRepository<TableFieldMapping, Long> {

    @Query("SELECT SYS_DESC FROM azbj_system_constants WHERE sys_type='QC' AND sys_code='QC_MANUAL_BBU'")
    List<String> findReasons();

    @Query("SELECT branch_code, branch_name FROM azbj_syn_bank_branches WHERE br_type = (CASE WHEN :fscCode LIKE '522%' THEN 'B' ELSE SUBSTR(:fscCode, 1, 3) END)")
    List<Object[]> findReferralNameLOV(@Param("fscCode") String fscCode);

    @Query("SELECT branch_code, branch_name FROM azbj_syn_bank_branches WHERE br_type LIKE '3A6%'")
    List<Object[]> getLOVData(@Param("groupType") String groupType);
}
