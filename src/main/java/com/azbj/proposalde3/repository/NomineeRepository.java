package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.Nominee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NomineeRepository extends JpaRepository<Nominee, Long> {

    @Query("SELECT n.nomineeName, n.nomineeBirthplace, n.nomineeDob, n.nomineeRelation, n.nomineeGender " +
           "FROM Nominee n " +
           "WHERE n.applicationNo = :applicationNo " +
           "AND n.topIndicator = 'Y' " +
           "AND n.nomineeNumber = 1")
    List<Object[]> findNomineeDetails(@Param("applicationNo") String applicationNo);
}
