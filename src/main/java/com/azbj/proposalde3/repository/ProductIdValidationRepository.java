package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.ProductIdValidation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductIdValidationRepository extends JpaRepository<ProductIdValidation, Long> {

    @Query("SELECT COUNT(*) FROM azbj_package_master WHERE product_id = :productId")
    int findProductById(@Param("productId") String productId);

    @Query("SELECT package_code FROM azbj_package_master WHERE product_id = :productId")
    String findPackageCodeByProductId(@Param("productId") String productId);

    @Query("SELECT COUNT(product_id) FROM AZBJ_SOLUTION_CONFIG_MST WHERE product_id = :productId AND PRODUCT_TYPE = 'M'")
    int findSolutionConfigByProductId(@Param("productId") String productId);

    @Query("SELECT * FROM (SELECT product_ext_reference prod_desc, a.product_id, UPPER(description) description FROM cfg_v_oc_products_api a, azbj_product_launch_date b WHERE a.product_id >= 3 AND a.product_id NOT IN (5, 7) AND a.product_id = b.product_id AND (b.closure_date IS NULL OR MONTHS_BETWEEN(SYSDATE, closure_date) < 3) AND a.product_id NOT IN (SELECT TO_NUMBER(SUBSTR(char_value, 2, LENGTH(char_value) - 2)) FROM azbj_system_constants WHERE UPPER(sys_type) = 'CASHIER' AND UPPER(sys_code) = 'PRODUCT_BLOCKED' AND date_value < SYSDATE) AND a.product_id IN (SELECT PRODUCT_ID FROM AZBJ_PRODUCT_COVERS WHERE (CASE WHEN NVL(IL_FLAG, 'N') IN ('Y', 'P') AND NVL(GROUP_FLAG, 'N') <> 'Y' THEN 'UL' WHEN NVL(IL_FLAG, 'N') NOT IN ('Y', 'P') AND NVL(GROUP_FLAG, 'N') <> 'Y' THEN 'TR' WHEN NVL(GROUP_FLAG, 'N') = 'Y' THEN 'GRP' END) = (SELECT (CASE WHEN NVL(IL_FLAG, 'N') IN ('Y', 'P') AND NVL(GROUP_FLAG, 'N') <> 'Y' THEN 'UL' WHEN NVL(IL_FLAG, 'N') NOT IN ('Y', 'P') AND NVL(GROUP_FLAG, 'N') <> 'Y' THEN 'TR' WHEN NVL(GROUP_FLAG, 'N') = 'Y' THEN 'GRP' END) FROM AZBJ_PRODUCT_COVERS WHERE PRODUCT_ID = :productId)) ORDER BY a.product_id)")
    List<ProductIdValidation> findProductDetailsForLOV(@Param("productId") String productId);
}
