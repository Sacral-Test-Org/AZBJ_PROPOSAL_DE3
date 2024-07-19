package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ProfessionRepository;
import com.azbj.proposalde3.model.Profession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessionService {

    @Autowired
    private ProfessionRepository professionRepository;

    public List<Profession> getProfessions(String industryCode) {
        return professionRepository.findProfessionsByIndustryCode(industryCode);
    }
}
