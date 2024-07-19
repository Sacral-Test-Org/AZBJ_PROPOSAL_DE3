package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.Profession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfessionRepository extends JpaRepository<Profession, Long> {

    @Query("SELECT a FROM Profession a, IndustryOccupationLink b WHERE a.occCode = b.occCode AND b.indCode = :industryCode AND a.endDate IS NULL ORDER BY a.occDesc")
    List<Profession> findProfessionsByIndustryCode(@Param("industryCode") Long industryCode);
}
