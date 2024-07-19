package com.azbj.proposalde3.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.CrudRepository;
import com.azbj.proposalde3.model.Poplist;

public interface PoplistRepository extends CrudRepository<Poplist, Long> {

    @Query("SELECT p.internalValue FROM Poplist p WHERE p.poplistCode = :poplistCode AND UPPER(p.screenValue) = UPPER(:screenValue)")
    String getInternalValue(@Param("poplistCode") String poplistCode, @Param("screenValue") String screenValue);
}
