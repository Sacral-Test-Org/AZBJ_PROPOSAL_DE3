package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.entity.SolutionProduct;
import com.azbj.proposalde3.entity.RiderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SolutionProductRepository extends JpaRepository<SolutionProduct, Long> {

    @Query("SELECT sp FROM SolutionProduct sp WHERE sp.productCode = :productCode")
    List<SolutionProduct> findByProductCode(String productCode);

    @Query("SELECT * FROM azbj_package_master WHERE product_id = :productCode")
    List<SolutionProduct> findByProductId(String productCode);

    @Query("SELECT sp.payoutFrequency FROM SolutionProduct sp")
    List<String> fetchPayoutFrequency();

    @Query("SELECT sp.sumAssured FROM SolutionProduct sp")
    List<Double> findSumAssured();

    @Query("SELECT rd FROM RiderDetails rd")
    List<RiderDetails> findRiderDetails();

    RiderDetails save(RiderDetails riderDetails);

    @Query("SELECT COUNT(sp.productId) FROM SolutionProduct sp WHERE sp.productCode = :productCode AND sp.productType = 'M'")
    int validateProductCode(String productCode);

    @Query("SELECT pm FROM PaymentMethods pm WHERE pm.frequency = :frequency AND pm.fscCode = :fscCode")
    List<String> findPaymentMethods(String frequency, String fscCode);

    default SolutionProduct manageSolutionProductDetails(SolutionProduct solutionProductDetails) {
        // Implement CRUD operations here
        return save(solutionProductDetails);
    }
}