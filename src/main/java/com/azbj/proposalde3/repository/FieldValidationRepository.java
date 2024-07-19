package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.CorrectValue;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class FieldValidationRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public CorrectValue getCurrentItemData() {
        // Logic to retrieve data for the current item based on a mapping table
        String sql = "SELECT * FROM correct_value WHERE current_item = :currentItem";
        Query query = entityManager.createNativeQuery(sql, CorrectValue.class);
        query.setParameter("currentItem", getCurrentItem()); // Assuming getCurrentItem() is defined elsewhere
        return (CorrectValue) query.getSingleResult();
    }

    public List<String> fetchEmployeeIdList() {
        // Logic to fetch the list of values for Employee ID from the database
        String sql = "SELECT employee_id FROM employee_list";
        Query query = entityManager.createNativeQuery(sql);
        return query.getResultList();
    }

    public List<String> fetchNomineeDetails() {
        // Logic to fetch nominee details from the database
        String sql = "SELECT CHAR_VALUE FROM azbj_system_constants WHERE sys_type='NOM_DET'";
        Query query = entityManager.createNativeQuery(sql);
        return query.getResultList();
    }

    private String getCurrentItem() {
        // Placeholder method to simulate getting the current item
        // In a real scenario, this would be implemented to return the actual current item
        return "someCurrentItem";
    }
}
