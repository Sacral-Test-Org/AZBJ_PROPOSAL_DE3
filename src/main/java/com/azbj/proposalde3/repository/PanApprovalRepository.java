package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PanApproval;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PanApprovalRepository extends JpaRepository<PanApproval, Long> {
    PanApproval save(PanApproval panApprovalDetails);
    
    @Modifying
    @Query("UPDATE PanApproval p SET p.approvalStatus = :approvalStatus WHERE p.id = :id")
    int updateApprovalStatus(@Param("id") Long id, @Param("approvalStatus") String approvalStatus);
}