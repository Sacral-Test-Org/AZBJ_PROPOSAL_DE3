package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.NomineeRepository;
import com.azbj.proposalde3.model.Nominee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;

@Service
public class NomineeService {

    @Autowired
    private NomineeRepository nomineeRepository;

    public Nominee getNomineeDetails(String applicationNo) {
        try {
            List<Nominee> nominees = nomineeRepository.findNomineeDetails(applicationNo);
            if (nominees.isEmpty()) {
                throw new RuntimeException("No nominees found for the given application number.");
            }
            Nominee firstNominee = nominees.get(0);
            calculateAgeAndCheckMinor(firstNominee);
            return firstNominee;
        } catch (Exception e) {
            throw new RuntimeException("Error retrieving nominee details: " + e.getMessage());
        }
    }

    private void calculateAgeAndCheckMinor(Nominee nominee) {
        LocalDate dob = nominee.getNomineeDob();
        LocalDate currentDate = LocalDate.now();
        int age = Period.between(dob, currentDate).getYears();
        nominee.setAge(age);
        if (age < 18) {
            nominee.setMinor(true);
        } else {
            nominee.setMinor(false);
        }
    }
}
