package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.StateService;
import com.azbj.proposalde3.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/states")
public class StateController {

    @Autowired
    private StateService stateService;

    @GetMapping
    public ResponseEntity<List<State>> getStates() {
        List<State> states = stateService.fetchStates();
        return ResponseEntity.ok(states);
    }
}
