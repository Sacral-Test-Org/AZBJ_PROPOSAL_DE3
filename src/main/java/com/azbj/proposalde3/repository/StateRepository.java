package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

    @Query("SELECT s FROM State s ORDER BY s.stateName")
    List<State> findAllStates();
}
