package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.AML;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AMLRepository extends JpaRepository<AML, Long> {

    @Query("SELECT DISTINCT proof_type, proof_desc FROM azbj_aml_proof_master WHERE active_flag = 'Y' AND partner_type = NVL(:partnerType, partner_type) AND document_type = NVL(:documentType, document_type)")
    List<Object[]> fetchLOVData(@Param("documentType") String documentType, @Param("partnerType") String partnerType);

    @Query("SELECT proof_desc FROM azbj_aml_proof_master WHERE proof_type = :proofType")
    String findProofDescriptionByType(@Param("proofType") String proofType);

    @Query("SELECT CHK_EDIT_AML FROM control_flags WHERE ROWNUM = 1")
    String findControlFlag();

    @Query("SELECT proof_type FROM azbj_aml_proof_master WHERE proof_type = :proofType")
    String validateProofType(@Param("proofType") String proofType);

    @Override
    <S extends AML> S save(S entity);
}
