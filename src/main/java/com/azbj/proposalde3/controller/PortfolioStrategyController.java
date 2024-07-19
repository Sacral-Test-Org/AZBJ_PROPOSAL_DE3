package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PortfolioStrategyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/portfolio-strategy")
public class PortfolioStrategyController {

    @Autowired
    private PortfolioStrategyService portfolioStrategyService;

    @PostMapping("/validate")
    public ResponseEntity<Map<String, Object>> validatePortfolioStrategy(@RequestBody Map<String, Object> request) {
        String portfolioStrategy = (String) request.get("portfolioStrategy");
        String frequency = (String) request.get("frequency");
        String productDefinition = (String) request.get("productDefinition");
        Integer productCode = (Integer) request.get("productCode");
        String packageCode = (String) request.get("packageCode");

        Map<String, Object> response = portfolioStrategyService.validatePortfolioStrategy(portfolioStrategy, frequency, productDefinition, productCode, packageCode);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}