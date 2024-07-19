package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.TableFieldMappingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableFieldMappingService {

    @Autowired
    private TableFieldMappingRepository repository;

    public List<String> fetchReasons() {
        return repository.findReasons();
    }

    public List<String> fetchReferralNameLOV(String fscCode) {
        return repository.findReferralNameLOV(fscCode);
    }

    public List<String> fetchLOVData(String groupType) {
        return repository.getLOVData(groupType);
    }

    public String fetchImageDetails(String proposalType, int numberOfPages, String formVersion, String imagePath, String fileName) {
        String suffix = "";
        int loadedPage = 0;

        if (proposalType.equals("N")) {
            if (numberOfPages == 19) {
                suffix = "_12.TIF";
                loadedPage = 12;
            } else if (numberOfPages == 50) {
                suffix = "_25.TIF";
                loadedPage = 1;
            }
        } else if (proposalType.equals("O")) {
            if (numberOfPages == 14) {
                suffix = "_6.TIF";
                loadedPage = 6;
            } else if (numberOfPages == 27) {
                suffix = "_11.TIF";
                loadedPage = 6;
            }
        }

        String constructedFileName = imagePath + fileName + suffix;

        if (formVersion.startsWith("10.")) {
            // Logic to read the image file and display it in the designated image area
            return constructedFileName; // Placeholder for actual image reading logic
        } else {
            // Logic to ensure the image area is not visible, adjust the image file path, and read the image using a different method
            return constructedFileName; // Placeholder for actual image reading logic
        }
    }
}
