package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.ITDeclaration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ITDeclarationRepository extends JpaRepository<ITDeclaration, Long> {

    @Query("SELECT cont_id FROM azbj_batch_items WHERE application_no = :applicationNumber AND transaction_type = :transactionType AND rownum = 1")
    String fetchContractID(@Param("applicationNumber") String applicationNumber, @Param("transactionType") String transactionType);
}
