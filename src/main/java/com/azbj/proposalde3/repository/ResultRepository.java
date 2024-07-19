package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {

    @Query(value = "SELECT * FROM RESULT FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
    Result findFirstRecord();
}
