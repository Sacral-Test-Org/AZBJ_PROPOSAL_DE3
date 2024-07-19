package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.azbj.proposalde3.model.ScrutinyFailure;

@Repository
public interface ScrutinyFailureRepository extends JpaRepository<ScrutinyFailure, Long> {
}
