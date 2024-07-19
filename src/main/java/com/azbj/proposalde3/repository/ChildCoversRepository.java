package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.azbj.proposalde3.model.ChildCover;

@Repository
public interface ChildCoversRepository extends JpaRepository<ChildCover, Long> {
    void deleteById(Long childCoverId);
}