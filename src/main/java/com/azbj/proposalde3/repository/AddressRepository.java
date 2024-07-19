package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    @Query("SELECT DISTINCT a.area, a.pincode FROM Address a WHERE UPPER(a.state) = UPPER(:state) AND UPPER(a.district) = UPPER(:district) AND a.pincode = NVL(:postcode, a.pincode) ORDER BY a.pincode, a.area")
    List<Object[]> findAddressDetails(@Param("state") String state, @Param("district") String district, @Param("postcode") String postcode);
}
