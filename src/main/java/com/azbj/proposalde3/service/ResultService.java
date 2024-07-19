package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ResultRepository;
import com.azbj.proposalde3.model.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResultService {

    @Autowired
    private ResultRepository resultRepository;

    public Result fetchFirstRecord() {
        return resultRepository.findFirstRecord();
    }

    public String determineResultType(String resultField) {
        if (resultField != null && resultField.equals("E")) {
            return "E";
        }
        return "OTHER";
    }
}
