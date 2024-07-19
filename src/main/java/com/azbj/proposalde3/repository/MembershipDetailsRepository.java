package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.MembershipDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MembershipDetailsRepository extends JpaRepository<MembershipDetails, Long> {

    @Query("SELECT m FROM MembershipDetails m WHERE m.applnNo = :applnNo AND m.deFlag IN ('D1', 'D2') AND m.proposalType = 'PSSS' ORDER BY m.proposalType")
    List<MembershipDetails> findMembershipDetails(@Param("applnNo") String applnNo);
}
