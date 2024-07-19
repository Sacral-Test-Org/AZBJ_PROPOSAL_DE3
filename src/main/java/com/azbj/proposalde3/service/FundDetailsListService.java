package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.FundDetailsListRepository;
import com.azbj.proposalde3.model.FundDetailsList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundDetailsListService {

    @Autowired
    private FundDetailsListRepository fundDetailsListRepository;

    public List<FundDetailsList> getAvailableFunds(String productCode, String dateRange) {
        return fundDetailsListRepository.findAvailableFunds(productCode, dateRange);
    }

    public String fetchImageData(String currentBlock, String currentItem) {
        return fundDetailsListRepository.findImageData(currentBlock, currentItem);
    }
}
