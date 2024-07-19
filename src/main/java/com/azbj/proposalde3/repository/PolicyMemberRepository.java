package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.PolicyMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PolicyMemberRepository extends JpaRepository<PolicyMember, Long> {

    @Transactional
    @Modifying
    @Query("UPDATE PolicyMember pm SET pm.coverCode = :coverCode, pm.sumAssured = :sumAssured, pm.age = :age WHERE pm.id = :id")
    void updateCoverageDetails(@Param("id") Long id, @Param("coverCode") String coverCode, @Param("sumAssured") Double sumAssured, @Param("age") Integer age);

    @Transactional
    @Modifying
    @Query("UPDATE PolicyMember pm SET pm.coverCode = :coverCode WHERE pm.id = :id")
    void updateCoverCode(@Param("id") Long id, @Param("coverCode") String coverCode);

    @Transactional
    @Modifying
    @Query("UPDATE PolicyMember pm SET pm.spouseDetails = :spouseDetails WHERE pm.id = :id")
    void manageSpouseDetails(@Param("id") Long id, @Param("spouseDetails") String spouseDetails);

    @Transactional
    @Modifying
    @Query("DELETE FROM PolicyMember pm WHERE pm.id = :id")
    void deleteById(@Param("id") Long id);
}
