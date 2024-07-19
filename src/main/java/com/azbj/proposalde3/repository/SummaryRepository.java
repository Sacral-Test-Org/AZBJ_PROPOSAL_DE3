package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.azbj.proposalde3.model.Summary;

@Repository
public interface SummaryRepository extends JpaRepository<Summary, Long> {

    @Query("SELECT s.gender FROM Summary s WHERE s.sex = :sex")
    String findGenderBySex(@Param("sex") String sex);
}
