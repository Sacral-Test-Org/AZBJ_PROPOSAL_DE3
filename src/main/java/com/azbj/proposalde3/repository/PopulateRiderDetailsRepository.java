package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.RiderDetail;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

@Repository
public interface PopulateRiderDetailsRepository extends JpaRepository<RiderDetail, Long> {

    @Query("SELECT new com.azbj.proposalde3.model.RiderDetail(a.packageCode, a.packageDesc, b.coverCode, c.coverDescription) " +
           "FROM AzbjPackageMaster a, AzbjPackageCovers b, CfgVProdCoversApi c " +
           "WHERE a.packageCode = b.packageCode " +
           "AND a.packageCode = :packageCode " +
           "AND a.productId = :productCode " +
           "AND a.productId = c.productId " +
           "AND b.coverCode = c.coverCode " +
           "ORDER BY b.coverCode")
    List<RiderDetail> getRiderDetails(@Param("packageCode") String packageCode, @Param("productCode") String productCode);
}
