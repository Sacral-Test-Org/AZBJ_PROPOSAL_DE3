package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PanValidation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PanValidationRepository extends JpaRepository<PanValidation, Long> {

    @Query("SELECT COUNT(1) FROM ocp_policy_bases a, ocp_interested_parties b, cp_partners c WHERE a.contract_id = b.contract_id AND b.partner_id = c.part_id AND c.tax_id = :panCardNumber AND C.TAX_ID NOT IN ('AG/NRI/60A', 'AG/NRI/61A') AND a.top_indicator = 'Y' AND a.action_code <> 'D' AND b.top_indicator = 'Y' AND b.action_code <> 'D' AND ROWNUM = 1")
    int validatePanCard(@Param("panCardNumber") String panCardNumber);

    @Query("SELECT middle_name, first_name, surname, DATE_OF_BIRTH FROM cp_partners WHERE part_id = CASE WHEN :ipPh = 'IP' THEN :ipPartId WHEN :ipPh = 'PH' THEN :phPartId ELSE :phPartId END")
    Object[] getPanCardDetails(@Param("ipPh") String ipPh, @Param("ipPartId") Long ipPartId, @Param("phPartId") Long phPartId);
}
