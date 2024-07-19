package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.Context;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContextRepository extends JpaRepository<Context, Long> {

    @Query("SELECT c FROM Context c WHERE c.blockName = ?1 AND c.itemName = ?2")
    Context findContext(String currentBlock, String currentItem);

    @Query("SELECT c FROM Context c")
    List<Context> fetchContext();
}
