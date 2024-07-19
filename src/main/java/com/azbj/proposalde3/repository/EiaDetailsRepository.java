package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.entity.EiaDetails;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface EiaDetailsRepository extends CrudRepository<EiaDetails, Long> {

    @Query("SELECT COUNT(e) > 0 FROM EiaDetails e WHERE e.applicationNo = :applicationNo AND e.topIndicator = 'Y' AND e.eiaAccountType = :accountType")
    boolean checkEiaExists(@Param("applicationNo") String applicationNo, @Param("accountType") String accountType);
}
