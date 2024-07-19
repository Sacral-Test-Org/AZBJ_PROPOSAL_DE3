package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PinCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PinCodeRepository extends JpaRepository<PinCode, Long> {

    @Query("SELECT DISTINCT pincode, state, district FROM azbj_state_district_pincode")
    List<PinCode> findValidPinCodes();
}
