package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.CP_SearchResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CP_SearchResultRepository extends JpaRepository<CP_SearchResult, Long> {

    @Query(value = "SELECT partner_id, azbj_pk0_acc.get_policy_ref(a.contract_id) policy_ref, c.contract_status status, d.role_type role_type, e.sum_insured_whole_cover sum_assured, f.term_start_date start_date, h.DATE_OF_RECEIPT risk_date, c.product_id Product, CASE WHEN g.ml_perc > 0 OR g.oc_perc > 0 OR g.nri_perc > 0 OR g.sr_perc > 0 THEN 'YES' ELSE 'NO' END rated_up, g.ml_perc, g.oc_perc, g.nri_perc, g.sr_perc FROM ocp_interested_parties a, cp_partners b, ocp_policy_versions c, ocp_ip_links d, ocp_policy_covers e, ocp_policy_bases f, azbj_policy_covers_ext g, azbj_policy_contract_ext h WHERE a.partner_id = :partnerId AND a.partner_id = b.part_id AND a.contract_id = c.contract_id AND d.contract_id = c.contract_id AND a.contract_id = c.contract_id AND a.ip_no = d.ip_no AND a.top_indicator = 'Y' AND a.action_code <> 'D' AND d.top_indicator = 'Y' AND d.action_code <> 'D' AND c.top_indicator = 'Y' AND e.contract_id = c.contract_id AND e.contract_id = d.contract_id AND a.contract_id = e.contract_id AND e.action_code <> 'D' AND e.top_indicator = 'Y' AND e.cover_code LIKE 'L%' AND f.contract_id = c.contract_id AND f.contract_id = d.contract_id AND a.contract_id = f.contract_id AND e.contract_id = f.contract_id AND f.action_code <> 'D' AND f.top_indicator = 'Y' AND g.contract_id = c.contract_id AND g.contract_id = d.contract_id AND a.contract_id = g.contract_id AND g.contract_id = f.contract_id AND g.action_code <> 'D' AND g.top_indicator = 'Y' AND g.cover_code LIKE 'L%' AND h.contract_id = c.contract_id AND h.contract_id = d.contract_id AND a.contract_id = h.contract_id AND h.contract_id = f.contract_id UNION SELECT partner_id, azbj_pk0_acc.get_policy_ref(a.contract_id) policy_ref, c.contract_status status, d.role_type role_type, e.sum_insured_whole_cover sum_assured, f.term_start_date start_date, h.date_of_receipt risk_date, c.product_id product, CASE WHEN g.ml_perc > 0 OR g.oc_perc > 0 OR g.nri_perc > 0 OR g.sr_perc > 0 THEN 'YES' ELSE 'NO' END rated_up, g.ml_perc, g.oc_perc, g.nri_perc, g.sr_perc FROM wip_interested_parties a, cp_partners b, wip_policy_versions c, wip_ip_links d, wip_policy_covers e, wip_policy_bases f, wip_azbj_policy_covers_ext g, wip_azbj_policy_contract_ext h WHERE a.partner_id = :partnerId AND a.partner_id = b.part_id AND a.contract_id = c.contract_id AND d.contract_id = c.contract_id AND a.contract_id = c.contract_id AND a.ip_no = d.ip_no AND e.contract_id = c.contract_id AND e.contract_id = d.contract_id AND a.contract_id = e.contract_id AND e.cover_code LIKE 'L%' AND f.contract_id = c.contract_id AND f.contract_id = d.contract_id AND a.contract_id = f.contract_id AND e.contract_id = f.contract_id AND g.contract_id = c.contract_id AND g.contract_id = d.contract_id AND a.contract_id = g.contract_id AND g.contract_id = f.contract_id AND g.cover_code LIKE 'L%' AND h.contract_id = c.contract_id AND h.contract_id = d.contract_id AND a.contract_id = h.contract_id AND h.contract_id = f.contract_id", nativeQuery = true)
    List<CP_SearchResult> findPolicyDetailsByPartnerId(@Param("partnerId") Long partnerId);

    @Query(value = "SELECT * FROM cp_partners WHERE first_name = :firstName AND last_name = :lastName AND date_of_birth = TO_DATE(:dateOfBirth, 'DD/MM/YYYY') AND gender = :gender AND father_name = :fatherName AND spouse_name = :spouseName", nativeQuery = true)
    List<CP_SearchResult> searchCustomerProfiles(@Param("firstName") String firstName, @Param("lastName") String lastName, @Param("dateOfBirth") String dateOfBirth, @Param("gender") String gender, @Param("fatherName") String fatherName, @Param("spouseName") String spouseName);

    @Query(value = "UPDATE cp_partners SET first_name = :firstName, last_name = :lastName, occupation = :occupation, father_name = :fatherName, husband_name = :husbandName WHERE partner_id = :partnerId", nativeQuery = true)
    void updateCustomerProfile(@Param("partnerId") Long partnerId, @Param("firstName") String firstName, @Param("lastName") String lastName, @Param("occupation") String occupation, @Param("fatherName") String fatherName, @Param("husbandName") String husbandName);

    @Query(value = "UPDATE cp_search_result SET to_chk = '0' WHERE merge_option = :option", nativeQuery = true)
    void updateToChkField(@Param("option") String option);
}
