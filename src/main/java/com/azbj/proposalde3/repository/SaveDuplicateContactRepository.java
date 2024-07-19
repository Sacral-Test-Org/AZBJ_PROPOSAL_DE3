package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.ControlModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaveDuplicateContactRepository extends JpaRepository<ControlModel, Long> {
    boolean saveDuplicateContactDetails(ControlModel controlModel);
}
