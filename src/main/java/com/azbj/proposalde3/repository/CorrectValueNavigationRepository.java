package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.CorrectValueNavigation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CorrectValueNavigationRepository extends JpaRepository<CorrectValueNavigation, Long> {

    @Query("SELECT key_prev_item FROM azbj_new_bbu_field_map_gr WHERE LIST_NAME = :currentItem AND LIST_BLOCK_NAME = :currentBlock AND proposal_type = :proposalType")
    String findPreviousItem(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock, @Param("proposalType") String proposalType);

    @Query("SELECT MAX(strip_no) FROM azbj_strip_field_mapping a WHERE block_name = :currentBlock AND field_name = :currentItem AND proposal_type = :proposalType AND EXISTS (SELECT 1 FROM azbj_proposal_stripes b WHERE a.proposal_type = b.proposal_type AND INSTR(stripe_string, '~' || a.strip_no || '~') > 0)")
    Integer getStripNumber(@Param("currentItem") String currentItem, @Param("currentBlock") String currentBlock, @Param("proposalType") String proposalType);
}
