package com.azbj.proposalde3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.azbj.proposalde3.repository.ExitButtonRepository;

@Service
public class ExitButtonService {

    @Autowired
    private ExitButtonRepository exitButtonRepository;

    public void clearFields() {
        exitButtonRepository.clearFields();
    }

    public void resetForm() {
        exitButtonRepository.resetForm();
    }
}
