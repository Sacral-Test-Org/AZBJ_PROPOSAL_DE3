package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.LanguageRepository;
import com.azbj.proposalde3.model.Language;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguageService {

    @Autowired
    private LanguageRepository languageRepository;

    public List<Language> getLanguages() {
        return languageRepository.findAll();
    }

    public void saveSelectedLanguage(Language selectedLanguage) {
        languageRepository.save(selectedLanguage);
    }
}
