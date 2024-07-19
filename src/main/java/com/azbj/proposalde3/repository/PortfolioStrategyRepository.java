package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PortfolioStrategy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioStrategyRepository extends JpaRepository<PortfolioStrategy, Long> {

    @Query("SELECT ps FROM PortfolioStrategy ps WHERE ps.portfolioStrategy = :portfolioStrategy AND ps.frequency = :frequency AND ps.productDefinition = :productDefinition AND ps.productCode = :productCode AND ps.packageCode = :packageCode")
    PortfolioStrategy validatePortfolioStrategy(@Param("portfolioStrategy") String portfolioStrategy, 
                                                @Param("frequency") String frequency, 
                                                @Param("productDefinition") String productDefinition, 
                                                @Param("productCode") int productCode, 
                                                @Param("packageCode") String packageCode);
}
