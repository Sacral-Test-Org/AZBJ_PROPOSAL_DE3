package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.DocumentDE;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentDERepository extends JpaRepository<DocumentDE, Long> {
}
