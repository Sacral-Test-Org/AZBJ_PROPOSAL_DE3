package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.StateRepository;
import com.azbj.proposalde3.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StateService {

    @Autowired
    private StateRepository stateRepository;

    public List<State> fetchStates() {
        return stateRepository.findAllStates();
    }
}
