package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.CauseOfDeath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CauseOfDeathRepository extends JpaRepository<CauseOfDeath, Long> {
    CauseOfDeath findById(Long id);
    CauseOfDeath save(CauseOfDeath causeOfDeath);
}
