package com.azbj.proposalde3.repository;

import com.azbj.proposalde3.model.NonstpReason;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
public class NonstpReasonRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void save(NonstpReason nonstpReason) {
        entityManager.persist(nonstpReason);
    }

    @Transactional
    public void updateNonstpReason() {
        NonstpReason nonstpReason = entityManager.find(NonstpReason.class, 1L); // Assuming ID is 1 for example
        if (nonstpReason != null) {
            nonstpReason.setReason(""); // Clear the non-stop reason
            nonstpReason.setRecheckFlag('Y');
            nonstpReason.setStopFlag('Y');
            entityManager.merge(nonstpReason);
        }
    }

    @Transactional
    public void updateScrutinyPartnerForm(String applicationNumber, Object previousPolicyDetails) {
        // Logic to update scrutiny partner form based on application number and previous policy details
        // This is a placeholder for the actual implementation
    }
}
