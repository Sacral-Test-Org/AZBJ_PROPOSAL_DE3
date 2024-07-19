package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.RiderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RiderDetailsRepository extends JpaRepository<RiderDetails, Long> {

    @Query("SELECT MAX(a.stripNo) FROM AzbjStripFieldMapping a WHERE a.blockName = :blockName AND a.fieldName = :fieldName AND a.proposalType = :proposalType AND EXISTS (SELECT 1 FROM AzbjProposalStripes b WHERE a.proposalType = b.proposalType AND INSTR(b.stripeString, '~' || a.stripNo || '~') > 0)")
    Integer findMaxStripNo(@Param("blockName") String blockName, @Param("fieldName") String fieldName, @Param("proposalType") String proposalType);

    @Query("SELECT a.packageCode, a.packageDesc, b.coverCode, c.coverDescription FROM AzbjPackageMaster a, AzbjPackageCovers b, CfgVProdCoversApi c WHERE a.packageCode = b.packageCode AND a.packageCode = :packageCode AND a.productId = :productCode AND a.productId = c.productId AND b.coverCode = c.coverCode ORDER BY b.coverCode")
    List<Object[]> getRiderDetails(@Param("packageCode") String packageCode, @Param("productCode") String productCode);

    void deleteById(Long riderId);

    @Query("DELETE FROM RiderDetails r WHERE r.coverCode = :coverCode")
    void deleteByCoverCode(@Param("coverCode") String coverCode);

    @Query("SELECT r FROM RiderDetails r")
    List<RiderDetails> findRiderDetails();

    RiderDetails save(RiderDetails riderDetails);

    @Query("DELETE FROM RiderDetails r WHERE r.coverCode = :coverCode")
    void deleteRiderDetails(@Param("coverCode") String coverCode);
}