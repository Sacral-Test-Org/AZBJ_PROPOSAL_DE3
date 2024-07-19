package com.azbj.proposalde3.repository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class ExitButtonRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void clearFields() {
        String clearFieldsQuery = "UPDATE cp_search_ph SET first_name = '', last_name = '', date_of_birth = NULL, gender = '', policy_ref = ''";
        entityManager.createQuery(clearFieldsQuery).executeUpdate();
    }

    @Transactional
    public void resetForm() {
        String resetFormQuery = "UPDATE cp_search_ph SET first_name = '', last_name = '', date_of_birth = NULL, gender = '', policy_ref = ''";
        entityManager.createQuery(resetFormQuery).executeUpdate();
    }
}
